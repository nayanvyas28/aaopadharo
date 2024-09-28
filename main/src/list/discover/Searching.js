import { FaCalendarAlt, FaUser } from 'react-icons/fa';

function Searching() {
  return (
    <div className="w-full h-full flex justify-center mt-10">
      <div className="bg-gradient-to-r from-fed8bc to-ffbe82 w-full max-w-4xl h-auto md:h-32 rounded-3xl p-6 md:flex md:justify-evenly items-center">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h1 className="font-bold text-2xl">Book a Hotel</h1>
          <p className="text-lg text-gray-600 mt-2">Discover the perfect space for you!</p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-around w-full">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
            <div className="w-full md:w-32">
              <label className="block text-black text-sm font-semibold mb-2" htmlFor="checkin-date">
                Check-In Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="checkin-date"
                  className="bg-white text-black w-full py-2 px-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
                />
              </div>
            </div>
            <div className="w-full md:w-32">
              <label className="block text-black text-sm font-semibold mb-2" htmlFor="checkout-date">
                Check-Out Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="checkout-date"
                  className="bg-white text-black w-full py-2 px-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
            <div className="w-full md:w-28 ml-3">
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
                />
              </div>
            </div>
            <div className="w-full md:w-28">
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
                />
              </div>
            </div>
          </div>
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-sm ml-3">Book now</p>
            <button className="w-full md:w-32 h-12 ml-3 text-white bg-customPeach mt-2 rounded-xl font-bold text-lg shadow-xl ">
              SEARCH
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searching;
