/* eslint-disable react/prop-types */
import useAxiosSecure from "../../Pages/Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { imageUpload } from "../ImageApi";
import toast from "react-hot-toast";
import { useState } from "react";

const TestUpdateForm = ({ refetch, test, setIsOpen }) => {
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, setValue } = useForm();
  const [selectedImage, setSelectedImage] = useState(null);

  const onSubmit = async (data) => {
    try {
      let image_url = test.image; 

      if (selectedImage) {
        image_url = await imageUpload(selectedImage);
      }

      const updateInfo = {
        title: data.title,
        shortDescription: data.description,
        price: data.price,
        slots: data.slots,
        time: data.time,
        image: image_url,
      };

      const res = await axiosSecure.patch(
        `/update-test/${test._id}`,
        updateInfo
      );

      if (res.data.modifiedCount > 0) {
        toast.success("Test Updated Successfully");
        refetch();
        setIsOpen(false);
      } else {
        throw new Error('Failed to update the test.');
      }
    } catch (err) {
      console.error(err);
      toast.error(`Error: ${err.message}`);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setValue("image", file); 
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-200px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-10">
          <div className="space-y-1 text-sm">
            <label htmlFor="title" className="block text-gray-600">
              Title
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
              name="title"
              {...register("title")}
              id="title"
              type="text"
              defaultValue={test.title}
              placeholder="Title"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="description" className="block text-gray-600">
              Description
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
              name="description"
              {...register("description")}
              id="description"
              type="text"
              defaultValue={test.shortDescription}
              placeholder="Description"
            />
          </div>
          <div className="p-4 bg-white w-full m-auto rounded-lg">
            <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
              <div className="flex flex-col w-max mx-auto text-center">
                <label>
                  <input
                    className="text-sm cursor-pointer w-36 hidden"
                    type="file"
                    name="image"
                    {...register("image")}
                    id="image"
                    onChange={handleImageChange}
                  />
                  <div className="bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500">
                    {test.image ? `${test.image.slice(0, 20)}...` : "Upload Image"}
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-2">
            <div className="space-y-1 text-sm">
              <label htmlFor="price" className="block text-gray-600">
                Price
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                name="price"
                id="price"
                {...register("price")}
                defaultValue={test.price}
                type="number"
                placeholder="Price"
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="slots" className="block text-gray-600">
                Slots
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                name="slots"
                {...register("slots")}
                id="slots"
                defaultValue={test.slots}
                type="number"
                placeholder="Slots"
              />
            </div>
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="time" className="block text-gray-600">
              Time
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
              name="time"
              id="time"
              {...register("time")}
              defaultValue={test.time}
              type="text"
              placeholder="Time"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default TestUpdateForm;
