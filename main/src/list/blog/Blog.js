import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import AllBlog from "./AllBlog";
import { useNavigate } from 'react-router-dom';
function Blog() {
    const navigate = useNavigate();
    const navigateToAbout = () => {
        navigate('/discover');
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
    return (
        <>
        <Navbar navigateToAbout2={navigateToAbout2} navigateToAbout={navigateToAbout} navigateToAbout3={navigateToAbout3} navigateToAbout4={navigateToAbout4}></Navbar>
        <br></br>
        <AllBlog ></AllBlog>
        <br></br>
        <Footer navigateToAbout2={navigateToAbout2} ></Footer>
        </>
    );
};
export default Blog;