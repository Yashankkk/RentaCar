import React from "react";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const FooterLinks = [
  { title: "Home", link: "#" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/#contact" },
  { title: "Blog", link: "/#blog" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 mt-14 rounded-t-3xl">
      <div className="container mx-auto !px-6 !py-10">
        <div className="flex flex-cols-1 md:flex-cols-3 gap-8 justify-between">
          
          {/* Company Details */}
          <div>
            <h1 className="text-2xl font-bold mb-3">RideEase</h1>
            <p className="text-sm mb-4">
              Experience the best car rental services with top-notch vehicles and seamless booking.
            </p>
            <div className="flex items-center gap-2">
              <EnvironmentOutlined className="text-xl" />
              <p>Noida, Uttar Pradesh</p>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <PhoneOutlined className="text-xl" />
              <p>+91 123456789</p>
            </div>
            {/* Social Media Links */}
            <div className="flex items-center gap-4 mt-6">
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 ">
            <div>
              <h2 className="text-xl font-semibold mb-3">Important Links</h2>
              <ul className="space-y-2">
                {FooterLinks.map((link, index) => (
                  <li key={index} className="cursor-pointer hover:translate-x-1 transition-all duration-300 hover:text-red-500">
                    ➜ <a href={link.link}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
              <ul className="space-y-2">
                {FooterLinks.map((link, index) => (
                  <li key={index} className="cursor-pointer hover:translate-x-1 transition-all duration-300 hover:text-red-500">
                    ➜ <a href={link.link}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3">Our Services</h2>
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
        <div className="text-center mt-10 border-t border-gray-500 !pt-6">
          <p>&copy; {new Date().getFullYear()} Car Rental. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
