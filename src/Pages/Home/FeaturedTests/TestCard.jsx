import { Link } from "react-router-dom";

const TestCard = ({test}) => {
    const { image, price, title, shortDescription, _id } = test;
    
    return (
        <div>
            <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
        <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
          <img
            src={image}
            alt="image"
          />
          <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
          <button
            className="!absolute  top-4 right-4 h-8 max-h-[32px] w-20 max-w-[100px] select-none rounded-full text-center align-middle font-sans text-xl font-medium uppercase text-red-500 bg-[#fff] transition-all hover:bg-base-200 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            ${price}
          </button>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h5 className="block font-sans text-xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
              {title}
            </h5>
          </div>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
            {shortDescription}
          </p>
        </div>
        <div className="mt-10 text-center mb-10">
        <Link to={`/viewDetails/${_id}`}>
        <button
              type="button"
              className=" bg-[#009bda] hover:bg-blue-800  font-medium rounded-lg text-sm px-4 py-2 text-center text-white dark:hover:bg-blue-700"
            >
              View Details
            </button>
        </Link>
      </div>
      </div>
        </div>
    );
};

export default TestCard;