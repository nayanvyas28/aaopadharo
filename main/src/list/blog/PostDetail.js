import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import postImg from "../../images/postimg1.png";
import { useNavigate } from 'react-router-dom';

const PostDetail = () => {
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

    return (
        <>
            <Navbar 
                navigateToAbout2={navigateToAbout2} 
                navigateToAbout={navigateToAbout} 
                navigateToAbout1={navigateToAbout1} 
                navigateToAbout3={navigateToAbout3} 
                navigateToAbout4={navigateToAbout4}
            />
            <div className="flex flex-col lg:flex-row lg:mx-32 lg:my-24 md:mx-16 md:my-16 sm:mx-10 sm:my-10 mx-5 my-5 space-y-10 lg:space-y-0 lg:space-x-10">
                <div className="w-full lg:w-1/2">
                    <img src={postImg} alt="imageOfPost" className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-md shadow-md" />
                </div>
                <div className="w-full lg:w-1/2">
                    <h1 className="font-bold text-xl md:text-2xl mb-4">Famous Place at MNOMN</h1>
                    <p className="font-semibold text-sm mb-2">
                        Written by John Due <span className="text-gray-500 pl-5">date</span>
                    </p>
                    <p className="text-gray-500 text-base mb-4">
                        With their elaborate superfluities and wonderful architecture, Indian monuments represent one of the most outstanding facets of the multi-faceted Indian culture. 
                        An architectural feat in itself, each Indian monument is a remarkably splendid sample of unbelievable artistry, covering a sense of mystery, deception, and romance.
                        Be it the marvel in white marble, the spellbinding Taj Mahal; or the red stone splendor, the magnificent Red Fort; or the magnificence of temple art of Khajuraho, Konark, and Hampi, there is evident the master craftsmanship and elegance, that brings to the forefront the splendor of the bygone era.
                    </p>
                    <p className="text-gray-500 text-base mb-4">
                        With their elaborate superfluities and wonderful architecture, Indian monuments represent one of the most outstanding facets of the multi-faceted Indian culture. 
                        An architectural feat in itself, each Indian monument is a remarkably splendid sample of unbelievable artistry, covering a sense of mystery, deception, and romance.
                        Be it the marvel in white marble, the spellbinding Taj Mahal; or the red stone splendor, the magnificent Red Fort; or the magnificence of temple art of Khajuraho, Konark, and Hampi, there is evident the master craftsmanship and elegance, that brings to the forefront the splendor of the bygone era. 
                        Monuments are witnesses of India's past; the monuments of India are also the guardian pillars of India's cultural heritage.
                        The monuments of India have become an inspiration for the future generations.
                    </p>
                    <h2 className="text-lg font-semibold mb-4">Important info:</h2>
                    <p className="text-gray-500 text-base mb-4">
                        With their elaborate superfluities and wonderful architecture, Indian monuments represent one of the most outstanding facets of the multi-faceted Indian culture. 
                        An architectural feat in itself, each Indian monument is a remarkably splendid sample of unbelievable artistry, covering a sense of mystery, deception, and romance.
                        Be it the marvel in white marble, the spellbinding Taj Mahal; or the red stone splendor, the magnificent Red Fort; or the magnificence of temple art of Khajuraho, Konark, and Hampi, there is evident the master craftsmanship and elegance, that brings to the forefront the splendor of the bygone era. 
                        Monuments are witnesses of India's past; the monuments of India are also the guardian pillars of India's cultural heritage.
                        The monuments of India have become an inspiration for the future generations.
                    </p>
                </div>
            </div>
            <Footer navigateToAbout2={navigateToAbout2} />
        </>
    );
};

export default PostDetail;
