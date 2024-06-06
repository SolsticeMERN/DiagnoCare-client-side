import { useState } from "react";
import UpdateBanner from "../Modal/UpdateBanner";




const AllBannerTable = ({ banners, isLoading, refetch }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const [updateBanner, setUpdateBanner] = useState(null);



  const updateBannerModal = (banner) => {
    setUpdateBanner(banner);
    setIsOpen(true);
  };


  const closeModal = () => {
    setIsOpen(false);
    
    setUpdateBanner(null);
    
  };

  
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4"></th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Heading
              </th>
              <th scope="col" className="px-6 py-3">
                Subheading
              </th>
              <th scope="col" className="px-6 py-3">
                Button Text
              </th>
              <th scope="col" className="px-6 py-3">CouponCode</th>
              <th scope="col" className="px-6 py-3">DiscountRate</th>
              <th scope="col" className="px-6 py-3 text-center">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Update
              </th>
            </tr>
          </thead>
          <tbody>
            {banners.map((banner) => (
              <tr
                key={banner._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-40 h-20 rounded-lg "
                    src={banner?.image}
                    alt={`${banner?.name} image`}
                  />
                </th>
                <td className="px-6 py-4">{banner?.title}</td>
                <td className="px-6 py-4">{banner?.text}</td>
                <td className="px-6 py-4">{banner?.buttonText}</td>
                <td className="px-6 py-4">{banner?.couponCode}</td>
                <td className="px-6 py-4 text-center">{banner?.discountRate}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div
                      className={`h-2.5 w-2.5 rounded-full ${
                        (banner?.isActive === "true" && "bg-green-500") ||
                        (banner?.isActive === "false" && "bg-red-500")
                      } me-2`}
                    ></div>
                    {banner?.isActive === "true" ? "true" : "false"}
                  </div>
                </td>
                <td className="px-6 py-4  text-center">
                  <button
                    type="button"
                    onClick={() => updateBannerModal(banner)}
                    className="font-medium mr-4 mb-4 bg-slate-300 p-2 rounded-lg  text-blue-600  hover:underline"
                  >
                    Update Status
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {updateBanner && (
        <UpdateBanner
        updateBanner={updateBanner}
          closeModal={closeModal}
          isOpen={isOpen}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default AllBannerTable;
