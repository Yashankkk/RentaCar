import React from 'react'

const about = () => {
  return (
    <div>
    <div className='bg-gray !p-8 gap-8 !pt-10 space-y-0 w-full '>
      <div className='container flex'>
        <div className='grid grid-cols-1 sm:grid-cols-2'>
          <div className='order-1 md:px-8 sm:order-2 !ml-30'>
            <h1 className='text-lg md:text-xl lg:text-2xl font-bold font-serif text-blue-500'>About Us</h1><br />
            <p className='text-sm md:text-base lg:text-lg !mt-2'>At RideEase, we believe in making transportation seamless, efficient, and reliable. 
              Whether you're commuting daily, planning a long trip, or simply looking for a convenient ride, RideEase is your go-to solution for hassle-free travel.
            </p><br />
            <h1 className='text-lg md:text-xl lg:text-2xl font-bold font-serif text-blue-500 mt-6'>Our Mission</h1><br />
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
    <div className='relative !mt-10'>
      <img src="src\assets\driving.jpg" className='w-full h-170 object-cover' alt="driving" />
      <div className='absolute inset-0 flex flex-col items-center justify-center bg-black/50'>
        <h1 className='text-white text-4xl font-bold font-serif !mb-4'>Economics of renting a car vs owning one</h1><br />
        <button className='text-white bg-blue-600 cursor-pointer hover:bg-blue-700 font-semibold !py-2 !px-4 rounded-full 
        transform transition-all duration-300 hover:scale-105 active:scale-95'>Discover More</button>
      </div>
    </div>
    
    </div>
    
  )
}

export default about
