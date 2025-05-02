import React from 'react'
import { useEffect } from "react";
import "@fontsource/poppins";
import{FileSearchOutlined, PhoneOutlined, DollarOutlined} from "@ant-design/icons";
import { Car, Fuel, Users, Calendar } from 'lucide-react';
import { Button } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
import carImage from "../assets/blue.png"; 
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Booking from '../Components/Booking';
import Steps from '../Components/Steps';
import { NavLink } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, }); 
    }, []);

  return (
    <div>
      <Header />
      <section
      className="min-h-screen bg-cover bg-center flex items-center justify-center !px-4 !py-12 sm:!py-16 md:!py-20"
      style={{
        backgroundImage:
        "url('https://images.pexels.com/photos/15886418/pexels-photo-15886418/free-photo-of-interior-oc-citroen-car.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
        >
          <div className="flex flex-col items-center gap-6 w-full max-w-6xl">
            <div className="text-center !px-2">
              <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight">
                Looking for a <span className="text-blue-700">vehicle</span>? You're at the right place
              </h1>
          </div>
          <div className="bg-white w-full rounded-xl shadow-lg !p-4 sm:!p-6 md:!p-10 lg:!p-14">
            <Booking />
          </div>
          </div>
      </section>

      
    <div className='relative z-40 !p-8 gap-8' style={{ fontFamily: "Poppins, sans-serif" }} >
      
      <div className="!p-6 md:!p-10 w-full shadow-lg">
        <div className="container !mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
            <div className="!px-4 sm:order-2" data-aos="fade-left">
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold font-serif text-blue-500">About Us</h1>
              <p className="text-sm md:text-base lg:text-lg !mt-4">
                At RideEase, we believe in making transportation seamless, efficient, and reliable. 
                Whether you're commuting daily, planning a long trip, or simply looking for a convenient ride, 
                RideEase is your go-to solution for hassle-free travel.
              </p>
              
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold font-serif text-blue-500 !mt-6">Our Mission</h1>
              <p className="text-sm md:text-base lg:text-lg !mt-4">
                Our mission is to revolutionize the way people move by providing a smart, user-friendly, and safe ride-booking experience. 
                We aim to connect passengers with reliable drivers, ensuring affordability, comfort, and punctuality every time you ride.
              </p>
            </div>
            <div className="!px-4 sm:order-1" data-aos="fade-right">
              <img src="https://imgd.aeplcdn.com/664x374/n/cw/ec/40087/thar-exterior-right-front-three-quarter-37.jpeg?isig=0&q=80"
              alt="About Us"
              className="w-full h-auto rounded-lg !mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <br />
    
<div className="!py-14 sm:min-h-[620px]">
  <div className="container !mx-auto !px-4">
    <div className="!pb-12" data-aos="fade-down">
      <h1 className="text-3xl font-semibold text-center font-serif sm:text-4xl">Why Choose Us</h1>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="shadow-lg h-80 rounded-lg bg-black hover:bg-gradient-to-r from-blue-500 to-purple-700 transform transition-all duration-300 hover:scale-105" data-aos="fade-up" data-aos-delay="0">
        <div className="!p-6 text-white">
          <div className="text-center text-5xl !mb-4"><FileSearchOutlined /></div>
          <h1 className="text-lg text-center font-bold !mb-2">Easy Booking</h1>
          <p className="text-sm text-center">
            Booking a ride has never been easier! With RideEase, you can secure a ride in just a few taps. Whether you're commuting to work, heading to an event, or planning a long trip, our intuitive platform ensures a seamless booking experience.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="shadow-lg rounded-lg bg-black hover:bg-gradient-to-r from-blue-500 to-purple-700 transform transition-all duration-300 hover:scale-105" data-aos="fade-up" data-aos-delay="500">
        <div className="!p-6 text-white">
          <div className="text-center text-5xl !mb-4"><DollarOutlined /></div>
          <h1 className="text-lg text-center font-bold !mb-2">Affordable Prices</h1>
          <p className="text-sm text-center">
            At RideEase, we believe that safe and reliable transportation should be accessible to all—without breaking the bank! Our transparent pricing ensures you get the best value with no hidden fees.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="shadow-lg rounded-lg bg-black hover:bg-gradient-to-r from-blue-500 to-purple-700 transform transition-all duration-300 hover:scale-105" data-aos="fade-up" data-aos-delay="1000">
        <div className="!p-6 text-white">
          <div className="text-center text-5xl !mb-4"><PhoneOutlined /></div>
          <h1 className="text-lg text-center font-bold !mb-2">24/7 Support</h1>
          <p className="text-sm text-center">
            At RideEase, your comfort and safety are our top priorities. Our dedicated support team is available 24/7 to assist you with any queries, concerns, or emergencies—anytime, anywhere!
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


    <div className='!py-14 sm:min-h-[620px] sm:place-items-center'>
      <div className='container'>
        <div className='!pb-12' data-aos="fade-down">
          <h1 className='text-3xl font-semibold text-center font-serif sm:text-4xl'>We Have Everthing you Need</h1>
        </div>
        <div className='grid grid-col-3 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          <div className='card shadow-lg rounded-lg transform transition-all duration-300 hover:scale-105' data-aos="fade-up" data-aos-delay="0">
            <div className='card-body'>
              <img src="https://feeds.abplive.com/onecms/images/uploaded-images/2022/06/28/3a265a09e25cf46be4a1431fb39abd27_original.jpg?impolicy=abp_cdn&imwidth=1200" alt="scorpio" className='rounded-lg'/>
              <br /><br />
              <h1 className='text-lg !p-3'>Mahindra Scorpio</h1>
              <p className='!p-3 text-blue-500 text-xl'>₹3500<span className='text-[grey] text-sm'>/day</span></p> 
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
              <NavLink to="/scorpio">
                <Button type='primary' className="w-full hover:bg-blue-700 text-white font-semibold !py-2 rounded-lg">
                Rent Now
                </Button>
              </ NavLink>
              </div>
          </div>

          <div className='card shadow-lg rounded-lg transform transition-all duration-300 hover:scale-105' data-aos="fade-up" data-aos-delay="500">
            <div className='card-body'>
            <img src="https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcms%2Farticles%2F3201621%2FMaruti_Suzuki_Alto_K10_55063ca197.jpg&w=750&q=75" alt="alto" className='rounded-lg h-92 w-full'/>
            <br /><br />
              <h1 className='text-lg !p-3'>Maruti Alto </h1>
              <p className='!p-3 text-blue-500 text-xl'>₹1500<span className='text-[grey] text-sm'>/day</span></p>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <Users size={20} />
                  <span> Seats</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Fuel size={20} />
                  <span>Petrol</span>
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
              <NavLink to="/alto">
                <Button type='primary' className="w-full hover:bg-blue-700 text-white font-semibold !py-2 rounded-lg">
                Rent Now
                </Button>
              </NavLink>
            </div>
          </div>

          <div className='card shadow-lg rounded-lg transform transition-all duration-300 hover:scale-105' data-aos="fade-up" data-aos-delay="1000">
              <div className='card-body'>
                <img src="https://turbocharged.in/wp-content/uploads/2023/09/Volkswagen-Virtus-GT-Edge-Carbon-Steel.jpg" alt="virtus" className='h-92 w-full rounded-lg'/>
                <br /><br />
                <h1 className='text-lg !p-3'>Virtus GT</h1>
                <p className='!p-3 text-blue-500 text-xl'>₹2700<span className='text-[grey] text-sm'>/day</span></p>
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
              <NavLink to="/virtus">
                <Button type='primary' className="w-full hover:bg-blue-700 text-white font-semibold !py-2 rounded-lg">
                Rent Now
                </Button>
              </NavLink>
              </div>
          </div>
        </div>
        <br />
        <NavLink to="/cars">
        <center><button className="bg-gradient-to-r from-blue-500 to-purple-700 hover:from-blue-600 hover:to-blue-800 text-white !py-3 cursor-pointer
        !px-6 md:px-8 lg:px-10 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95 text-sm md:text-base lg:text-lg" data-aos="fade-up">
          Get Started
        </button></center>
        </NavLink>
      </div>
    </div>
    <br />
    <div className="relative !mt-10">
  <img
    src="https://images.pexels.com/photos/5875895/pexels-photo-5875895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    className="w-full object-cover min-h-[60vh] max-h-[90vh] aspect-[16/9] sm:aspect-auto"
    alt="driving"
  />
  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-center !px-4">
    <h1
      className="text-white text-2xl sm:text-3xl md:text-4xl font-bold font-serif !mb-4"
      data-aos="zoom-in"
    >
      Economics of renting a car vs owning one
    </h1>
    <button
      className="text-white bg-blue-600 hover:bg-blue-700 font-semibold !py-2 !px-6 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
      data-aos="fade-up"
    >
      Discover More
    </button>
  </div>
</div>
    <br />
    <div className='!py-14 sm:min-h-[620px] sm:place-items-center'>
      <div className='container'>
        <div className='!pb-12' data-aos="fade-down">
          <h1 className='text-3xl font-semibold text-center font-serif sm:text-4xl'>What Our Clients Say About Us</h1>
        </div>
        <div className='grid grid-col-3 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          <div className='card shadow-lg rounded-lg bg-[#dedcdc] text-center group space-y-3 !p-4 transform transition-all duration-300 hover:scale-105' 
          data-aos="fade-up" data-aos-delay="0">
            <div className='grid place-items-center'>
              <img className='h-20 w-20 rounded-full' src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/d95c1f148207527.62d1246c25004.jpg" alt="" />
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
              <img className='h-20 w-20 rounded-full' src="https://img.freepik.com/free-psd/3d-rendering-hair-style-avatar-design_23-2151869159.jpg?semt=ais_hybrid&w=740" alt="" />
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
              <img className='h-20 w-20 rounded-full' src="https://img.freepik.com/free-psd/3d-rendering-hair-style-avatar-design_23-2151869153.jpg" alt="" />
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
    <Footer />
    </div>
  )
};

export default Home
