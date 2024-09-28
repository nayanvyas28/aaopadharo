import React, { useState } from 'react';
import logo from "../images/logo.png";

const Navbar = ({ navigateToAbout1, navigateToAbout2, navigateToAbout, navigateToAbout3, navigateToAbout4 }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-customSkin p-4 w-full">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="text-white text-lg font-bold">
          <button onClick={navigateToAbout2}>
            <img src={logo} alt="logoImage" className="h-8 md:h-10 lg:h-12" />
          </button>
        </div>
        <div className="md:hidden">
          <button
            id="menu-button"
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden md:flex md:space-x-4 lg:space-x-6 mt-4 md:mt-0 w-full md:w-auto">
          <button
            className="text-white hover:text-gray-400 px-4 py-2 md:px-6 lg:px-8"
            onClick={navigateToAbout}
          >
            Discover
          </button>
          <button
            className="text-white hover:text-gray-400 px-4 py-2 md:px-6 lg:px-8"
            onClick={navigateToAbout3}
          >
            Rentals
          </button>
          <button
            className="text-white hover:text-gray-400 px-4 py-2 md:px-6 lg:px-8"
            onClick={navigateToAbout1}
          >
            Blog Post
          </button>
          <button className="bg-customPeach text-white px-4 py-2 md:px-6 lg:px-8 md:py-3 lg:py-4 rounded mt-2 md:mt-0 w-full lg:w-auto text-center" onClick={navigateToAbout4}>
            Logout
          </button>
        </div>
        <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden w-full`}>
          <button
            className="block text-white hover:text-gray-400 px-4 py-2"
            onClick={navigateToAbout}
          >
            Discover
          </button>
          <button
            className="block text-white hover:text-gray-400 px-4 py-2"
            onClick={navigateToAbout3}
          >
            Rentals
          </button>
          <button
            className="block text-white hover:text-gray-400 px-4 py-2"
            onClick={navigateToAbout1}
          >
            Blog Post
          </button>
          <button className="block bg-customPeach text-white px-4 py-2 rounded mt-2 w-full lg:w-auto text-center" onClick={navigateToAbout4}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
