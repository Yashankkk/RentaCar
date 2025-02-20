import React from 'react'
import { useEffect } from "react";
import "@fontsource/poppins";
import{FileSearchOutlined, PhoneOutlined, DollarOutlined} from "@ant-design/icons";
import { Car, Fuel, Users, Calendar } from 'lucide-react';
import { Button } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, }); // Initialize AOS with a duration of 1000ms
    }, []);

  return (
    <div className='relative z-40 !p-8 gap-8' style={{ fontFamily: "Poppins, sans-serif" }}>

      <div className='container min-h-[620px] flex !ml-15'>
        <div className='grid place-items-center grid-cols-1 sm:grid-cols-2'>
          <div className='order-1 sm:order-2 !ml-30 ' data-aos="fade-up">
            <img className='relative -z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto' src="src\assets\blue.png" alt="" />
          </div>
          <div className='order-2 sm:order-1' data-aos="fade-right">
            <h1 className='text-4xl lg:text-6xl font-semibold font-serif'>Car Rental</h1><br />
            <p className=''>Find your perfect rental car today.</p><br />
            <button className="bg-gradient-to-r from-blue-500 to-purple-700 hover:from-blue-600 hover:to-blue-800 text-white !py-3 cursor-pointer 
            !px-6 md:px-8 lg:px-10 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95 text-sm md:text-base lg:text-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
    <div className='bg-gray !p-8 gap-8 !pt-10 space-y-0 w-full shadow-lg'>
      <div className='container flex'>
        <div className='grid grid-cols-1 sm:grid-cols-2'>
          <div className='order-1 md:px-8 sm:order-2 !ml-30' data-aos="fade-left">
            <h1 className='text-lg md:text-xl lg:text-2xl font-bold font-serif text-blue-500'>About Us</h1><br />
            <p className='text-sm md:text-base lg:text-lg !mt-2'>At RideEase, we believe in making transportation seamless, efficient, and reliable. 
              Whether you're commuting daily, planning a long trip, or simply looking for a convenient ride, RideEase is your go-to solution for hassle-free travel.
            </p><br />
            <h1 className='text-lg md:text-xl lg:text-2xl font-bold font-serif text-blue-500 mt-6'>Our Mission</h1><br />
            <p className='text-sm md:text-base lg:text-lg !mt-2'>Our mission is to revolutionize the way people move by providing a smart, user-friendly, and safe ride-booking experience. 
              We aim to connect passengers with reliable drivers, ensuring affordability, comfort, and punctuality every time you ride.</p>
          </div>
          <div className='order-2 sm:order-1' data-aos="fade-right">
            <img className='relative -z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto' src="src\assets\blue-car.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <br />
    <div className='!py-14 sm:min-h-[620px] sm:place-items-center !ml-30'>
      <div className='container'>
        <div className='!pb-12' data-aos="fade-down">
          <h1 className='text-3xl font-semibold text-center font-serif sm:text-4xl'>Why Choose Us</h1>
        </div>
        <div className='grid grid-col-3 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          <div className='card shadow-lg rounded-lg bg-[black] hover:bg-gradient-to-r from-blue-500 to-purple-700 transform transition-all duration-300 hover:scale-105' 
          data-aos="fade-up" data-aos-delay="0">
            <div className='card-body'>
              <h1 className='text-center text-5xl text-white !pt-10'><FileSearchOutlined /></h1>
              <br /><br />
              <h1 className='text-lg text-center font-bold text-white'>Easy Booking</h1>
              <p className='text-white !p-5 !m-3'>Booking a ride has never been easier! With RideEase, you can secure a ride in just a few taps. Whether you're commuting to work, 
                  heading to an event, or planning a long trip, our intuitive and user-friendly platform ensures a seamless booking experience.</p> 
            </div>
          </div>
          <div className='card shadow-lg rounded-lg bg-[black] hover:bg-gradient-to-r from-blue-500 to-purple-700 transform transition-all duration-300 hover:scale-105' 
          data-aos="fade-up" data-aos-delay="500">
            <div className='card-body'>
            <h1 className='text-center text-5xl text-white !pt-10'><DollarOutlined /></h1>
            <br /><br />
              <h1 className='text-lg text-center font-bold text-white'>Affordable Prices</h1>
              <p className='text-white !p-5 !m-3'>At RideEase, we believe that safe and reliable transportation should be accessible to all—without breaking the bank! 
                Our transparent pricing ensures you get the best value for your money, with no hidden fees or surprises.</p>
            </div>
          </div>
          <div className='card shadow-lg rounded-lg bg-[black] hover:bg-gradient-to-r from-blue-500 to-purple-700 transform transition-all duration-300 hover:scale-105' 
          data-aos="fade-up" data-aos-delay="1000">
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

    <div className='!py-14 sm:min-h-[620px] sm:place-items-center !ml-30'>
      <div className='container'>
        <div className='!pb-12' data-aos="fade-down">
          <h1 className='text-3xl font-semibold text-center font-serif sm:text-4xl'>We Have Everthing you Need</h1>
        </div>
        <div className='grid grid-col-3 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          <div className='card shadow-lg rounded-lg transform transition-all duration-300 hover:scale-105' data-aos="fade-up" data-aos-delay="0">
            <div className='card-body'>
              <img src="src\assets\scorpio.jpeg" alt="scorpio" className='rounded-lg'/>
              <br /><br />
              <h1 className='text-lg !p-3'>Mahindra Scorpio</h1>
              <p className='!p-3 text-blue-500 text-xl'>$149<span className='text-[grey] text-sm'>/day</span></p> 
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <Users size={20} />
                  <span> Seats</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Fuel size={20} />
                  <span>Diesel</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={20} />
                  <span>2024</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Car size={20} />
                  <span>Automatic</span>
                </div>
              </div>
              <br />
                <Button type='primary' className="w-full hover:bg-blue-700 text-white font-semibold !py-2 rounded-lg">
                Rent Now
                </Button>
              </div>
          </div>

          <div className='card shadow-lg rounded-lg transform transition-all duration-300 hover:scale-105' data-aos="fade-up" data-aos-delay="500">
            <div className='card-body'>
            <img src="src\assets\Alto.jpg" alt="alto" className='rounded-lg h-82 w-full'/>
            <br /><br />
              <h1 className='text-lg !p-3'>Lord Alto </h1>
              <p className='!p-3 text-blue-500 text-xl'>$69<span className='text-[grey] text-sm'>/day</span></p>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <Users size={20} />
                  <span> Seats</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Fuel size={20} />
                  <span>Diesel</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={20} />
                  <span>2024</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Car size={20} />
                  <span>Automatic</span>
                </div>
              </div>
              <br />
                <Button type='primary' className="w-full hover:bg-blue-700 text-white font-semibold !py-2 rounded-lg">
                Rent Now
                </Button>
            </div>
          </div>

          <div className='card shadow-lg rounded-lg transform transition-all duration-300 hover:scale-105' data-aos="fade-up" data-aos-delay="1000">
              <div className='card-body'>
                <img src="src\assets\virtus.jpg" alt="virtus" className='rounded-lg'/>
                <br /><br />
                <h1 className='text-lg !p-3'>Virtus GT</h1>
                <p className='!p-3 text-blue-500 text-xl'>$99<span className='text-[grey] text-sm'>/day</span></p>
                <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <Users size={20} />
                  <span> Seats</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Fuel size={20} />
                  <span>Diesel</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={20} />
                  <span>2024</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Car size={20} />
                  <span>Automatic</span>
                </div>
              </div>
              <br />
                <Button type='primary' className="w-full hover:bg-blue-700 text-white font-semibold !py-2 rounded-lg">
                Rent Now
                </Button>
              </div>
          </div>
        </div>
        <br />
        <center><button className="bg-gradient-to-r from-blue-500 to-purple-700 hover:from-blue-600 hover:to-blue-800 text-white !py-3 cursor-pointer
        !px-6 md:px-8 lg:px-10 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95 text-sm md:text-base lg:text-lg" data-aos="fade-up">
          Get Started
        </button></center>
      </div>
    </div>
    <br />
    <div className='relative'>
      <img src="src\assets\driving.jpg" className='w-full h-170 object-cover' alt="driving" />
      <div className='absolute inset-0 flex flex-col items-center justify-center bg-black/50' >
        <h1 className='text-white text-4xl font-bold font-serif !mb-4' data-aos="zoom-in">Economics of renting a car vs owning one</h1><br />
        <button className='text-white bg-blue-600 cursor-pointer hover:bg-blue-700 font-semibold !py-2 !px-4 rounded-full 
        transform transition-all duration-300 hover:scale-105 active:scale-95' data-aos="fade-up">Discover More</button>
      </div>
    </div>
    <br />
    <div className='!py-14 sm:min-h-[620px] sm:place-items-center !ml-30'>
      <div className='container'>
        <div className='!pb-12' data-aos="fade-down">
          <h1 className='text-3xl font-semibold text-center font-serif sm:text-4xl'>What Our Clients Say About Us</h1>
        </div>
        <div className='grid grid-col-3 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          <div className='card shadow-lg rounded-lg bg-[#dedcdc] text-center group space-y-3 !p-4 transform transition-all duration-300 hover:scale-105' 
          data-aos="fade-up" data-aos-delay="0">
            <div className='grid place-items-center'>
              <img className='h-20 w-20 rounded-full' src="src\assets\john.jpg" alt="" />
              <p className='text-black text-xl'>John Doe</p>
              <br /><br />
              <h1 className='text-lg !pt-5 text-center font-bold text-yellow'>⭐⭐⭐⭐⭐</h1>
              <p className='!p-5 !m-3'>"Absolutely amazing service! The car was in perfect condition and the rental process was smooth and hassle-free. 
                Would definitely recommend to anyone looking for a reliable car rental service."</p> 
            </div>
          </div>
          <div className='card shadow-lg rounded-lg bg-[#dedcdc] text-center group space-y-3 !p-4 transform transition-all duration-300 hover:scale-105'
          data-aos="fade-up" data-aos-delay="500">
            <div className='grid place-items-center'>
              <img className='h-20 w-20 rounded-full' src="src\assets\sarah.avif" alt="" />
              <p className='text-black text-xl'>Sarah Johnson</p>
              <br /><br />
              <h1 className='text-lg !pt-5 text-center font-bold text-yellow'>⭐⭐⭐⭐⭐</h1>
              <p className='!p-5 !m-3'>"Great experience overall. The car was clean and well-maintained. The staff was professional and helpful. 
                Only minor issue was a slight delay during pickup, but everything else was perfect."</p> 
            </div>
          </div>
          <div className='card shadow-lg rounded-lg bg-[#dedcdc] text-center group space-y-3 !p-4 transform transition-all duration-300 hover:scale-105'
          data-aos="fade-up" data-aos-delay="1000">
            <div className='grid place-items-center'>
              <img className='h-20 w-20 rounded-full' src="src\assets\emma.avif" alt="" />
              <p className='text-black text-xl'>Emma Williams</p>
              <br /><br />
              <h1 className='text-lg !pt-5 text-center font-bold text-yellow'>⭐⭐⭐⭐⭐</h1>
              <p className='!p-5 !m-3'>"Outstanding customer service! They went above and beyond to accommodate my specific requirements. 
                The vehicle exceeded my expectations and made my trip so much more enjoyable."</p> 
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
};

export default Home
