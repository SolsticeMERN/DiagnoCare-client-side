import { useState } from "react";

const CouponCode = () => {
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [message, setMessage] = useState("");

  const validCoupons = {
    SUMMER2024: 15,
    HEALTH2024: 10,
    FACILITY10: 20,
  };

  const handleApplyCoupon = () => {
    if (validCoupons[couponCode]) {
      setDiscount(validCoupons[couponCode]);
      setMessage(`Coupon applied! You get ${validCoupons[couponCode]}% off.`);
    } else {
      setDiscount(0);
      setMessage("Invalid coupon code. Please try again.");
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-md mx-auto mt-5">
      <h2 className="text-2xl font-bold mb-4">Apply Coupon Code</h2>
      <input
        type="text"
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
        placeholder="Enter your coupon code"
      />
      <button
        onClick={handleApplyCoupon}
        className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
      >
        Apply Coupon
      </button>
      {message && (
        <p className="mt-4 text-center text-gray-700">{message}</p>
      )}
      {discount > 0 && (
        <p className="mt-4 text-center text-green-500">
          Discount Applied: {discount}%
        </p>
      )}
    </div>
  );
};

export default CouponCode;
