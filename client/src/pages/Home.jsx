import { useState } from "react";
import { heroTitle, heroSubtitle } from "../data";
import FadeIn from "../components/FadeIn";
import { BsFillSearchHeartFill } from "react-icons/bs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ActNow from "../components/home/ActNow";
import Why from "../components/home/Why";

const Home = () => {
  const options = [
    "Hyderabad",
    "Bengalore",
    "Chennai",
    "New Delhi",
    "Mumbai",
    "Kolkata",
    "Ahmedabad",
    "Pune",
    "Surat",
    "Lucknow",
  ];
  const [query, setQuery] = useState("");

  return (
    <div>
      <div
        className="h-screen relative flex flex-col items-center"
        id="navbar"
        style={{
          background: "black",
        }}
      >
        <Navbar />

        <FadeIn delay={0.2} direction="down" padding fullWidth>
          <h1 className="mt-[200px] text-center text-5xl leading-tight xs:text-[64px] text-white max-w-[1050px]">
            {heroTitle}
          </h1>
        </FadeIn>
        <FadeIn delay={0.4} direction="down" padding fullWidth>
          <h5 className="mt-6 text-center text-lg xs:text-xl text-white max-w-[500px]">
            {heroSubtitle}
          </h5>
        </FadeIn>
        <FadeIn delay={0.2} direction="up" padding fullWidth>
          <div className="relative w-full xs:w-[460px] mt-11">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search City"
              className="w-full pl-6 pr-[68px] py-4 bg-[#fecaca] outline-none text-[#ef4444]
              text-base xs:text-lg placeholder-[#ef4444]"
            />
            {query && (
              <div className="absolute top-19 left-0 bg-white shadow-md  py-2  w-full pl-6 pr-[68px]">
                {options
                  .filter((option) =>
                    option.toLowerCase().includes(query.toLowerCase())
                  )
                  .map((option) => (
                    <div
                      className="px-4 hover:bg-gray-100 py-3 cursor-pointer"
                      key={option}
                    >
                      {option}
                    </div>
                  ))}
              </div>
            )}
            <BsFillSearchHeartFill className="absolute top-2/4 -translate-y-2/4 right-3 h-8 w-8 text-[#ef4444] cursor-pointer" />
          </div>
        </FadeIn>
      </div>
      <ActNow />
      <Why />
      <Footer />
    </div>
  );
};

export default Home;
