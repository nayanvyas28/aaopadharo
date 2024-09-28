import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import HotelDetail from "./HotelDetail";
import { useNavigate } from 'react-router-dom';
const ExploreCard = () =>{
    const navigate = useNavigate();
    const navigateToAbout = () => {
        navigate('/discover');
      };
    const navigateToAbout2 = () => {
        navigate('/home');
      };
      const navigateToAbout1 = () => {
        navigate('/blog');
      };
      const navigateToAbout3 = () => {
        navigate('/rentals');
      };
      const navigateToAbout4 = () => {
        navigate('/login');
    };
    return(
        <>
        <Navbar navigateToAbout2={navigateToAbout2} navigateToAbout={navigateToAbout} navigateToAbout1={navigateToAbout1} navigateToAbout3={navigateToAbout3} navigateToAbout4={navigateToAbout4} ></Navbar>
        <HotelDetail></HotelDetail>

        <br></br>
        <Footer navigateToAbout2={navigateToAbout2} ></Footer>
        </>
    );
};
export default ExploreCard;