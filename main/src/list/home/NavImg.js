import { FaUser } from "react-icons/fa";
import navImg from "../../images/loginImg1.png";
import logo from "../../images/logo.png";

const NavImg = ({
  navigateToAbout,
  navigateToAbout1,
  navigateToAbout2,
  navigateToAbout3,
  navigateToAbout4,
}) => {
  return (
    <div>
      <div className="relative w-screen min-h-screen overflow-hidden">
        <nav className="absolute top-0 left-0 w-full z-10 bg-transparent my-7">
          <div className="container mx-auto flex justify-between items-center py-4 px-6">
            <div className="text-white text-lg font-bold">
              <button onClick={navigateToAbout2}>
                <img src={logo} alt="logo" className="h-12" />
              </button>
            </div>
            <div className="space-x-14 hidden md:flex items-center">
              <button
                className="text-white hover:text-gray-400"
                onClick={navigateToAbout}
              >
                Discover
              </button>
              <button
                className="text-white hover:text-gray-400"
                onClick={navigateToAbout3}
              >
                Rentals
              </button>
              <button
                className="text-white hover:text-gray-400"
                onClick={navigateToAbout1}
              >
                Blog Post
              </button>
              <button
                className="bg-customPeach text-white px-4 py-2 rounded"
                onClick={navigateToAbout4}
              >
                Logout
              </button>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 hover:bg-opacity-25 focus:outline-none focus:bg-opacity-25 focus:text-gray-300">
                {/* Mobile Menu Icon */}
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button
                className="text-white hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium"
                onClick={navigateToAbout}
              >
                Discover
              </button>
              <button
                className="text-white hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium"
                onClick={navigateToAbout3}
              >
                Rentals
              </button>
              <button
                className="text-white hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium"
                onClick={navigateToAbout1}
              >
                Blogpost
              </button>
              <button
                className="bg-customPeach text-white block w-full px-3 py-2 rounded-md text-base font-medium"
                onClick={navigateToAbout4}
              >
                Logout
              </button>
            </div>
          </div>
        </nav>

        <img
          className="w-full h-full object-cover opacity-90"
          src={navImg}
          alt="Card"
        />
        <div className="absolute inset-0 flex flex-col lg:flex-row items-start lg:items-center justify-center px-4 sm:px-6 md:px-10 bg-opacity-80  lg:mt-0">
  {/* Text Container */}
  <div className="text-container w-full lg:w-1/2 flex flex-col items-start justify-center lg:justify-start lg:pl-16 text-center lg:text-left px-4 lg:px-0">
    <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-normal">Discover Ujjain</h2>
    <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-normal mb-2 py-4">
      with{" "}
      <b>
        <i>Aaopadharo</i>
      </b>
    </h2>
    <button className="bg-gradient-to-r from-ffe485 to-c1a43e text-black px-4 py-2 rounded-full text-sm sm:text-base md:text-lg">
      Search Hotels
    </button>
  </div>

  {/* Form Container */}
  <div className="form-container w-full lg:w-2/6 flex justify-center lg:justify-end mt-40 lg:mt-0 lg:pr-24">
  <div className="bg-customSkin lg:bg-white lg:bg-opacity-50 p-4 rounded-3xl w-full max-w-xs sm:max-w-sm md:max-w-md h-80">
    <h1 className="font-bold text-center text-lg md:text-xl">Book a Hotel</h1>
    <p className="text-center text-sm">Discover the perfect space for you</p>

    <div className="flex  flex-row mb-4 space-x-1 md:space-x-4 mt-5  md:space-y-0">
      <div className="w-1/2">
        <label className="block text-black text-sm font-semibold mb-2" htmlFor="checkin-date">
          Check-In Date
        </label>
        <div className="relative max-w-sm">
          <input
            type="date"
            placeholder="select date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-2 p-2.5"
          />
        </div>
      </div>
      <div className="w-1/2">
        <label className="block text-black text-sm font-semibold mb-2" htmlFor="checkout-date">
          Check-Out Date
        </label>
        <div className="relative max-w-sm">
          <input
            type="date"
            placeholder="select date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-2 p-2.5"
          />
        </div>
      </div>
    </div>

    <div className="flex flex-row mb-4 space-x-1 md:space-x-4">
      <div className="w-1/2">
        <label className="block text-black text-sm font-semibold mb-2" htmlFor="adults">
          Adults
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-black">
            <FaUser />
          </span>
          <input
            type="number"
            id="adults"
            className="bg-white text-black w-full py-2 pl-10 pr-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
            min="1"
            defaultValue=""
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 0.75rem center",
              backgroundSize: "1.5rem 1.5rem",
            }}
          />
        </div>
      </div>
      <div className="w-1/2">
        <label className="block text-black text-sm font-semibold mb-2" htmlFor="children">
          Children
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-black">
            <FaUser />
          </span>
          <input
            type="number"
            id="children"
            className="bg-white text-black w-full py-2 pl-10 pr-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
            min="0"
            defaultValue=""
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 0.75rem center",
              backgroundSize: "1.5rem 1.5rem",
            }}
          />
        </div>
      </div>
    </div>

    <button className="w-full lg:w-3/6 bg-customPeach text-white font-semibold shadow-xl py-2 rounded-lg hover:bg-opacity-75 transition duration-200 mt-4 lg:ml-24 mb-10">
      Search
    </button>
  </div>
</div>

</div>

      </div>
    </div>
  );
};

export default NavImg;
