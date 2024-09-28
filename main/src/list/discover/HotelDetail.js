import CardImg from "../../images/card1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // If using React Router v6, for example

const HotelDetail = () => {
  const { roomid } = useParams(); // Use `useParams` to get URL params
  const [room, setRoom] = useState(null); // Initial state set to `null`
  const [loading, setLoading] = useState(false); // Set initial value as `false`
  const [error, setError] = useState(false); // Set initial value as `false`

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true);
        const { data } = await axios.post('/api/rooms/getroombyid', { roomid }); // Assuming `roomid` is needed
        setRoom(data);
        setLoading(false);
      } catch (err) {
        setError(true);
        console.log(err);
        setLoading(false);
      }
    };

    fetchRooms();
  }, [roomid]); // Add `roomid` as a dependency

  return (
    <>
      <div className="flex flex-col xl:flex-row lg:mx-56 xl:ml-44 my-10 xl:my-20">
        <div className="flex flex-col items-center lg:items-start">
          <div className="max-h-full w-full lg:w-auto">
            <img src={CardImg} alt="hotelimage" className="h-64 lg:h-96 w-full lg:min-w-96" />
          </div>
          <div className="flex space-x-3 mt-10 lg:mt-20 overflow-x-auto">
            {[...Array(4)].map((_, i) => (
              <img
                key={i}
                src={CardImg}
                alt="hotelimage"
                className="h-24 w-20 lg:h-36 lg:w-36 xl:h-28 xl:h-28"
              />
            ))}
          </div>
        </div>
        <div className="mt-6 lg:ml-20 px-6 lg:px-0">
          <p className="text-customBrown text-base">London England</p>
          <h1>{roomid}</h1>
          <h1 className="font-medium text-xl lg:text-2xl mt-2 lg:mt-4">Hotel Regetn Park</h1>
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 mt-6">
            <h2 className="font-bold text-lg">Rs200 Par Night</h2>
            <div className="bg-gray-200 h-px lg:h-30 lg:w-px"></div>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  className="text-orange-500 mr-1"
                />
              ))}
              <p>5</p>
            </div>
          </div>
          <p className="text-sm mt-6 lg:mt-10 lg:mr-20">
            A good hotel booking system serves as a centralized platform that
            allows guests to make reservations for rooms, amenities, and
            services. Meanwhile, an online reservation system also provides
            hoteliers with a streamlined way to handle reservations,
            availability, pricing, and guest information. Customize your entire
            booking flow with Bookinglayer.
          </p>
          <button className="bg-customBrown text-white font-normal text-xl h-12 lg:h-14 w-full lg:w-56 rounded-xl mt-6 lg:mt-12">
            BOOK NOW
          </button>
          <h1 className="font-semibold text-2xl lg:text-3xl mt-10 lg:ml-24 text-gray-700">
            Rating
          </h1>
          <div className="flex flex-col lg:flex-row xl:ml-28">
            <div className="flex items-center font-bold text-5xl lg:text-7xl mt-6 lg:mt-10">
              <i className="mr-2">0.0</i>
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-500 text-2xl lg:text-3xl"
              />
            </div>
            <div className="ml-0 lg:ml-28 my-6 lg:my-10">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center mt-2">
                  <span className="mr-2">{5 - i}</span>
                  <div className="w-full lg:w-80 bg-gray-200 rounded-sm h-2.5 dark:bg-gray-700">
                    <div className="bg-yellow-500 h-2.5 rounded-sm w-10"></div>
                  </div>
                  <span className="ml-2">0.0%</span>
                </div>
              ))}
            </div>
          </div>
          <hr className="mt-5"></hr>
          <div className="text-gray-500 mt-3 flex flex-col lg:flex-row justify-between">
            Click to add a review.
            <button className="text-blue-500">+Add Review</button>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row lg:mx-44 space-y-6 lg:space-y-0 lg:space-x-10 my-10">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="min:h-72 w-full lg:w-3/6 border border-gray-300 shadow-lg">
            <div className="flex ml-5 lg:ml-10 my-5">
              <img
                src={CardImg}
                alt="profilepic"
                className="h-16 w-16 lg:h-20 lg:w-20 rounded-full"
              />
              <div className="ml-3 lg:ml-5 mt-3">
                <h1 className="font-semibold">ABCDSF HFINKK</h1>
                <p className="text-sm text-gray-500 pt-1">DHfngn fjgmks</p>
                <div className="flex pt-2">
                  {[...Array(4)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className="text-orange-500 mr-1"
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm ml-5 lg:ml-10 mb-10 mr-5 lg:mr-20">
              A good hotel booking system serves as a centralized platform that
              allows guests to make reservations for rooms, amenities, and
              services. Meanwhile, an online reservation system also provides
              hoteliers with a streamlined way to handle reservations,
              availability, pricing, and guest information. Customize your entire
              booking flow with Bookinglayer.
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default HotelDetail;
