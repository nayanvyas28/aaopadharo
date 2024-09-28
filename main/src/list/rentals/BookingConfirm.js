import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
import { useNavigate } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';

const BookingConfirm = () => {
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

    return (
        <>
            <Navbar 
                navigateToAbout={navigateToAbout} 
                navigateToAbout1={navigateToAbout1} 
                navigateToAbout2={navigateToAbout2} 
                navigateToAbout4={navigateToAbout4} 
            />
            <div className='mx-4 md:mx-10 lg:mx-28 my-10 md:my-20 p-4 md:p-8 lg:p-10 bg-white rounded-2xl shadow-2xl shadow-slate-500 flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10'>
            <div className='lg:ml-28 h-auto lg:h-400 w-full lg:w-1/3 mt-8 bg-customCream rounded-2xl'>
          <h1 className='text-xl font-medium pl-10 pt-6'>Data Collection</h1>
          <p className='text-gray-500 pl-10 pr-4 pt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
          <div className='flex'>
            <div>
              <div className='h-10 w-10 mt-4 ml-10 bg-yellow-500 rounded-full flex items-center justify-center'>
                <CheckIcon style={{ fontSize: '2rem', color: 'white' }} />
              </div>
              <div className='h-12 w-1 mt-1 ml-14 bg-yellow-500'></div>
              <div className='h-10 w-10 mt-1 ml-10 bg-yellow-500 rounded-full flex items-center justify-center'>
                <CheckIcon style={{ fontSize: '2rem', color: 'white' }} />
              </div>
              <div className='h-10 w-1 ml-14 mt-1 bg-yellow-500'></div>
              <div className='h-10 w-10 mt-1 ml-10 bg-yellow-500 rounded-full flex items-center justify-center'>
                <CheckIcon style={{ fontSize: '2rem', color: 'white' }} />
              </div>
            </div>
            <div>
              <p className='pl-16 pt-8 text-lg'>PickUp Details</p>
              <p className='pl-16 pt-16 text-lg'>Driver</p>
              <p className='pl-16 pt-14 text-lg'>Confirm</p>
            </div>
          </div>
        </div>

                <div className='flex-1 text-center md:text-left'>
                    <h1 className='text-3xl lg:text-4xl font-bold text-customBrown mb-8 lg:mt-10'>
                        Booking Confirmed
                    </h1>
                    <div className='flex flex-col md:flex-row items-center'>
                        <div className='h-28 w-28 rounded-full bg-green-600 flex justify-center items-center'>
                            <CheckIcon style={{ fontSize: '4rem', color: 'white' }} />
                        </div>
                        <p className='mt-4 md:mt-0 md:ml-8 text-gray-500'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                    </div>
                </div>
            </div>
            <Footer navigateToAbout2={navigateToAbout2} />
        </>
    );
};

export default BookingConfirm;
