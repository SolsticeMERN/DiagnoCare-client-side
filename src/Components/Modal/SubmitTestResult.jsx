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

const SubmitTestResult = ({ closeModal, isOpen, reservation }) => {
  const axiosSecure = useAxiosSecure();

  const { register, handleSubmit } = useForm({
    defaultValues: reservation
  });

  const onSubmit = async (data) => {
    console.log(data);

    const testResult = {
      ...reservation,
      pdf: data.pdf,
      reportStatus: "submit"
    };
    delete testResult?._id

    const res = await axiosSecure.post('/result', testResult);
    if(res.data.insertedId) {
        toast.success('Report Submit Successfully')
        closeModal()
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
                  Update Test Result
                </DialogTitle>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-2">
                  {Object.keys(reservation).map(key => (
                    <input
                      key={key}
                      type="hidden"
                      {...register(key)}
                      value={reservation[key]}
                    />
                  ))}
                  <label htmlFor="pdf" className="block text-gray-600">
                    PDF
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md"
                    name="pdf"
                    {...register("pdf")}
                    id="pdf"
                    type="text"
                    placeholder="PDF link added here"
                  />
                  <div className="flex mt-2 justify-around">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                    >
                      Report Submit
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

SubmitTestResult.propTypes = {
  closeModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  reservation: PropTypes.object.isRequired,
};

export default SubmitTestResult;
