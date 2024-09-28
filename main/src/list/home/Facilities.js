import f1 from '../../images/f1.png';
import f2 from '../../images/f2.png';
import f3 from '../../images/f3.png';
import f4 from '../../images/f4.png';
import f5 from '../../images/f5.png';
import f6 from '../../images/f6.png';
import f7 from '../../images/f7.png';
import f8 from '../../images/f8.png';

function Facilities() {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <div className="h-full w-full flex flex-col lg:flex-row my-10 lg:my-40">
        {/* Left section */}
        <div className="lg:w-1/3 mx-4 lg:mx-10 my-3 pl-4 lg:pl-10">
          <h3 className="font-bold text-xl md:text-2xl">We do our best facilities</h3>
          <h3 className="font-bold text-xl md:text-2xl">provide you</h3>
          <p className="text-sm mt-4 md:mt-6">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic, or web designs. 
            The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled 
            parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
          </p>
          <button className="bg-customBrown text-white font-semibold h-10 w-28 md:w-36 rounded-lg mt-6 md:mt-10">
            Contact
          </button>
        </div>

        {/* Right section */}
        <div className="lg:w-1/2 flex flex-col">
          <div className="mx-5 md:mx-10 lg:mx-10 my-4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {/* Facility Items */}
            <div className="h-52 w-full border border-gray rounded-xl shadow-md">
              <img src={f1} alt='icon' className='w-16 h-12 mx-auto mt-10' />
              <p className='text-center pt-5 text-sm md:text-lg'>Private workspace</p>
            </div>
            <div className="h-52 w-full border border-gray rounded-xl shadow-md">
              <img src={f2} alt='icon' className='w-16 h-12 mx-auto mt-10' />
              <p className='text-center pt-5 text-sm md:text-lg'>Parking Area</p>
            </div>
            <div className="h-52 w-full border border-gray rounded-xl shadow-md">
              <img src={f3} alt='icon' className='w-16 h-12 mx-auto mt-10' />
              <p className='text-center pt-5 text-sm md:text-lg'>Breakfast</p>
            </div>
            <div className="h-52 w-full border border-gray rounded-xl shadow-md">
              <img src={f4} alt='icon' className='w-16 h-12 mx-auto mt-10' />
              <p className='text-center pt-5 text-sm md:text-lg'>Free Wifi</p>
            </div>
            <div className="h-52 w-full border border-gray rounded-xl shadow-md">
              <img src={f5} alt='icon' className='w-16 h-12 mx-auto mt-10' />
              <p className='text-center pt-5 text-sm md:text-lg'>Free Electricity</p>
            </div>
            <div className="h-52 w-full border border-gray rounded-xl shadow-md">
              <img src={f6} alt='icon' className='w-16 h-12 mx-auto mt-10' />
              <p className='text-center pt-5 text-sm md:text-lg'>Swimming Pool</p>
            </div>
            <div className="h-52 w-full border border-gray rounded-xl shadow-md">
              <img src={f7} alt='icon' className='w-16 h-12 mx-auto mt-10' />
              <p className='text-center pt-5 text-sm md:text-lg'>Exercise Space</p>
            </div>
            <div className="h-52 w-full border border-gray rounded-xl shadow-md">
              <img src={f8} alt='icon' className='w-16 h-12 mx-auto mt-10' />
              <p className='text-center pt-5 text-sm md:text-lg'>Other Services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facilities;
