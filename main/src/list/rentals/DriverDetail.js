import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import { useNavigate } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import driverImg from "../../images/driverImg.png";

const DriverDetail = () => {
  const navigate = useNavigate();

  const navigateToAbout = () => {
    navigate("/discover");
  };
  const navigateToAbout1 = () => {
    navigate("/blog");
  };
  const navigateToAbout2 = () => {
    navigate("/home");
  };
  const navigateToAbout4 = () => {
    navigate("/login");
  };
  const navigateToAboutPickUp = () => {
    navigate("/yourInfo");
  };
  const navigateToAboutBookingConfirm = () => {
    navigate("/cabConfirm");
  };

  return (
    <>
      <Navbar
        navigateToAbout={navigateToAbout}
        navigateToAbout1={navigateToAbout1}
        navigateToAbout2={navigateToAbout2}
        navigateToAbout4={navigateToAbout4}
      />
      
      {/* Main container */}
      <div className="mx-4 md:mx-6 lg:mx-28 my-10 p-4 md:p-6 lg:p-10 bg-white rounded-2xl shadow-2xl shadow-slate-500 flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-6 lg:space-x-10">
        
        {/* Progress section */}
        <div className="lg:ml-28 h-auto lg:h-400 w-full lg:w-1/3 mt-8 bg-customCream rounded-2xl">
          <h1 className="text-xl font-medium pl-10 pt-6">Data Collection</h1>
          <p className="text-gray-500 pl-10 pr-4 pt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
          </p>
          <div className="flex">
            <div>
              <div className="h-10 w-10 mt-4 ml-10 bg-yellow-500 rounded-full flex items-center justify-center">
                <CheckIcon style={{ fontSize: "2rem", color: "white" }} />
              </div>
              <div className="h-12 w-1 mt-1 ml-14 bg-yellow-500"></div>
              <div className="h-10 w-10 mt-1 ml-10 bg-yellow-500 rounded-full flex items-center justify-center">
                <CheckIcon style={{ fontSize: "2rem", color: "white" }} />
              </div>
              <div className="h-10 w-1 ml-14 mt-1 bg-yellow-500"></div>
              <div className="h-10 w-10 mt-1 ml-10 pt-1 bg-gray-400 rounded-full">
                <span className="text-white text-2xl pl-3 font-bold">3</span>
              </div>
            </div>
            <div>
              <p className="pl-16 pt-8 text-lg">PickUp Details</p>
              <p className="pl-16 pt-16 text-lg">Driver</p>
              <p className="pl-16 pt-14 text-lg">Confirm</p>
            </div>
          </div>
        </div>
        
        {/* Image and form container */}
        <div className="flex flex-col lg:flex-row justify-center lg:justify-start lg:space-x-10">
          
          {/* Driver Image */}
          <div className="bg-customSkin h-56 w-56 md:h-72 md:w-72 rounded-2xl mt-8 lg:mt-20 lg:mr-6">
            <img
              src={driverImg}
              alt="driverimage"
              className="h-full w-full object-cover rounded-2xl"
            />
          </div>
          
          {/* Form Section */}
          <div>
            <form className="mt-4 md:mt-12 lg:mt-20">
              <div className="min-w-60 md:w-full lg:w-96 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-lg font-semibold mb-2">
                  Driver Name
                </label>
                <input
                  className="appearance-none block w-full bg-transparent border-b-2 border-gray-300 text-gray-700 py-2 px-4 leading-tight focus:outline-none focus:border-black"
                  type="text"
                  placeholder="John Doe"
                />
              </div>
              <div className="min-w-60 md:w-full lg:w-96 px-3 mt-7">
                <label className="block uppercase tracking-wide text-gray-700 text-lg font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  className="appearance-none block w-full bg-transparent border-b-2 border-gray-300 text-gray-700 py-2 px-4 leading-tight focus:outline-none focus:border-black"
                  type="tel"
                  placeholder="+91 1234567890"
                />
              </div>
              <div className="min-w-60 md:w-full lg:w-96 px-3 mb-6 md:mb-0 mt-7">
                <label className="block uppercase tracking-wide text-gray-700 text-lg font-semibold mb-2">
                  Verification
                </label>
                <input
                  className="appearance-none block w-full bg-transparent border-b-2 border-gray-300 text-gray-700 py-2 px-4 leading-tight focus:outline-none focus:border-black"
                  type="text"
                  placeholder="ID used for verification"
                />
              </div>
            </form>
            
            {/* Buttons */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 mt-10 md:mt-14">
              <button
                className="bg-gray-300 hover:bg-gray-500 text-white py-2 px-4 rounded w-36 text-xl mx-auto md:mx-0"
                type="submit"
                onClick={navigateToAboutPickUp}
              >
                Back
              </button>
              <button
                className="bg-customPeach hover:bg-red-500 text-white py-2 px-4 rounded w-36 text-xl mx-auto md:mx-0"
                type="reset"
                onClick={navigateToAboutBookingConfirm}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer navigateToAbout2={navigateToAbout2} />
    </>
  );
};

export default DriverDetail;
