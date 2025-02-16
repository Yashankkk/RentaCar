import React from 'react'
import "@fontsource/poppins";
import{FileSearchOutlined, PhoneOutlined, DollarOutlined} from "@ant-design/icons";

const Home = () => {
  return (
    <div className='relative z-40 !p-8 gap-8' style={{ fontFamily: "Poppins, sans-serif" }}>

      <div className='container min-h-[620px] flex shadow-lg !ml-15'>
        <div className='grid place-items-center grid-cols-1 sm:grid-cols-2'>
          <div className='order-1 sm:order-2 !ml-30'>
            <img className='relative -z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto' src="src\assets\blue.png" alt="" />
          </div>
          <div className='order-2 sm:order-1'>
            <h1 className='text-4xl lg:text-6xl font-semibold font-serif'>Car Rental</h1><br />
            <p className=''>Find your perfect rental car today.</p><br />
            <button className="bg-gradient-to-r from-blue-500 to-purple-700 hover:from-blue-600 hover:to-blue-800 text-white py-3 
            px-6 md:px-8 lg:px-10 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95 text-sm md:text-base lg:text-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
    <div className='bg-gray !p-8 gap-8 !pt-10 shadow-lg'>
      <div className='container flex'>
        <div className='grid grid-cols-1 sm:grid-cols-2'>
          <div className='order-1 md:px-8 sm:order-2 !ml-30'>
            <h1 className='text-lg md:text-xl lg:text-2xl font-bold text-blue-500'>About Us</h1><br />
            <p className='text-sm md:text-base lg:text-lg !mt-2'>At RideEase, we believe in making transportation seamless, efficient, and reliable. 
              Whether you're commuting daily, planning a long trip, or simply looking for a convenient ride, RideEase is your go-to solution for hassle-free travel.
            </p><br />
            <h1 className='text-lg md:text-xl lg:text-2xl font-bold text-blue-500 mt-6'>Our Mission</h1><br />
            <p className='text-sm md:text-base lg:text-lg !mt-2'>Our mission is to revolutionize the way people move by providing a smart, user-friendly, and safe ride-booking experience. 
              We aim to connect passengers with reliable drivers, ensuring affordability, comfort, and punctuality every time you ride.</p>
          </div>
          <div className='order-2 sm:order-1'>
            <img className='relative -z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto' src="src\assets\blue-car.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <br />
    <div className='!py-14 sm:min-h-[620px] sm:place-items-center !ml-30'>
      <div className='container'>
        <div className='!pb-12'>
          <h1 className='text-3xl font-semibold text-center font-serif sm:text-4xl'>Why Choose Us</h1>
        </div>
        <div className='grid grid-col-3 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          <div className='card shadow-lg rounded-lg bg-[black] hover:bg-gradient-to-r from-blue-500 to-purple-700'>
            <div className='card-body'>
              <h1 className='text-center text-5xl text-white !pt-10'><FileSearchOutlined /></h1>
              <br /><br />
              <h1 className='text-lg text-center font-bold text-white'>Easy Booking</h1>
              <p className='text-white !p-5 !m-3'>Booking a ride has never been easier! With RideEase, you can secure a ride in just a few taps. Whether you're commuting to work, 
                  heading to an event, or planning a long trip, our intuitive and user-friendly platform ensures a seamless booking experience.</p> 
            </div>
          </div>
          <div className='card shadow-lg rounded-lg bg-[black] hover:bg-gradient-to-r from-blue-500 to-purple-700'>
            <div className='card-body'>
            <h1 className='text-center text-5xl text-white !pt-10'><DollarOutlined /></h1>
            <br /><br />
              <h1 className='text-lg text-center font-bold text-white'>Affordable Prices</h1>
              <p className='text-white !p-5 !m-3'>At RideEase, we believe that safe and reliable transportation should be accessible to all—without breaking the bank! 
                Our transparent pricing ensures you get the best value for your money, with no hidden fees or surprises.</p>
            </div>
          </div>
          <div className='card shadow-lg rounded-lg bg-[black] hover:bg-gradient-to-r from-blue-500 to-purple-700'>
              <div className='card-body'>
                <h1 className='text-center text-5xl text-[white] !pt-10'><PhoneOutlined /></h1>
                <br /><br />
                <h1 className='text-lg text-center font-bold text-white'>24/7 Support</h1>
                <p className='text-white !p-5  !m-3'>At RideEase, your comfort and safety are our top priorities. 
                  Our dedicated support team is available 24/7 to assist you with any queries, concerns, or emergencies—anytime, anywhere!</p>
              </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Home
