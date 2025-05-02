import React from 'react'
import{FileSearchOutlined, PhoneOutlined, DollarOutlined} from "@ant-design/icons";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const about = () => {
  return (
    <div>
      <Header />
      {/* Hero Banner with background image */}
      <section
        className="h-85 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/4090350/pexels-photo-4090350.jpeg')" }}
      >
        <h1 className="text-white text-4xl md:text-5xl font-bold">About</h1>
      </section>

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

    <Footer />
    </div>
    
  )
}

export default about
