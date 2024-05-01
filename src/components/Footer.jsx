import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import logo from "../assets/Logo.svg";

const Footer = () => {
  return (
    <div className="flex flex-row justify-between bg-white p-[30px] sm:flex-col sm:align-middle">
      <div className="text-center flex align-middle items-center justify-center text-purple-600 font-semibold mb-2 w-[30%] sm:mb-[20px]">
        <img
          src={logo}
          alt="church logo"
          className="w-[40px] sm:w-full h-[40px]"
        />
        <h2>CraftCorner</h2>
      </div>

      <div className="flex flex-row justify-between w-[70%] sm:w-full sm:flex-wrap">
        <div className="flex flex-col">
          <span className="font-bold text-gray-700 uppercase mb-2">
            Our link
          </span>
          <span className="my-2">
            <Link
              to="/shop"
              className="text-purple-600 text-md hover:text-purple-500"
            >
              Shop
            </Link>
          </span>
          <span className="my-2">
            <Link
              to="/about"
              className="text-purple-600 text-md hover:text-purple-500"
            >
              About Us
            </Link>
          </span>
          <span className="my-2">
            <Link
              to="/community"
              className="text-purple-600 text-md hover:text-purple-500"
            >
              Community
            </Link>
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
            Privacy
          </span>
          <span className="my-2">
            <Link
              to="/faq"
              className="text-purple-600 text-md hover:text-purple-500"
            >
              FAQ
            </Link>
          </span>
          <span className="my-2">
            <Link
              to="/privacy"
              className="text-purple-600 text-md hover:text-purple-500"
            >
              Privacy Terms
            </Link>
          </span>
          <span className="my-2">
            <Link
              to="/terms"
              className="text-purple-600 text-md hover:text-purple-500"
            >
              Terms & Conditions
            </Link>
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
            Social Media
          </span>
          <div className="flex mt-2">
            <SocialIcon
              url="https://linkedin.com"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://facebook.com"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://twitter.com"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
