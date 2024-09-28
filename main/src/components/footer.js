import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faPrint } from "@fortawesome/free-solid-svg-icons";
import { 
  FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, 
  FaInstagram, FaGoogle, FaPinterest, FaWifi 
} from "react-icons/fa";
import logo from "../images/logo.png";

const Footer = ({ navigateToAbout2 }) => {
  return (
    <footer className="bg-customSkin text-white p-4 w-screen">
      {/* Top line */}
      <div className="w-full h-1 bg-customBrown mt-12"></div>

      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="text-lg font-bold mb-6 md:mb-0">
            <button onClick={navigateToAbout2}>
              <img src={logo} alt="logoimage" className="max-h-12" />
            </button>
          </div>

          {/* Address and Phone Numbers */}
          <div className="md:w-1/2 lg:w-2/3">
            <div className="flex flex-col items-center md:items-end text-center md:text-right mb-4">
              <div className="flex items-center mb-2">
                <FontAwesomeIcon className="text-customBrown mr-2" icon={faMapMarkerAlt} />
                <p className="text-black">
                  ABC Company, 123 East, 17th Street, Ab Vd 100101
                </p>
              </div>
              <div className="flex items-center mb-2">
                <FontAwesomeIcon className="text-customBrown mr-2" icon={faPhone} />
                <p className="text-black">Mobile: (123) 456-7890</p>
              </div>
              <div className="flex items-center mb-2">
                <FontAwesomeIcon className="text-customBrown mr-2" icon={faPrint} />
                <p className="text-black">Phone: (123) 456-4321</p>
              </div>
            </div>
            <div className="flex justify-center md:justify-end space-x-4 mt-4">
              <h4 className="text-gray-500">Follow Us</h4>
              <FaFacebookF className="text-customBrown" />
              <FaTwitter className="text-customBrown" />
              <FaLinkedinIn className="text-customBrown" />
              <FaYoutube className="text-customBrown" />
              <FaInstagram className="text-customBrown" />
              <FaGoogle className="text-customBrown" />
              <FaPinterest className="text-customBrown" />
              <FaWifi className="text-customBrown" />
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="w-full h-px bg-gray-400 my-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Links */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-4 mb-4 md:mb-0">
            <button className="text-black font-semibold text-sm">
              ABOUT US
            </button>
            <button className="text-black font-semibold text-sm">
              CONTACT US
            </button>
            <button className="text-black font-semibold text-sm">
              HELP
            </button>
            <button className="text-black font-semibold text-sm">
              PRIVACY POLICY
            </button>
            <button className="text-black font-semibold text-sm">
              DISCLAIMER
            </button>
          </div>

          {/* Copyright */}
          <div>
            <p className="text-gray-500 text-sm">
              Copyright &copy; 2022 Biginit Company
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
