import React from "react";
import {
  BsGoogle,
  BsInstagram,
  BsYoutube,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import { RiArrowUpCircleFill } from "react-icons/ri";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <div className="contactus">
      <footer className="py-4 text-white bg-black">
        <div className="text-center">
          <div className="container mx-auto flex justify-center mt-6">
            <Link to="#">
              <BsYoutube
                className="text-white ml-4 mr-4 mb-4 hover:text-[#e7e5e4] cursor-pointer"
                size="2.2rem"
              />
            </Link>
            <Link to="#">
              <BsInstagram
                className="text-white ml-4 mr-4 mb-4 hover:text-[#e7e5e4] cursor-pointer"
                size="2rem"
              />
            </Link>
            <Link to="#">
              <BsTwitter
                className="text-white ml-4 mr-4 mb-4 hover:text-[#e7e5e4] cursor-pointer"
                size="2rem"
              />
            </Link>
            <Link to="#">
              <BsWhatsapp
                className="text-white ml-4 mr-4 mb-4 hover:text-[#e7e5e4] cursor-pointer"
                size="2rem"
              />
            </Link>
            <Link to="#">
              <BsGoogle
                className="text-white ml-4 mr-4 mb-4 hover:text-[#e7e5e4] cursor-pointer"
                size="2rem"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between text-white mb-6">
          <div className="text-center px-2 md:px-28 my-3">
            <p className="mb-2">Made with ❤️ by Pawrents</p>
          </div>

          <div className="text-center px-2 md:px-28 my-3">
            <Link
              to="navbar"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
            >
              <RiArrowUpCircleFill
                className="mb-2 text-white hover:text-[#e7e5e4] cursor-pointer"
                size="2.5rem"
              />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
