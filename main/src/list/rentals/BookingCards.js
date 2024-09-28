import carImg from "../../images/car1.png";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import seatImg from "../../images/seat.png";
import bag from "../../images/luggage.png";
import speed from "../../images/speedometer.png";

function BookingCards() {
  const navigate = useNavigate();
  const navigateToAboutInfo = () => {
    navigate('/yourInfo');
  };

  return (
    <div className="h-full w-full flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0 my-16 px-4 lg:px-24">
      <div className="h-96 w-full lg:w-96 bg-customCream rounded-lg">
        <h1 className="text-xl font-bold text-center pt-3">Toyota Matrix</h1>
        <img src={carImg} alt="carimage" className="h-36 w-76 mx-auto my-5" />
        <div className="flex justify-around mx-4 lg:mx-8 my-4 space-x-4 lg:space-x-10">
          <div className="h-16 w-16 rounded-full border-2 border-white bg-gray-200 flex flex-col items-center justify-center">
            <img src={speed} alt="speed" className="h-8 w-8 mt-9 mb-2" />
            <p className="text-sm w-20 text-center mt-3 ">120 <span className="text-gray-500">km/hr</span></p>
          </div>
          <div className="h-16 w-16 rounded-full border-2 border-white bg-gray-200 flex flex-col items-center justify-center">
            <img src={seatImg} alt="seat" className="h-8 w-8 mb-2 mt-9" />
            <p className="text-sm w-20 text-center mt-3">8<span className="text-gray-500"> seater</span></p>
          </div>
          <div className="h-16 w-16 rounded-full border-2 border-white bg-gray-200 flex flex-col items-center justify-center">
            <img src={bag} alt="luggage" className="h-8 w-8 mb-2 mt-9" />
            <p className="text-sm w-20 text-center mt-3">10<span className="text-gray-500"> luggage</span></p>
          </div>
        </div>
        <div className="h-12 w-5/6 lg:w-80 bg-gray-50 rounded-lg mx-auto my-4 mt-7 flex items-center justify-between px-4">
          <p className="text-xl font-medium">Rs.2000<span className="text-base text-gray-500">/day</span></p>
          <button
            className="h-8 w-28 lg:w-36 rounded-xl text-white text-xl font-thin bg-customPeach"
            onClick={navigateToAboutInfo} >
            BOOK NOW
          </button>
        </div>
      </div>

      {/* Repeat the same structure for additional cards */}
      <div className="h-96 w-full lg:w-96 bg-customCream rounded-lg">
        <h1 className="text-xl font-bold text-center pt-3">Toyota Matrix</h1>
        <img src={carImg} alt="carimage" className="h-36 w-76 mx-auto my-5" />
        <div className="flex justify-around mx-4 lg:mx-8 my-4 space-x-4 lg:space-x-10">
          <div className="h-16 w-16 rounded-full border-2 border-white bg-gray-200 flex flex-col items-center justify-center">
            <img src={speed} alt="speed" className="h-8 w-8 mb-2 mt-9" />
            <p className="text-sm w-20 text-center mt-3">120 <span className="text-gray-500">km/hr</span></p>
          </div>
          <div className="h-16 w-16 rounded-full border-2 border-white bg-gray-200 flex flex-col items-center justify-center">
            <img src={seatImg} alt="seat" className="h-8 w-8 mb-2 mt-9" />
            <p className="text-sm w-20 text-center mt-3">8<span className="text-gray-500"> seater</span></p>
          </div>
          <div className="h-16 w-16 rounded-full border-2 border-white bg-gray-200 flex flex-col items-center justify-center">
            <img src={bag} alt="luggage" className="h-8 w-8 mb-2 mt-9" />
            <p className="text-sm w-20 text-center mt-3">10<span className="text-gray-500"> luggage</span></p>
          </div>
        </div>
        <div className="h-12 w-5/6 lg:w-80 bg-gray-50 rounded-lg mx-auto my-4 mt-7 flex items-center justify-between px-4">
          <p className="text-xl font-medium">Rs.2000<span className="text-base text-gray-500">/day</span></p>
          <button
            className="h-8 w-28 lg:w-36 rounded-xl text-white text-xl font-thin bg-customPeach"
            onClick={navigateToAboutInfo}
          >
            BOOK NOW
          </button>
        </div>
      </div>

      {/* Another card */}
      <div className="h-96 w-full lg:w-96 bg-customCream rounded-lg">
        <h1 className="text-xl font-bold text-center pt-3">Toyota Matrix</h1>
        <img src={carImg} alt="carimage" className="h-36 w-76 mx-auto my-5" />
        <div className="flex justify-around mx-4 lg:mx-8 my-4 space-x-4 lg:space-x-10">
          <div className="h-16 w-16 rounded-full border-2 border-white bg-gray-200 flex flex-col items-center justify-center">
            <img src={speed} alt="speed" className="h-8 w-8 mb-2 mt-9" />
            <p className="text-sm w-20 text-center mt-3 ">120 <span className="text-gray-500">km/hr</span></p>
          </div>
          <div className="h-16 w-16 rounded-full border-2 border-white bg-gray-200 flex flex-col items-center justify-center">
            <img src={seatImg} alt="seat" className="h-8 w-8 mb-2 mt-9" />
            <p className="text-sm w-20 text-center mt-3">8<span className="text-gray-500"> seater</span></p>
          </div>
          <div className="h-16 w-16 rounded-full border-2 border-white bg-gray-200 flex flex-col items-center justify-center">
            <img src={bag} alt="luggage" className="h-8 w-8 mb-2 mt-9" />
            <p className="text-sm w-20 text-center mt-3">10<span className="text-gray-500"> luggage</span></p>
          </div>
        </div>
        <div className="h-12 w-5/6 lg:w-80 bg-gray-50 rounded-lg mx-auto my-4 mt-7 flex items-center justify-between px-4">
          <p className="text-xl font-medium">Rs.2000<span className="text-base text-gray-500">/day</span></p>
          <button
            className="h-8 w-28 lg:w-36 rounded-xl text-white text-xl font-thin bg-customPeach"
            onClick={navigateToAboutInfo}
          >
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingCards;
