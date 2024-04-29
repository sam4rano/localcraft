import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt3, HiOutlineX, HiOutlineUser } from "react-icons/hi";
import logo from "../assets/Logo.svg";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const navData = [
    {
      id: 1,
      title: "Home",
      alt: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Shop",
      alt: "shop",
      link: "/shop",
    },
    {
      id: 3,
      title: "community",
      alt: "community",
      link: "/community",
    },
    {
      id: 4,
      title: "about us",
      alt: "about us",
      link: "/aboutus",
    },
  ];

  const handleToggleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <div className="flex flex-row text-dark  font-bold justify-between px-[10px] bg-white p-[10px]">
      <Link to="/" className="flex flex-row">
        <img
          src={logo}
          alt="church logo"
          className="w-[40px] sm:w-full h-[40px]"
        />
        <div className="flex items-center flex-shrink-0 text-black mr-2">
          <span className="font-semibold text-xl tracking-tight">
            CraftCorner
          </span>
        </div>
      </Link>
      <div className=" flex justify-end align-middle items-center">
        <HiMenuAlt3
          onClick={handleToggleNavbar}
          size={30}
          className={`text-black cursor-pointer ${
            navbar ? "hidden " : "lg:hidden"
          }`}
          color={"white"}
        />

        <HiOutlineX
          onClick={handleToggleNavbar}
          size={30}
          className={`text-black cursor-pointer absolute top-[10px] right-[5px] md:right-[30px] ${
            navbar ? "block" : "hidden"
          }`}
          color={"white"}
        />
      </div>

      <ul
        className={`lg:flex lg:flex-row sm:w-full md:w-full md:p-[5px] sm:p-[10px] sm:justify-start sm:items-start md:justify-start md:items-start sm:bg-orange-400 md:bg-orange-400 sm:mt-[50px] md:mt-[30px] rounded-[10px] ${
          navbar
            ? "sm:flex sm:flex-col md:flex md:flex-col lg:flex-row md:mr-[50px]"
            : "hidden lg:flex"
        } justify-between flex-row items-center`}
      >
        {navData.map((data) => (
          <li key={data.id} className="px-[5px] flex">
            <NavLink to={data.link}>
              {({ isActive }) => (
                <>
                  <div
                    className={` ${
                      isActive
                        ? "rounded-[8px] border p-[4px] text-slate-900"
                        : "text-black"
                    } text-black`}
                  >
                    <span className={isActive ? "active" : ""}>
                      {data.title}
                    </span>
                  </div>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>

      <Link
        to="/login"
        className="flex justify-center rounded-[8px] items-center text-slate-900 bg-black w-[90px] h-[40px] hover:bg-slate-700"
      >
		<HiOutlineUser size={25} className="" color={"white"} />
        <button type="button" className="text-white">
          login
        </button>
        
      </Link>
    </div>
  );
};

export default Navbar;
