import { Helmet } from "react-helmet-async";

const DFaq = () => {
    const faqsList = [
      {
        q: "How do I register for an account?",
        a: "To register, click on the 'Sign Up' button and provide your email, name, avatar, blood group, district, upazila, password, and confirm password. Your account status will be set to 'active' by default.",
      },
      {
        q: "What should I do if I forget my password?",
        a: "If you forget your password, click on the 'Forgot Password' link on the login page and follow the instructions to reset your password.",
      },
      {
        q: "How can I view my upcoming appointments?",
        a: "After logging in, navigate to the 'My Upcoming Appointments' section in your dashboard to view a list of your booked appointments with details such as test name, date, and time.",
      },
      {
        q: "Can I cancel an appointment?",
        a: "Yes, you can cancel an appointment from the 'My Upcoming Appointments' section in your dashboard. Click on the appointment you wish to cancel and select the 'Cancel' option.",
      },
      {
        q: "How do I access my test results?",
        a: "Your test results can be accessed in the 'Test Results' section of your dashboard. You can view, download, or print your test results from there.",
      },
      {
        q: "What should I do if I cannot access my dashboard?",
        a: "If you are unable to access your dashboard, it could be due to your account being blocked. Please contact support for assistance.",
      },
      {
        q: "How can I update my profile information?",
        a: "To update your profile information, go to the 'My Profile' section in your dashboard. Here, you can edit your details and save the changes.",
      },
      {
        q: "What is the process to book a test?",
        a: "To book a test, go to the 'All Tests' page, select the desired test, and click on the 'Book Now' button. If slots are available, proceed to the payment popup, apply any promo codes, and complete the payment using Stripe.",
      },
      {
        q: "How do I apply a coupon code during payment?",
        a: "During the payment process, you will see an option to enter a coupon code. Apply the coupon code, and the discount will be reflected in the total amount.",
      },
      {
        q: "Who can I contact for further assistance?",
        a: "If you need further assistance, feel free to contact our support team via the contact information provided in the footer of the website.",
      },
    ];
  
    return (
      <>
      <Helmet>
        <title>FAQ - DaignoCare</title>
      </Helmet>
      <section className="leading-relaxed max-w-screen-xl mt-12 py-4 mx-auto px-4 md:px-8">
        <div className="space-y-3 text-center">
          <h1 className="text-3xl text-gray-800 font-semibold">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 max-w-lg mx-auto text-lg">
            Answered all frequently asked questions. Still confused? Feel free to
            contact us.
          </p>
        </div>
        <div className="mt-14 gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {faqsList.map((item, idx) => (
            <div className="space-y-3 mt-5" key={idx}>
              <h4 className="text-xl text-gray-700 font-medium">{item.q}</h4>
              <p className="text-gray-500">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
      </>
    );
  };
  
  export default DFaq;
  