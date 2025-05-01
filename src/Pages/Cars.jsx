import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Car, Fuel, Users, Calendar } from 'lucide-react';
import { Button } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from '../Components/Header';

// Sample car data
const carData = [
  {
    id: 1,
    name: "Mahindra Scorpio",
    price: 3500,
    image: "https://feeds.abplive.com/onecms/images/uploaded-images/2022/06/28/3a265a09e25cf46be4a1431fb39abd27_original.jpg?impolicy=abp_cdn&imwidth=1200",
    seats: "7 Seats",
    fuel: "Diesel",
    year: "2024",
    transmission: "Automatic",
  },
  {
    id: 2,
    name: "Hyundai Creta",
    price: 3000,
    image: "https://imgd-ct.aeplcdn.com/640X480/vimages/202411/3694116_6434_2_1731147959841.jpg?q=80&q=80",
    seats: "5 Seats",
    fuel: "Petrol",
    year: "2023",
    transmission: "Manual",
  },
  {
    id: 3,
    name: "Tata Harrier",
    price: 3500,
    image: "https://park.shifting-gears.com/wp-content/uploads/2024/04/2024-tata-harrier-dark-review-7.jpeg",
    seats: "5 Seats",
    fuel: "Diesel",
    year: "2024",
    transmission: "Automatic",
  },
  {
    id: 4,
    name: "Lord Alto",
    price: 1500,
    image: "https://mfcwl-vehicle-live-web-images.s3.us-west-2.amazonaws.com/live_web_images/usedcarsimg/mfc/749/502192/cover_image-20220325160542.jpg",
    seats: "5 Seats",
    fuel: "Petrol",
    year: "2024",
    transmission: "Manual",
  },
  {
    id: 5,
    name: "VW Virtus",
    price: 2700,
    image: "https://imgd.aeplcdn.com/640X480/vimages/202503/3863073_13872_1_1741079073032.jpg?q=80",
    seats: "5 Seats",
    fuel: "Diesel",
    year: "2024",
    transmission: "Automatic",
  },
  {
    id: 6,
    name: "Hyundai Verma",
    price: 2500,
    image: "https://preview.redd.it/bought-verna-sx-turbo-dct-v0-b568ex9ti0gc1.jpg?width=640&crop=smart&auto=webp&s=890956ed61c6a37932c1a7a288ff62b89bbb7087",
    seats: "5 Seats",
    fuel: "Petrol",
    year: "2024",
    transmission: "Automatic",
  },
  {
    id: 7,
    name: "Suzuki Brezza",
    price: 2000,
    image: "https://imgd.aeplcdn.com/640X480/image/used/xv5xj1imzn9i.jpeg?q=80",
    seats: "5 Seats",
    fuel: "Petrol",
    year: "2022",
    transmission: "Manual",
  },
  {
    id: 8,
    name: "VW Polo",
    price: 1800,
    image: "https://imgd.aeplcdn.com/640X480/vimages/202501/3782260_55862_1_1736252091527.jpg?q=80",
    seats: "5 Seats",
    fuel: "Petrol",
    year: "2020",
    transmission: "Manual",
  },
  {
    id: 9,
    name: "Suzuki Ertiga",
    price: 3500,
    image: "https://imgd.aeplcdn.com/640X480/image/used/s655wsvaqv9g.jpeg?q=80",
    seats: "7 Seats",
    fuel: "Petrol+CNG",
    year: "2023",
    transmission: "Manual",
  },
  {
    id: 10,
    name: "Grand Vitara",
    price: 2500,
    image: "https://imgd.aeplcdn.com/640X480/vimages/202502/3852952_136716_27_1740560821980.jpg?q=80",
    seats: "5 Seats",
    fuel: "Hybrid",
    year: "2024",
    transmission: "Automatic",
  },
  {
    id: 11,
    name: "Tata Nexon",
    price: 2000,
    image: "https://imgd.aeplcdn.com/640X480/vimages/202503/3896540_130467_1_1742989389184.jpg?q=80",
    seats: "5 Seats",
    fuel: "Electric",
    year: "2024",
    transmission: "Automatic",
  },
  {
    id: 12,
    name: "Mahindra Thar",
    price: 3000,
    image: "https://images10.gaadi.com/usedcar_image/4437819/original/processed_1d3ab5bde9efac61bfe6090c3fe2fc47.jpg?imwidth=320",
    seats: "5 Seats",
    fuel: "Diesel 4x4",
    year: "2024",
    transmission: "Automatic",
  },
];

const Cars = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Header />
      {/* Hero Banner with background image */}
      <section
        className="h-85 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/4090350/pexels-photo-4090350.jpeg')" }}
      >
        <h1 className="text-white text-4xl md:text-5xl font-bold">Cars</h1>
      </section>

      <div className='grid sm:grid-cols-2 md:grid-cols-4 !p-10'>
        {carData.map((car, index) => (
          <div
            key={car.id}
            className='card shadow-lg rounded-lg transform transition-all duration-300 hover:scale-105 h-120 w-100 !mb-10' 
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <div className='card-body !p-4'>
              <img src={car.image} alt={car.name} className='rounded-lg h-60 w-full object-cover' />
              <div className='!p-3'>
                <h1 className='text-xl font-semibold'>{car.name}</h1>
                <p className='text-blue-500 text-lg !mt-1'>
                ₹{car.price}<span className='text-gray-500 text-sm'>/day</span>
                </p>

                <div className="grid grid-cols-2 gap-3 !mt-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users size={20} />
                    <span>{car.seats}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Fuel size={20} />
                    <span>{car.fuel}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={20} />
                    <span>{car.year}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Car size={20} />
                    <span>{car.transmission}</span>
                  </div>
                </div>

                <NavLink to="/scorpio">
                <Button type='primary' className="w-full !mt-6 text-white font-semibold !py-2 rounded-lg">
                  Rent Now
                </Button>
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
