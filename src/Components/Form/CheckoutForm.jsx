import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import "./CheckoutForm.css";
import useAxiosSecure from "../../Pages/Hooks/useAxiosSecure";
import { ImSpinner9 } from "react-icons/im";
import useAuth from "../../Pages/Hooks/useAuth";

const CheckoutForm = ({ closeModal, bookingInfo, refetch }) => {
  const stripe = useStripe();
  const {user} = useAuth()
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState(bookingInfo?.price);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (bookingInfo?.price && bookingInfo?.price > 1) {
      getClientSecret({ price: discountedPrice });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [discountedPrice]);

  const getClientSecret = async (price) => {
    const { data } = await axiosSecure.post("/create-payment-intent", price);
    console.log("clientSecret from server -->", data);
    setClientSecret(data.clientSecret);
  };

  const applyPromoCode = () => {
    // Check if promo code is valid and apply discount
    if (promoCode === "SUMMER2024") {
      setDiscountedPrice(bookingInfo?.price * (1 - 0.15)); // 15% discount
    } else if (promoCode === "HEALTH2024") {
      setDiscountedPrice(bookingInfo?.price * (1 - 0.1)); // 10% discount
    } else {
      // Handle invalid promo code
      setCardError("Invalid promo code");
      setPromoCode("");
      return;
    }

    // Clear any existing errors
    setCardError("");
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements || !clientSecret || !discountedPrice) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
      setProcessing(false);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setCardError("");
    }

    // // confirm payment
    // const { paymentIntent, error: confirmError } =
    //   await stripe.confirmCardPayment(clientSecret, {
    //     payment_method: {
    //       card: card,
    //       billing_details: {
    //         name: user?.displayName || "anonyms",
    //         email: user?.email || "anonyms",
    //       },
    //     },
    //     amountPaid: discountedPrice, // amount in cents
    //     currency: "usd", // currency of the payment
    //   });

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: user?.displayName || "Anonymous",
          email: user?.email || "anonymous@example.com",
        },
      },
    });

    if (confirmError) {
      console.log(confirmError);
      setCardError(confirmError.message);
      setProcessing(false);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      // create payment object
      const paymentInfo = {
        ...bookingInfo,
        bookingId: bookingInfo?._id,
        transactionId: paymentIntent.id,
        date: new Date(),
        reportStatus: "pending",
        amountPaid: discountedPrice, // save the discounted amount
      };
      delete paymentInfo._id;
      delete paymentInfo.price;
      console.log(paymentInfo);

      try {
        // 2. save test info in booking collection (db)
        await axiosSecure.post("/booking", paymentInfo);

        // Decrement slots
        const updateResponse = await axiosSecure.patch(
          `/update-slots/${bookingInfo._id}`,
          {
            slots: bookingInfo.slots - 1,
          }
        );

        console.log(updateResponse);

        refetch();

        setProcessing(false);
        closeModal();
      } catch (err) {
        console.log(err);
        setCardError("Failed to save booking. Please try again.");
      }

      setProcessing(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="flex mt-2 justify-around gap-2">
          <input
            type="text"
            placeholder="Enter promo code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border rounded-md p-2"
          />
          <button
            type="button"
            onClick={applyPromoCode}
            className="inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Apply Promo Code
          </button>
        </div>
        <div className="flex mt-2 justify-around">
          <button
            type="submit"
            disabled={!stripe || !clientSecret || processing}
            className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
          >
            {processing ? (
              <ImSpinner9 className="animate-spin m-auto" size={24} />
            ) : (
              `Pay ${discountedPrice}`
            )}
          </button>
          <button
            onClick={() => {
              closeModal();
            }}
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
          >
            Cancel
          </button>
        </div>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
    </div>
  );
};

export default CheckoutForm;
