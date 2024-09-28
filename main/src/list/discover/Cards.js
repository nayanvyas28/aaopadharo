import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import CardImg from '../../images/card1.png';
import { Link } from 'react-router-dom'; // Import Link

function Cards() {
    return (
        <div className='flex flex-wrap justify-center space-x-0 md:space-x-32 mx-20 md:mx-20 my-10'>
           <Link to="/hotel-details" to={'/book/${room._id}'} className='w-full md:w-72 min-h-80 bg-gray-100 rounded-t-2xl rounded-b-xl m-2 hover:scale-110'>
               <img src={CardImg} alt='cardImg' className='w-72 rounded-t-2xl' />
               <p className='text-sm text-green-500 mt-3 ml-4'>Ujjain xyz</p>
               <h3 className='mt-2 text-xl font-semibold ml-4'>Best Hotel Park</h3>
               <div className="flex items-center justify-between">
                   <p className='text-md pr-5 ml-4'>Rs 3200</p>
                   <div className="flex">
                       {[...Array(5)].map((_, i) => (
                           <FontAwesomeIcon key={i} icon={faStar} className="text-orange-500 mr-1" />
                       ))}
                   </div>
               </div>
           </Link>

           <Link to="/hotel-details" className='w-full md:w-72 min-h-80 bg-gray-100 rounded-t-2xl rounded-b-xl m-2 hover:scale-110'>
               <img src={CardImg} alt='cardImg' className='w-72 rounded-t-2xl' />
               <p className='text-sm text-green-500 mt-3 ml-4'>Ujjain xyz</p>
               <h3 className='mt-2 text-xl font-semibold ml-4'>Best Hotel Park</h3>
               <div className="flex items-center justify-between">
                   <p className='text-md pr-5 ml-4'>Rs 3200</p>
                   <div className="flex">
                       {[...Array(5)].map((_, i) => (
                           <FontAwesomeIcon key={i} icon={faStar} className="text-orange-500 mr-1" />
                       ))}
                   </div>
               </div>
           </Link>

           <Link to="/hotel-details" className='w-full md:w-72 min-h-80 bg-gray-100 rounded-t-2xl rounded-b-xl m-2 hover:scale-110'>
               <img src={CardImg} alt='cardImg' className='w-72 rounded-t-2xl' />
               <p className='text-sm text-green-500 mt-3 ml-4'>Ujjain xyz</p>
               <h3 className='mt-2 text-xl font-semibold ml-4'>Best Hotel Park</h3>
               <div className="flex items-center justify-between">
                   <p className='text-md pr-5 ml-4'>Rs 3200</p>
                   <div className="flex">
                       {[...Array(5)].map((_, i) => (
                           <FontAwesomeIcon key={i} icon={faStar} className="text-orange-500 mr-1" />
                       ))}
                   </div>
               </div>
           </Link>
        </div>
    );
};

export default Cards;