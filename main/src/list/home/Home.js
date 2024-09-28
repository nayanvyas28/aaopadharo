import Footer from "../../components/footer";
import Card from "./Card";
import ImgTxt from "./ImgTxt";
import NavImg from "./NavImg";
import Review from "./Review";
import Facilities from "./Facilities";
import History from "./History";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import React, { useState, useEffect } from 'react';

const Home = () => {
  const navigate = useNavigate();

  const navigateToAbout = () => {
    navigate('/discover');
  };
  const navigateToAbout1 = () => {
    navigate('/blog');
  };
  const navigateToAbout2 = () => {
    navigate('/home');
  };
  const navigateToAbout3 = () => {
    navigate('/rentals');
  };
  const navigateToAbout4 = () => {
    navigate('/login');
  };

  const [rooms, setRooms] = useState([]);
  const [loading, setloading] = useState();
  const [error, seterror] = useState();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setloading(true);
        const data = (await axios.get('/api/rooms/getallrooms')).data;
        setRooms(data);
        setloading(false);
      } catch (error) {
        seterror(true);
        console.log(error);
        setloading(false)
      }
    };

    fetchRooms();
  }, []);

  return (
    <>
      <NavImg 
        navigateToAbout={navigateToAbout}
        navigateToAbout1={navigateToAbout1}
        navigateToAbout2={navigateToAbout2}
        navigateToAbout3={navigateToAbout3}
        navigateToAbout4={navigateToAbout4}
      />
      <History />
      <div>
        <h1 className="text-customBrown text-center font-bold text-3xl py-20">
          Discover the best Hotels
        </h1>
        <Card />
      </div>
      <br />
      <br />
      <ImgTxt />
      <Facilities />
      <Review />
      <Footer navigateToAbout2={navigateToAbout2} />
    </>
  );
};

export default Home;
