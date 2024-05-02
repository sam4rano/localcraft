import { Link } from "react-router-dom";
import heroImg from "../assets/heroimg.png";

const HeroSection = () => {
  return (
    <div className="bg-purple-600 flex flex-row  sm:flex-col md:justify-between items-center p-8 h-screen">
      <div className="text-white space-y-4 mb-4 md:mb-0 w-[60%] sm:w-full sm:mx-auto sm:flex sm:items-center sm:justify-center sm:align-middle sm:flex-col">
        <h1 className="text-3xl font-bold sm:text-center">
          Discover Unique Handcrafted Creations at CraftCorner
        </h1>
        <p className="max-w-md text-lg sm:text-center">
          Explore a world of creativity and talent from local artisans
        </p>
        <Link to="/shop" className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 ">
          Shop Now
        </Link>
      </div>
      <div className="flex flex-col items-center md:items-end w-[40%] sm:w-full">
        <div className="max-w-xs md:max-w-sm lg:max-w-md">
          <img
            src={heroImg}
            alt="Black beauty painting"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="text-white flex flex-col p-[10px] justify-between sm:w-full gap-[10px]">
          <h2 className="text-lg font-semibold text-right sm:text-left">Black beauty painting</h2>
          <div className="flex flex-row justify-between gap-5 items-center">
            <p className="text-lg">$200</p>
            <button className="bg-black p-[5px] text-white px-4 rounded hover:bg-gray-800">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
