import { FaUser } from 'react-icons/fa';

function SearchingBar() {
  return (
    <>
      <div className="w-full h-full flex justify-center">
        <div className="bg-gradient-to-r from-fed8bc to-ffbe82 w-full lg:w-9/12 max-w-screen-lg h-auto lg:h-32 mx-4 lg:mx-auto mt-10 rounded-3xl flex flex-col lg:flex-row justify-evenly items-center p-4 lg:p-0 space-y-4 lg:space-y-0 lg:space-x-6">
          
          <div className="text-center lg:text-left lg:w-1/3 ml-4">
            <h1 className="font-bold text-xl lg:text-2xl">Book a Taxi</h1>
            <p className="text-md lg:text-lg text-gray-600 mt-2">Discover the perfect ride for you!</p>
          </div>

          <div className="flex flex-col lg:flex-row justify-around items-center lg:items-end w-full lg:w-2/3 space-y-4 lg:space-y-0 lg:space-x-6">
            <div className="w-full lg:w-32">
              <label className="block text-black text-sm font-semibold mb-2" htmlFor="checkin-date">
                Pick Up Date
              </label>
              <input
                type="date"
                id="checkin-date"
                className="bg-white text-black w-full py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="w-full lg:w-32">
              <label className="block text-black text-sm font-semibold mb-2" htmlFor="checkout-date">
                Drop Date
              </label>
              <input
                type="date"
                id="checkout-date"
                className="bg-white text-black w-full py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="w-full lg:w-28">
              <label className="block text-black text-sm font-semibold mb-2" htmlFor="adults">
                Persons
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-black">
                  <FaUser />
                </span>
                <input
                  type="number"
                  id="adults"
                  className="bg-white text-black w-full py-2 pl-10 pr-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  min="1"
                  defaultValue=""
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-auto ">
            <button className="w-full lg:w-32 h-12 text-white bg-customPeach rounded-xl font-bold text-lg shadow-xl mr-5">
              SEARCH
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchingBar;
