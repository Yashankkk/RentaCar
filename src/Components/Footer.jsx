import React from "react";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import "@fontsource/poppins";
import { NavLink } from "react-router-dom"; // Corrected import

const FooterLinks = [
  { title: "Home", link: "/home" },
  { title: "About", link: "/about" },
  { title: "Contact", link: "/contact" },
  { title: "Blog", link: "/blog" },
];

const Footer = () => {
  return (
    <footer className="bg-[#02084d] text-gray-300">
      <div
        className="max-w-7xl mx-auto !px-4 sm:!px-6 lg:!px-8 !py-10"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Company Details */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl font-bold font-serif !mb-3">RideEase</h1>
            <p className="text-lg !mb-4">
              Experience the best car rental services with top-notch vehicles and seamless booking.
            </p>
            <div className="flex justify-center md:justify-start items-center gap-2">
              <EnvironmentOutlined className="text-xl" />
              <p>Noida, Uttar Pradesh</p>
            </div>
            <div className="flex justify-center md:justify-start items-center gap-2 !mt-3">
              <PhoneOutlined className="text-xl" />
              <p>+91 123456789</p>
            </div>
            {/* Social Media Links */}
            <div className="flex justify-center md:justify-start items-center gap-4 !mt-6">
              <a href="#" className="text-2xl hover:text-red-500">
                <InstagramOutlined />
              </a>
              <a href="#" className="text-2xl hover:text-blue-600">
                <FacebookOutlined />
              </a>
              <a href="#" className="text-2xl hover:text-blue-500">
                <LinkedinOutlined />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <h2 className="text-xl font-semibold font-serif !mb-3">Important Links</h2>
              <ul className="space-y-2">
                {FooterLinks.map((link, index) => (
                  <li
                    key={index}
                    className="hover:translate-x-1 transition-all duration-300 hover:text-red-500"
                  >
                    ➜ <NavLink to={link.link}>{link.title}</NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold font-serif !mb-3">Our Services</h2>
              <ul className="space-y-2">
                {["Car Hire", "Luxury Cars", "Self-Drive", "Chauffeur Service"].map(
                  (service, index) => (
                    <li
                      key={index}
                      className="hover:translate-x-1 transition-all duration-300 hover:text-red-500"
                    >
                      ➜ {service}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center !mt-10 border-t border-gray-500 !pt-6 text-sm">
          <p>&copy; {new Date().getFullYear()} RideEase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;