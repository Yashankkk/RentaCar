import React, { useState, useEffect } from "react";
import {
  MenuOutlined,
  CloseOutlined,
  HomeOutlined,
  PhoneOutlined,
  CarOutlined,
  UserOutlined,
  UserAddOutlined,
  InfoCircleOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";
import "@fontsource/poppins";
import car from "../assets/carr.png";
import { NavLink } from "react-router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/30 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div
        className="container mx-auto flex justify-between items-center !p-4 md:p-6"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <div className="flex justify-between items-center gap-3">
          <img src={car} alt="logo" className="h-20 w-25 !mt-5" />
          <span className="!pt-11 text-2xl cursor-pointer hover:scale-100 text-white bg-clip-text font-serif text-transparent">
            <NavLink to="/home"><b><i>RideEase</i></b></NavLink>
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-15 space-x-6 text-lg text-white">
          <NavLink to="/">
            <p className="hover:scale-105 cursor-pointer">
              <HomeOutlined /> Home
            </p>
          </NavLink>
          <NavLink to="/about">
            <p className="hover:scale-105 cursor-pointer">
              <InfoCircleOutlined /> About
            </p>
          </NavLink>
          {/* <NavLink>
            <p className="hover:scale-105 cursor-pointer">
              <FileSearchOutlined /> News
            </p>
          </NavLink> */}
          <NavLink to="/cars">
            <p className="hover:scale-105 cursor-pointer">
              <CarOutlined /> Cars
            </p>
          </NavLink>
          <NavLink to="/contact">
            <p className="hover:scale-105 cursor-pointer">
              <PhoneOutlined /> Contact
            </p>
          </NavLink>
        </nav>

        {/* Right Side - Buttons */}
        <div className="hidden md:flex gap-8 space-x-4">
          <NavLink to="/registration">
            <button className="bg-gradient-to-r from-green-500 to-green-500 hover:from-blue-600 hover:to-blue-800 text-white !py-3 !px-6 md:!px-8 lg:!px-10 rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 active:scale-95 text-sm md:text-base lg:text-lg">
              <UserAddOutlined /> Sign Up
            </button>
          </NavLink>

          <NavLink to="/login">
            <button className="bg-gradient-to-r from-green-500 to-green-500 hover:from-blue-600 hover:to-blue-800 text-white !py-3 !px-6 md:!px-8 lg:!px-10 rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 active:scale-95 text-sm md:text-base lg:text-lg">
              <UserOutlined /> Login
            </button>
          </NavLink>
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
        <nav className="md:hidden bg-white/80 backdrop-blur-md !p-4 space-y-4 text-black">
          <NavLink to="/home">
            <p className="hover:text-blue-600 cursor-pointer">Home</p>
          </NavLink>
          <NavLink to="/about">
            <p className="hover:text-blue-600 cursor-pointer">About</p>
          </NavLink>
          <NavLink to="/cars">
            <p className="hover:text-blue-600 cursor-pointer">Cars</p>
          </NavLink>
          <NavLink to="/contact">
            <p className="hover:text-blue-600 cursor-pointer">Contact</p>
          </NavLink>
          <NavLink to="/registration">
            <button className="bg-white !px-4 !py-2 rounded-lg w-full !mt-2 hover:text-blue-600 cursor-pointer">
              Sign Up
            </button>
          </NavLink>
          <NavLink to="/">
            <button className="border border-white !px-4 !py-2 rounded-lg w-full !mt-2 hover:text-blue-600 cursor-pointer">
              Login
            </button>
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Header;
