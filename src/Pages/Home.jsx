import React from 'react'
import "@fontsource/poppins";
//import Sports from "src\assets\sport-car.jpg";

// import "./Home.css"

const Home = () => {
  return (
    <div className='relative z-40 !p-8 gap-8' style={{ fontFamily: "Poppins, sans-serif" }}>
      <div className='container min-h-[620px] flex'>
        <div className='grid place-items-center grid-cols-1 sm:grid-cols-2'>
          <div className='order-1 sm:order-2 !ml-30'>
            <img className='relative -z-10 ' src="src\assets\sport-car.jpg" alt="" />
          </div>
          <div className='order-2 sm:order-1'>
            <h1 className='text-4xl lg:text-6xl font-semibold'>Car Rental</h1><br />
            <p className=''>Find your perfect rental car today.</p><br />
            <button className="bg-gradient-to-r from-blue-500 to-purple-700 hover:from-blue-600 hover:to-blue-800 text-white py-3 px-6 md:px-8 lg:px-10 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95 text-sm md:text-base lg:text-lg">
              Get Started
            </button>

          </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Home
