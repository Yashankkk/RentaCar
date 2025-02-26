import React from "react";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import "@fontsource/poppins";

const FooterLinks = [
  { title: "Home", link: "#" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/#contact" },
  { title: "Blog", link: "/#blog" },
];

const Footer = () => {
  return (
    <footer className="bg-[#02084d] text-gray-300 ">
      <div className="container mx-auto !px-6 !py-10" style={{ fontFamily: "Poppins, sans-serif" }}>
        <div className="flex flex-cols-1 md:flex-cols-3 gap-8 justify-between md:text-left">
          
          {/* Company Details */}
          <div className="w-full md:w-1/3">
            <h1 className="text-2xl font-bold font-serif !mb-3">RideEase</h1>
            <p className="text-sm !mb-4">
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

          {/* Footer Links Section */}
          <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-10 ">
            <div>
              <h2 className="text-xl font-semibold font-serif !mb-3">Important Links</h2>
              <ul className="space-y-2">
                {FooterLinks.map((link, index) => (
                  <li key={index} className="cursor-pointer hover:translate-x-1 transition-all duration-300 hover:text-red-500">
                    ➜ <a href={link.link}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold font-serif !mb-3">Quick Links</h2>
              <ul className="space-y-2">
                {FooterLinks.map((link, index) => (
                  <li key={index} className="cursor-pointer hover:translate-x-1 transition-all duration-300 hover:text-red-500">
                    ➜ <a href={link.link}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold font-serif !mb-3">Our Services</h2>
              <ul className="space-y-2">
                {["Car Hire", "Luxury Cars", "Self-Drive", "Chauffeur Service"].map((service, index) => (
                  <li key={index} className="cursor-pointer hover:translate-x-1 transition-all duration-300 hover:text-red-500">
                    ➜ {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center !mt-10 border-t border-gray-500 !pt-6">
          <p>&copy; {new Date().getFullYear()} Car Rental. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
