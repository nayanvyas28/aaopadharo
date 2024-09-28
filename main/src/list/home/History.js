import hisimg from "../../images/Historyimg.png";

const History = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center p-4 md:p-8">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-4 md:mb-0">
          <img src={hisimg} alt="History" className="w-3/4 md:w-full " />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-2">
          <p className="text-sm font-semibold">AaoPadharo</p>
          <h1 className="text-2xl md:text-3xl font-bold text-customLigthBrown">
            Your Gateway to Ujjain's Comfort
          </h1>
          <h1 className="text-2xl md:text-3xl font-bold text-customLigthBrown">
            and Culture
          </h1>
          <p className="text-base md:text-lg leading-relaxed">
            At AaoPadharo, we are committed to connecting travelers with the
            best that Ujjain has to offer. At AaoPadharo, we are committed to
            connecting travelers with the best that Ujjain has to offer. At
            AaoPadharo, we are committed to connecting travelers with the best
            that Ujjain has to offer. At AaoPadharo, we are committed to
            connecting travelers with the best that Ujjain has to offer. At
            AaoPadharo, we are committed to connecting travelers with the best
            that Ujjain has to offer.
          </p>
          <div className="relative w-full h-96 pt-10 sm:pt-14 md:pt-20 lg:pt-28">
            {/* Horizontal Line */}
            <div className="absolute w-5/6 sm:w-4/5 md:w-3/4 h-0.5 bg-gray-200 top-1/2 transform -translate-y-1/2 ml-5 md:ml-16 mt-4 sm:mt-8 lg:mt-10"></div>

            {/* Vertical Line */}
            <div className="absolute h-full w-0.5 bg-gray-200 left-1/2 transform -translate-x-1/2"></div>

            {/* Holiday Package */}
            <div className="absolute transform -translate-x-1/2 -translate-y-1/2 mt-20 sm:mt-24 md:mt-28 lg:mt-12 ml-10 sm:ml-16 md:ml-32 text-center">
              <h1 className="text-customLigthBrown font-bold text-3xl sm:text-4xl lg:text-5xl">
                100+
              </h1>
              <p className="text-lg sm:text-xl font-medium pt-4 sm:pt-5 lg:pt-7">
                Holiday Package
              </p>
            </div>

            {/* Hotels */}
            <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 mt-20 sm:mt-24 md:mt-36 mr-10 sm:mr-28 md:mr-56 text-center">
              <h1 className="text-customLigthBrown font-bold text-3xl sm:text-4xl lg:text-5xl">
                201+
              </h1>
              <p className="text-lg sm:text-xl font-medium pt-4 sm:pt-5 lg:pt-7">
                Hotels
              </p>
            </div>

            {/* Rental Services */}
            <div className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 ml-10 sm:ml-16 md:ml-28 lg:ml-32 mb-10 sm:mb-16 text-center">
              <h1 className="text-customLigthBrown font-bold text-3xl sm:text-4xl lg:text-5xl">
                15+
              </h1>
              <p className="text-lg sm:text-xl font-medium pt-4 sm:pt-5 lg:pt-7">
                Rental Services
              </p>
            </div>

            {/* Satisfied Travelers */}
            <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 mr-10 sm:mr-28 md:mr-56 mb-10 sm:mb-16 text-center">
              <h1 className="text-customLigthBrown font-bold text-3xl sm:text-4xl lg:text-5xl">
                120M+
              </h1>
              <p className="text-lg sm:text-xl font-medium pt-4 sm:pt-5 lg:pt-7">
                Satisfied Travelers
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
