import React, { useContext, useState } from "react";
// import Google from "../assets/google.svg";
import Formimg from "../assets/form.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  async function handleSigninSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post("/signin", { email, password });
      setUser(data);
      alert("Sign in successful");
      setRedirect(true);
    } catch (e) {
      alert("Sign in failed.");
    }
  }

  if (redirect) {
    return navigate("/");
  }

  function signuphandleClick() {
    navigate("/signup");
  }

  return (
    <div>
      <Navbar />
      <div className=" flex items-center justify-center mt-20 ">
        <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-md md:flex-row ">
          {/* Left side */}
          <div className="relative">
            <img
              src={Formimg}
              alt="img"
              className="w-[400px] h-full  rounded-l-md md:block object-cover"
            />
          </div>
          {/* Right side */}
          <div className="flex flex-col justify-center p-8 md:p-14 ">
            <span className="mb-3 text-2xl font-bold">Sign in</span>
            <span className="font-light text-gray-400 mb-8">
              welcome back, pawrent!
            </span>

            <form onSubmit={handleSigninSubmit}>
              <div className="pb-5">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded placeholder:text-gray-500"
                  name="email"
                  id="email"
                />
              </div>

              <div className="pb-5">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="pass"
                  id="pass"
                  className="w-full p-3 border border-gray-300 rounded placeholder:text-gray-500"
                />
              </div>
              <button className="w-full bg-black rounded-full text-white p-4 mb-6 hover:bg-[#292524]  ">
                Sign in
              </button>

              <div className="text-center text-gray-400">
                Don't have an account yet?
                <span className="font-bold text-black">
                  {" "}
                  <button onClick={signuphandleClick}>Sign up</button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
