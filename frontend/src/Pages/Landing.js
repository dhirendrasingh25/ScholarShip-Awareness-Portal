import React, { useState } from "react";
import LandingSvg from "../assets/landing.svg";
import Saly from "../assets/Saly.png";
import Logo from "../assets/Logo.jpeg";
// import a right arrow from fontawesome


function Landing() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  return (
    <div>
      <div className="flex bg-[#f6f6f6] w-screen h-screen flex-col">
        <div className="flex flex-row border-b drop-shadow-lg justify-between bg-[#F4F4F4] px-6 pt-6 pb-3 items-center">
          <div className="flex flex-row items-center">
            <img
              src={Logo}
              alt="landingSvg"
              className="rounded-full mr-2 w-10 h-10"
            />
            <span>ScholarMate</span>
          </div>
          <div className="mx-4">
            <div className="relative">
              <button
                className="px-5 py-3 rounded bg-[#010080] text-white mx-2"
                onClick={() => setIsSignUpOpen(!isSignUpOpen)}
              >
                Sign Up
              </button>
              {isSignUpOpen && (
                <div className="flex absolute flex-col border rounded bg-[#F4F4F4] m-2 px-2 py-3">
                  <button className="p-2">Student Sign Up</button>
                  <button className="p-2 border-t">Company Sign Up</button>
                </div>
              )}
              <button
                className="px-7 py-3 rounded bg-[#010080] text-white mx-2"
                onClick={() => setIsLoginOpen(!isLoginOpen)}
              >
                Login
              </button>
              {isLoginOpen && (
                <div className="flex absolute flex-col border rounded bg-[#F4F4F4] m-2 px-2 py-3">
                  <button className="p-2">Student Login</button>
                  <button className="p-2 border-t">Company Login</button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col mt-6 items-center ">
            <div className="lg:text-[50px] w-[80%] text-center ">
              <span className="font-bold bg-gradient-to-r from-sky-400 to-emerald-500 bg-clip-text text-transparent">
                Get the Best Scholarship Curated Specially for your needs with{" "}
              </span>
              <span className="font-bold bg-gradient-to-br from-indigo-600 to-sky-400 bg-clip-text text-transparent">
                ScholarMate.
              </span>
            </div>
            <img src={Saly} alt="landingSvg" className="w-[30%] h-[30%]" />
            <button className="bg-[#010080] flex flex-row items-center px-6 py-4 rounded-full text-2xl text-white font-medium">
              <div>Get Started</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="w-6 h-6 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
            {/* use the imported arrow over here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
