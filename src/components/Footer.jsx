import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="flex flex-row justify-between bg-white p-[30px]">
      <div className="text-center text-purple-600 font-semibold mb-2 w-[30%]">
        <div className="w-10 h-10 bg-purple-600 inline-flex justify-center items-center rounded-full text-white mb-2"></div>
        CraftCorner
      </div>

      <div className="flex flex-row justify-between w-[70%]">
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
