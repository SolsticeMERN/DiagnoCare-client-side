import PropTypes from "prop-types";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Fragment } from "react";

const SeeDetailsModal = ({ closeModal, isOpen, seeDetailsInfo }) => {
  console.log(seeDetailsInfo);

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
                  See All details
                </DialogTitle>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    User Name: {seeDetailsInfo.name}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">Email: {seeDetailsInfo.email}</p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">Blood: {seeDetailsInfo.blood}</p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    District: {seeDetailsInfo.district}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    upazila: {seeDetailsInfo.upazila}
                  </p>
                </div>

                <hr className="mt-8 " />
                <div className="flex mt-2 justify-around">
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
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

SeeDetailsModal.propTypes = {
  seeDetailsInfo: PropTypes.object,
  closeModal: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default SeeDetailsModal;
