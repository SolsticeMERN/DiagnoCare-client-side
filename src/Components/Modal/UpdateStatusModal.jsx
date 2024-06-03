import PropTypes from "prop-types";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Pages/Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const UpdateStatusModal = ({ closeModal, isOpen, updateStatus, refetch }) => {
  const axiosSecure = useAxiosSecure();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const status = { status: data.status };
    try {
      const res = await axiosSecure.patch(`/statusUpdate/${updateStatus._id}`, status, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (res.data.modifiedCount > 0) {
        toast.success('User status updated successfully');
        refetch();
        closeModal();
        
      }
    } catch (err) {
      console.error('Error updating status:', err); 
      toast.error('Failed to update status');
    }
  };

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
                  Update Status
                </DialogTitle>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-2">
                  <select
                    id="status"
                    {...register("status")}
                    className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-red-500"
                    defaultValue=""
                  >
                    <option value="active">Active</option>
                    <option value="blocked">Blocked</option>
                  </select>
                  <div className="flex mt-2 justify-around">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                    >
                      Update Status
                    </button>
                    <button
                      onClick={closeModal}
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

UpdateStatusModal.propTypes = {
  updateStatus: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default UpdateStatusModal;
