import React, { useState } from "react";
import { MenuOutlined, CloseOutlined, CarOutlined } from "@ant-design/icons"; // Ant Design icons
import "@fontsource/poppins";
import car from "../assets/car.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center !p-4 md:p-6" style={{ fontFamily: "Poppins, sans-serif" }}>
        <div className="flex justify-between">
        <img src={car} alt="" className="h-30 w-30"/>
        <span className="!pt-11 text-2xl bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"><b>RideEase</b></span>
        </div>
        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 space-x-6 text-lg">
          <p className="hover:text-blue-300 cursor-pointer">Home</p>
          <p className="hover:text-blue-300 cursor-pointer">About</p>
          <p className="hover:text-blue-300 cursor-pointer">Cars</p>
          <p className="hover:text-blue-300 cursor-pointer">Contact</p>
        </nav>

        {/* Right Side - Buttons */}
        <div className="hidden md:flex gap-8 space-x-4">
          <button className="border border-black !px-4 py-2 rounded-lg hover:bg-gray-300 hover:text-blue-600 transition">
            Sign Up
          </button>
          <button className="border border-black !px-4 py-2 rounded-lg hover:bg-gray-300 hover:text-blue-600 transition">
            Login
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <CloseOutlined className="text-2xl" />
            ) : (
              <MenuOutlined className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white-700 p-4 space-y-4">
          <p className="hover:text-blue-300 cursor-pointer">Home</p>
          <p className="hover:text-blue-300 cursor-pointer">About</p>
          <p className="hover:text-blue-300 cursor-pointer">Cars</p>
          <p className="hover:text-blue-300 cursor-pointer">Contact</p>
          <button className="bg-white px-4 py-2 rounded-lg w-full mt-2">
            Sign Up
          </button>
          <button className="border border-white px-4 py-2 rounded-lg w-full mt-2">
            Login
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
