import icon from '../assets/Icon.png'
const Footer = () => {
    return (
        <div>
            

<footer className="bg-white shadow dark:bg-gray-900">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
        <span className="self-center text-gray-100 text-3xl font-bold whitespace-nowrap flex justify-center items-center gap-2">
              <img src={icon} className="h-10" alt="" />
              <p>DiagnoCare</p>
            </span>
            <ul className="flex flex-wrap items-center justify-center my-6 text-sm font-medium text-gray-100 sm:mb-0">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-100 text-center">© {new Date().getFullYear()} <a href="https://flowbite.com/" className="hover:underline text-xl">DiagnoCare</a>. All Rights Reserved.</span>
    </div>
</footer>


        </div>
    );
};

export default Footer;