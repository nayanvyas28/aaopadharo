import r1 from '../../images/rew1.png';
import r2 from '../../images/rew2.png';

function Review() {
    return (
        <div className="px-4 py-10 sm:px-10 md:px-16 lg:px-20 xl:px-32 py-10 sm:py-14 lg:py-20">
            <h1 className="font-bold text-customBrown text-2xl sm:text-3xl text-center">
                What our Customers Say?
            </h1>
            <div className="flex flex-col lg:flex-row lg:justify-center lg:items-start mt-8 sm:mt-12 lg:mt-16">
                <div className="my-6 sm:my-10 lg:my-14 w-full sm:w-4/5 md:w-2/3 lg:w-1/2 mx-auto lg:mx-10">
                    <img src={r1} alt="Customer Review 1" className="w-full h-auto" />
                </div>
                <div className="my-6 sm:my-10 lg:my-14 w-full sm:w-4/5 md:w-2/3 lg:w-1/2 mx-auto lg:mx-10">
                    <img src={r2} alt="Customer Review 2" className="w-full h-auto" />
                </div>
            </div>
        </div>
    );
}

export default Review;
