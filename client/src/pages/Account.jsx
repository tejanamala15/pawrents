import { UserContext } from "../UserContext";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { AiFillHome } from "react-icons/ai";
import { PiDogFill } from "react-icons/pi";
import { BsFillPersonVcardFill } from "react-icons/bs";
import Rehome from "./Rehome";
import { IoMdLogOut } from "react-icons/io";

export default function Account() {
  const [toHomePage, setToHomePage] = useState(null);
  const { ready, user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const { subpage } = useParams();

  if (!ready) {
    return "Loading...";
  }

  // if (ready && !user && !toHomePage) {
  //   return navigate("/signin");
  // }

  if (ready && !user) {
    return navigate("/signin");
  }

  async function signout() {
    await axios.post("/signout");
    setToHomePage("/");
    setUser(null);
  }

  function accountHandleClick() {
    navigate("/account");
  }

  function requestsHandleClick() {
    navigate("/account/requests");
  }

  function petsHandleClick() {
    navigate("/account/rehome");
  }

  if (toHomePage) {
    navigate(toHomePage);
  }

  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row justify-center md:gap-4 mt-20 mb-10">
        <nav className="flex mt-4 justify-center">
          <button
            className="rounded-sm font-bold px-4 py-2 bg-[#292524] hover:bg-[#6b7280] text-white mx-2 md:mx-4 gap-2 text-md lg:text-xl"
            onClick={petsHandleClick}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <AiFillHome className="mt-1" />
            Rehome
          </button>
          <button
            className="rounded-sm font-bold  px-4 py-2 bg-[#292524] hover:bg-[#6b7280] text-white mx-2 md:mx-4 gap-2 text-md lg:text-xl"
            onClick={requestsHandleClick}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <PiDogFill className="mt-1" />
            Requests
          </button>

          <button
            className="rounded-sm font-bold  px-4 py-2 bg-[#292524] hover:bg-[#6b7280] text-white mx-2 md:mx-4 gap-2 text-md lg:text-xl"
            onClick={accountHandleClick}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <BsFillPersonVcardFill className="mt-1" />
            Profile
          </button>
        </nav>
      </div>
      {subpage === undefined && (
        <div className="h-screen flex flex-col items-center text-md lg:text-xl">
          <p>Signed in as {user.name}</p>
          <p>({user.email})</p>

          <button
            className="rounded-full  font-semibold  sm:w-auto mb-10 mt-3 px-4 py-2 bg-[#dc2626] hover:bg-[#f87171]  text-white flex-shrink-0"
            onClick={signout}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <IoMdLogOut className="mt-1 mr-2" />
            Sign Out
          </button>
        </div>
      )}
      {subpage === "rehome" && (
        <div>
          <Rehome />
        </div>
      )}
      <Footer />
    </div>
  );
}
