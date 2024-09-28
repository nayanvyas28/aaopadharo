import React from "react";
import { Link } from 'react-router-dom';
import blog1 from "../../images/blog1.png";
import blog2 from "../../images/blog2.png";
import blog3 from "../../images/blog3.png";
import blog4 from "../../images/blog4.png";
import blog5 from "../../images/blog5.png";
import blog6 from "../../images/blog6.png";
import blog11 from "../../images/blog11.png";
import blog12 from "../../images/blog12.png";

const AllBlog = () => {
  return (
    <>
      <h1 className="font-semibold text-2xl mx-4 lg:mx-36 mt-8">Recent Blog Posts</h1>
      <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0 mt-10 mx-4 lg:mx-36">
        <Link to='/postdetails' className="lg:w-1/3">
          <img src={blog11} alt="blogImage" className="w-full rounded-md shadow-md" />
          <p className="font-bold text-purple-600 pt-3">Name 1 Jan 2023</p>
          <h1 className="font-bold text-xl pt-3">Ujjain</h1>
          <p className="text-gray-500 pt-3">
            Like to know the secrets of transforming a 2-14 team into a 3x Super
            Bowl winning Dynasty?
          </p>
        </Link>
        <Link to='/postdetails' className="flex flex-col lg:flex-row lg:w-2/3 space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="lg:w-1/2">
            <img src={blog12} alt="blogImage" className="w-full h-60 md:h-80 object-cover rounded-md shadow-md" />
          </div>
          <div className="lg:w-1/2">
            <p className="font-bold text-purple-600 pt-3">Name 1 Jan 2023</p>
            <h1 className="font-bold text-xl pt-3">Bill Walsh leadership lessons</h1>
            <p className="text-gray-500 pt-3">
              Like to know the secrets of transforming a 2-14 team into a 3x
              Super Bowl winning Dynasty?
            </p>
            <div className="flex pt-3 space-x-3">
              <button className="bg-purple-100 w-28 text-purple-500 h-8 rounded-full font-semibold">
                Design
              </button>
              <button className="bg-pink-100 text-pink-700 w-28 rounded-full h-8 font-semibold">
                Research
              </button>
            </div>
          </div>
        </Link>
      </div>

      <h1 className="font-semibold text-2xl mx-4 lg:mx-36 mt-10">All Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mt-10 mx-4 lg:mx-36">
        {[blog1, blog2, blog3, blog4, blog5, blog6].map((blog, index) => (
          <Link to='/postdetails' key={index} className="flex flex-col space-y-3">
            <img src={blog} alt={`blogImage${index + 1}`} className="w-full rounded-md shadow-md" />
            <p className="font-bold text-purple-600">Name 1 Jan 2023</p>
            <h1 className="font-bold text-xl">Bill Walsh leadership lessons</h1>
            <p className="text-gray-500">
              Like to know the secrets of transforming a 2-14 team into a 3x
              Super Bowl winning Dynasty?
            </p>
            <div className="flex pt-3 space-x-3 flex-wrap">
              <button className="bg-purple-100 min-w-28 text-purple-500 h-8 rounded-full font-semibold">
                Design
              </button>
              <button className="bg-gray-100 text-gray-700 min-w-28 h-8 rounded-full font-semibold">
                Research
              </button>
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-slate-200 w-5/6 mx-auto h-px mt-10"></div>
      <div className="flex justify-evenly mt-5">
        <div>
          <p className="text-gray-500">Previous</p>
        </div>
        <div>
          <p className="text-gray-500">1 2 3 ... 8 9</p>
        </div>
        <div>
          <p className="text-gray-500">Next</p>
        </div>
      </div>
    </>
  );
};

export default AllBlog;
