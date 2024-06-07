import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const TestResults = () => {
  const axiosSecure = useAxiosSecure();

  const { data: testResults = [], isLoading } = useQuery({
    queryKey: ["test-results"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/test-results`);
      return data;
    },
  });

  const handlePrint = (pdfUrl) => {
    const printWindow = window.open(pdfUrl, "_blank");
    printWindow.print();
  };

  if(isLoading) return <p>Loading...</p>

  return (
    <div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4"></th>
            <th scope="col" className="px-6 py-3">
              Test Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Amount Paid
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Report
            </th>
          </tr>
        </thead>
        <tbody>
          {testResults.map((result) => (
            <tr
              key={result._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  className="w-40 h-20 rounded-lg"
                  src={result?.image}
                  alt={`${result?.name} image`}
                />
                <div className="ps-3">
                  <div className="text-base font-semibold">{result?.title}</div>
                </div>
              </th>
              <td className="px-6 py-4">{result?.email}</td>
              <td className="px-6 py-4">
                {new Date(result.date).toLocaleString()}
              </td>
              <td className="px-6 py-4">${result?.amountPaid}</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => handlePrint(result.pdf)}
                  type="button"
                  className="font-medium bg-slate-300 p-3 rounded-lg text-blue-600 dark:text-blue-500 hover:underline"
                >
                  DownloadPrint
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestResults;
