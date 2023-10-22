import { useContext, useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { UserContext } from "../UserContext";
import { Link } from "react-scroll";

const Navbar = () => {
  const { user } = useContext(UserContext);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();
  function handleClick() {
    navigate("/rehome");
  }

  function homehandleClick() {
    navigate("/");
  }

  function aboutushandleClick() {
    navigate("/aboutus");
  }

  function signinhandleClick() {
    navigate(user ? "/account" : "/signin");
  }

  return (
    <div className="flex flex-col items-center" id="navbar">
      <div className="flex w-full justify-between items-center h-20 px-8 absolute z-10 text-white backdrop-blur-none bg-black">
        <button onClick={homehandleClick}>
          {" "}
          <h1 className="text-2xl font-extrabold"> PAWRENTS</h1>
        </button>
        <ul className="hidden md:flex lg:gap-[40px]">
          <button
            className="text-lg lg:text-xl text-white cursor-pointer hover:text-white hover:bg-clip-text hover:text-transparent"
            onClick={aboutushandleClick}
          >
            About Us
          </button>
          {/* <button
            className="text-lg lg:text-xl text-white cursor-pointer hover:text-white hover:bg-clip-text hover:text-transparent"
            onClick={handleClick}
          >
            Rehome
          </button> */}

          <button className="text-lg lg:text-xl text-white cursor-pointer hover:text-white hover:bg-clip-text hover:text-transparent">
            <Link
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
              to="contactus"
            >
              Contact Us
            </Link>
          </button>
          <button
            className="border rounded-full px-4 py-2 items-center gap-2 text-lg lg:text-xl text-white cursor-pointer hover:text-white hover:bg-clip-text hover:text-transparent"
            onClick={signinhandleClick}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <BsFillPersonFill />
            {!!user && <div className="ml-2">{user.name}</div>}
            {/* Sign in */}
          </button>
        </ul>

        <HiMenuAlt1
          size={30}
          className="block md:hidden cursor-pointer text-white"
          onClick={() => setShowMobileMenu((prev) => !prev)}
        />

        <div
          className={`block md:hidden w-full fixed ${
            !showMobileMenu ? "-top-[410px]" : "top-0"
          } left-0 bg-[#f4f4f5] h-[410px] transition-all duration-[800ms] shadow-xl z-0 py-8 px-12 rounded-b-xl`}
        >
          <AiOutlineClose
            size={25}
            className="absolute top-5 right-5 text-black cursor-pointer"
            onClick={() => setShowMobileMenu(false)}
          />

          <ul className="pt-[60px] items-center flex flex-col gap-8">
            <button
              className="text-lg text-black hover:text-black cursor-pointer w-full text-center"
              mobileMenu
              onClick={aboutushandleClick}
            >
              About Us
            </button>
            {/* <button
              onClick={handleClick}
              className="text-lg text-black hover:text-black cursor-pointer w-full text-center"
              mobileMenu
            >
              Rehome
            </button> */}

            <button
              className="text-lg text-black hover:text-black cursor-pointer w-full text-center"
              mobileMenu
            >
              <Link to="contactus">Contact Us</Link>
            </button>

            <button
              className="border border-black rounded-full px-6 py-2 flex items-center text-lg text-black hover:text-black cursor-pointer"
              mobileMenu
              onClick={signinhandleClick}
            >
              <BsFillPersonFill />
              {!!user && <div className="ml-2">{user.name}</div>}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
