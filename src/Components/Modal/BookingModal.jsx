import PropTypes from "prop-types";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Fragment } from "react";
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../Form/CheckoutForm";
import useAuth from "../../Pages/Hooks/useAuth";

// / recreating the `Stripe` object on every render.
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const BookingModal = ({ closeModal, isOpen, testDetail, today, refetch }) => {
  const {user} = useAuth()

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  className="text-lg font-medium text-center leading-6 text-gray-900"
                >
                  Review Info Before Booking
                </DialogTitle>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Test Name: {testDetail.title}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">userName: {user?.displayName}</p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">userEmail: {user?.email}</p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">Date: {today}</p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Slots: {testDetail.slots}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Price: $ {testDetail.price}
                  </p>
                </div>
          
                <hr className="mt-8 " />
                {/* checkout form */}
                <Elements stripe={stripePromise}>
                  <CheckoutForm refetch={refetch}  closeModal={closeModal} testDetail={testDetail} />
                </Elements>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

BookingModal.propTypes = {
  bookingInfo: PropTypes.object,
  closeModal: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default BookingModal;
