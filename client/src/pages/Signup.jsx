import React, { useState } from "react";
// import Google from "../assets/google.svg";
import Formimg from "../assets/form.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signupUser(e) {
    e.preventDefault();

    try {
      await axios.post("/signup", {
        name,
        email,
        password,
      });
      alert("Registration successful. Now you can sign in!");
    } catch (e) {
      alert("Registration failed. Please try again.");
    }
  }

  const navigate = useNavigate();
  function signinhandleClick() {
    navigate("/signin");
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
            <span className="mb-3 text-2xl font-bold">Sign up</span>
            <span className="font-light text-gray-400 mb-8">
              welcome to the pawrents community!
            </span>

            <form onSubmit={signupUser}>
              <div className="pb-5">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 border border-gray-300 rounded placeholder:text-gray-500"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="pb-5">
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded placeholder:text-gray-500"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="pb-5">
                <input
                  type="password"
                  placeholder="Password"
                  name="pass"
                  id="pass"
                  className="w-full p-3 border border-gray-300 rounded placeholder:text-gray-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="w-full bg-black rounded-full text-white p-4 mb-6 hover:bg-[#292524]  ">
                Sign up
              </button>

              <div className="text-center text-gray-400">
                Already have an account?
                <span className="font-bold text-black">
                  {" "}
                  <button onClick={signinhandleClick}>Sign in</button>
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
