import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About - DaignoCare</title>
      </Helmet>
      <section className="">
  <div className="container max-w-xl p-6 mx-auto space-y-12 lg:px-8 lg:max-w-7xl">
    <div>
      <h2 className="text-3xl font-bold text-center sm:text-5xl">About Us</h2>
      <p className="max-w-5xl mx-auto mt-4 text-xl text-center">
      Welcome to our Diagnostic Center Management System, your comprehensive solution for managing diagnostic center operations efficiently. Our platform is designed to streamline appointment scheduling, patient records management, test results delivery, and administrative tasks, ensuring a seamless experience for both patients and healthcare providers.
      </p>
    </div>
    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
      <div>
        <div className="mt-4 space-y-12">
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-rocket"
                >
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-bold">Our Mission</h4>
              <p className="mt-2">
              Our mission is to revolutionize the way diagnostic centers operate by providing a robust, user-friendly, and secure web application. We aim to enhance the efficiency of healthcare services, improve patient satisfaction, and reduce administrative burdens through innovative technology.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-bookmark-plus"
                >
                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                  <line x1="12" x2="12" y1="7" y2="13"></line>
                  <line x1="15" x2="9" y1="10" y2="10"></line>
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-bold mb-3 ">Key Features</h4>
              <ul className="list-disc pl-6 space-y-3">
                <li><span className="font-bold">User Authentication & Profile Management:</span> Secure email/password login using Firebase Authentication, with user profiles that include essential details like blood group, district, and avatar.</li>
                <li><span className="font-bold">User Dashboard:</span> A personalized dashboard for users to manage their profiles, view upcoming appointments, and access test results.</li>
                <li><span className="font-bold">Dynamic Homepage:</span> Featuring dynamic banners, personalized health recommendations, and a comprehensive list of available tests with detailed descriptions.</li>
                <li><span className="font-bold">Admin Dashboard: </span> Powerful tools for administrators to manage users, tests, banners, and reservations, including features to block/unblock users and generate detailed user reports.</li>
                <li><span className="font-bold">Responsive Design:</span> Integration with Stripe for secure payments, promotional codes for discounts, and a system for generating and managing test reports.</li>
                <li><span className="font-bold">Advanced Features:</span> Our platform is optimized for all devices, ensuring a smooth experience whether you’re on a mobile, tablet, or desktop.</li>
              </ul>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-md">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-file-question"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <path d="M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"></path>
                  <path d="M12 17h.01"></path>
                </svg>
              </div>
            </div>
            <div className="ml-4">
            <div className="ml-4">
              <h4 className="text-lg font-bold mb-3 ">Why Choose Us?</h4>
              <ul className="list-disc pl-6 space-y-3">
                <li><span className="font-bold">Innovative Technology: </span> Leveraging the latest in web development to provide a reliable and efficient system.</li>
                <li><span className="font-bold">User-Centric Design:</span> Prioritizing ease of use and accessibility for all users, including patients and administrators.</li>
                <li><span className="font-bold">Security:</span> Ensuring the privacy and security of user data with industry-standard practices and robust authentication mechanisms.</li>
              </ul>
            </div>
            </div>
          </div>
          <div className="flex">
            <div className="ml-4">
              <h4 className="text-lg font-medium leadi">Contact Us</h4>
              <p className="mt-2">
              For more information or to schedule a demo, please contact us at info@DiagnoCare.com.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="mt-10 lg:mt-0">
        <img
          width="600"
          height="600"
          src="https://i.ibb.co/0JG6SrS/wellcome.jpg"
          className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
          style={{ color: "transparent" }}
        />
      </div>
    </div>
  </div>
</section>


    </div>
  );
};

export default About;
