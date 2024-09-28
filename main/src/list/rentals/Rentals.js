import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
import { useNavigate } from 'react-router-dom';
import BookingCards from './BookingCards';
import SearchingBar from './SearchingBar';
const Rentals = () => {
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
    const navigateToAbout4 = () => {
      navigate('/login');
    };
    return(
        <>
        <Navbar navigateToAbout={navigateToAbout} navigateToAbout1={navigateToAbout1} navigateToAbout2={navigateToAbout2} navigateToAbout4={navigateToAbout4} ></Navbar>
        <SearchingBar></SearchingBar>
       <BookingCards></BookingCards>
       <BookingCards></BookingCards>
       <BookingCards></BookingCards>
        <Footer navigateToAbout2={navigateToAbout2}></Footer>
        </>
    );
};
export default Rentals;