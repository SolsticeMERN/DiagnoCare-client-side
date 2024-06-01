import promotionaImg from '../../../assets/wellcome.jpg'


const Promotions = () => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900 rounded-lg">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-6">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">We Offer Fast & Reliable <br /> <span className="text-4xl text-[#009bda]">Medical & Healthcare Needs</span></h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-200">At DiagnoCare, we are dedicated to providing fast and reliable solutions for all your medical and healthcare needs. Our team of experienced professionals is committed to delivering high-quality care with compassion and efficiency. 

            </p>
            
            {/* Whether you require urgent medical assistance, routine check-ups, or specialized treatments, we ensure that you receive the best care possible. Trust us to be your partner in health, offering services that prioritize your well-being and peace of mind. Choose us for a seamless and supportive healthcare experience.</p> */}
            
        </div>
        <div className="hidden lg:mt-0 lg:col-span-6 lg:flex">
            <img src={promotionaImg} className='bg-cover rounded-lg' alt="mockup"/>
        </div>                
    </div>
</section>
        </div>
    );
};

export default Promotions;