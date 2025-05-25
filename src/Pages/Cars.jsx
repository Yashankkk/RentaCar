import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Car, Fuel, Users, Calendar } from 'lucide-react';
import { Button } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
// import Header from '../Components/Header';
// import Footer from '../Components/Footer';

// Sample car data
const carData = [
  {
    id: 1,
    name: "Mahindra Scorpio",
    price: 3500,
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/40432/scorpio-n-exterior-left-front-three-quarter-2.webp?isig=0&q=80",
    seats: "7 Seats",
    fuel: "Diesel",
    year: "2024",
    transmission: "Automatic",
    buttonLabel: "Rent Now",
    buttonLink: "/cars/scorpio",
  },
  {
    id: 2,
    name: "Hyundai Creta",
    price: 3000,
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/106815/creta-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
    seats: "5 Seats",
    fuel: "Petrol",
    year: "2023",
    transmission: "Manual",
    buttonLabel: "Rent Now",
    buttonLink: "/cars/creta",
  },
  {
    id: 3,
    name: "Tata Harrier",
    price: 3500,
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/139139/harrier-facelift-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
    seats: "5 Seats",
    fuel: "Diesel",
    year: "2024",
    transmission: "Automatic",
    buttonLabel: "Rent Now",
    buttonLink: "/cars/harrier",
  },
  {
    id: 4,
    name: "Suzuki Alto",
    price: 1500,
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/127563/alto-k10-exterior-right-front-three-quarter-60.jpeg?isig=0&q=80",
    seats: "5 Seats",
    fuel: "Petrol",
    year: "2024",
    transmission: "Manual",
    buttonLabel: "Rent Now",
    buttonLink: "/cars/alto",
  },
  {
    id: 5,
    name: "VW Virtus",
    price: 2700,
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/144681/virtus-exterior-right-front-three-quarter-6.jpeg?isig=0&q=80",
    seats: "5 Seats",
    fuel: "Diesel",
    year: "2024",
    transmission: "Automatic",
    buttonLabel: "Rent Now",
    buttonLink: "/cars/virtus",
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
    buttonLabel: "Rent Now",
    buttonLink: "/cars/verna",
  },
  {
    id: 7,
    name: "Maruti Brezza",
    price: 2000,
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/107543/brezza-exterior-right-front-three-quarter-6.jpeg?isig=0&q=80",
    seats: "5 Seats",
    fuel: "Petrol",
    year: "2022",
    transmission: "Manual",
    buttonLabel: "Rent Now",
    buttonLink: "/cars/brezza",
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
    buttonLabel: "Rent Now",
    buttonLink: "/cars/polo",
  },
  {
    id: 9,
    name: "Suzuki Ertiga",
    price: 3500,
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/115777/ertiga-exterior-right-front-three-quarter-9.jpeg?isig=0&q=80",
    seats: "7 Seats",
    fuel: "Petrol+CNG",
    year: "2023",
    transmission: "Manual",
    buttonLabel: "Rent Now",
    buttonLink: "/cars/ertiga",
  },
  {
    id: 10,
    name: "Grand Vitara",
    price: 2500,
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/123185/grand-vitara-exterior-front-view.jpeg?isig=0&q=80",
    seats: "5 Seats",
    fuel: "Hybrid",
    year: "2024",
    transmission: "Automatic",
    buttonLabel: "Rent Now",
    buttonLink: "/cars/vitara",
  },
  {
    id: 11,
    name: "Tata Nexon EV",
    price: 2000,
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/149123/nexon-ev-exterior-right-front-three-quarter-74.jpeg?isig=0&q=80",
    seats: "5 Seats",
    fuel: "Electric",
    year: "2024",
    transmission: "Automatic",
    buttonLabel: "Rent Now",
    buttonLink: "/cars/nexon",
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
    buttonLabel: "Rent Now",
    buttonLink: "/cars/thar",
  },
];

const Cars = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
  <div>
    <Header />
    <section
    className="min-h-[50vh] bg-cover bg-center flex items-center justify-center"
    style={{ backgroundImage: "url('https://images.pexels.com/photos/4090350/pexels-photo-4090350.jpeg')" }}>
    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center">Cars</h1>
    </section>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 !px-4 sm:!px-8 !py-10">
      {carData.map((car, index) => (
        <div
        key={car.id}
        className="shadow-lg rounded-lg transform transition-all duration-300 hover:scale-105 bg-white flex flex-col"
        data-aos="fade-up"
        data-aos-delay={`${index * 100}`}>
        <img
          src={car.image}
          alt={car.name}
          className="rounded-t-lg h-48 sm:h-56 w-full object-cover"/>
        <div className="!p-4 flex flex-col justify-between h-full">
          <div>
            <h1 className="text-lg sm:text-xl font-semibold">{car.name}</h1>
            <p className="text-blue-500 text-base sm:text-lg !mt-1">
              ₹{car.price}<span className="text-gray-500 text-sm">/day</span>
            </p>

            <div className="grid grid-cols-2 gap-3 !mt-4 text-sm sm:text-base text-gray-600">
              <div className="flex items-center gap-2">
                <Users size={18} />
                <span>{car.seats}</span>
              </div>
              <div className="flex items-center gap-2">
                <Fuel size={18} />
                <span>{car.fuel}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{car.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Car size={18} />
                <span>{car.transmission}</span>
              </div>
            </div>
          </div>

          <NavLink to={car.buttonLink || `/car/${car.id}`} className="!mt-6">
            <Button
              type="primary"
              className="w-full text-white font-semibold !py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-all duration-300"
            >
              {car.buttonLabel || "Rent Now"}
            </Button>
          </NavLink>
        </div>
      </div>
    ))}
  </div>
  <Footer />
</div>

  );
};

export default Cars;
