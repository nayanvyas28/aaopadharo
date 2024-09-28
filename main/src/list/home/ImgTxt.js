import image from '../../images/imgtxt.png';

function ImgTxt() {
  return (
    <div className="w-full flex justify-center mt-10 px-4 md:px-8 lg:px-16">
      <div className="w-full md:w-5/6 lg:w-4/5 xl:w-3/4 shadow-custom-dark rounded-lg overflow-hidden">
        <img src={image} alt="imageText" className="w-full h-auto object-cover" />
      </div>
    </div>
  );
}

export default ImgTxt;
