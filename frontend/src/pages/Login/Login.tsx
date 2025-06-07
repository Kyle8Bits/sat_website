import React, { useState } from "react";
import Bg2 from '../../assets/photo/bg_2.png'

function Login() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="bg-transparent flex flex-col items-center justify-center min-h-screen">
     
      <div className="absolute inset-0 -z-1 flex flex-col">
        <img src={Bg2} alt="" className="w-full object-cover h-full" />
      </div>

      <div
        id="container"
        className={`relative w-full max-w-4xl min-h-[480px] bg-white rounded-[40px] shadow-lg overflow-hidden transition-all duration-600 ${
          isActive ? "active" : ""
        }`}
      >
        {/* Sign Up Form */}
        <div
          className={`sign-up absolute top-0 left-0 h-full w-1/2 transition-all duration-600 ${
            isActive ? "translate-x-full opacity-100 z-50" : "opacity-0 z-10"
          }`}
        >
          <form className="flex flex-col items-center justify-center h-full px-10">
            <h1 className="text-3xl font-bold mb-6">Create Account</h1>
            {/* social icons */}
            <div className="flex gap-3 mb-6">
              <a href="#" className="text-blue-600">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-pink-500">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-red-500">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="text-gray-700">
                <i className="fab fa-github"></i>
              </a>
            </div>
            <span className="text-sm mb-4">or use RMIT email for registration</span>
            <input
              type="text"
              placeholder="Name"
              className="mb-3 p-3 rounded-lg w-full bg-gray-100 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="mb-3 p-3 rounded-lg w-full bg-gray-100 outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="mb-3 p-3 rounded-lg w-full bg-gray-100 outline-none"
            />
            <button
              type="submit"
              className="mt-4 px-12 py-3 bg-[#C60000] border-2 border-[#C60000] hover:bg-white hover:border-black hover:text-black text-white rounded-lg uppercase tracking-wide font-semibold"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Sign In Form */}
        <div
          className={`sign-in absolute top-0 left-0 h-full w-1/2 bg-white transition-all duration-600 ${
            isActive
              ? "translate-x-full opacity-0 -z-10"
              : "translate-x-0 opacity-100 z-50"
          }`}
        >
          <form className="flex flex-col items-center justify-center h-full px-10">
            <h1 className="text-3xl font-bold mb-6">Sign In</h1>
            {/* social icons */}
            <div className="flex gap-3 mb-6">
              <a href="#" className="text-blue-600">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-pink-500">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-red-500">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="text-gray-700">
                <i className="fab fa-github"></i>
              </a>
            </div>
            <input
              type="email"
              placeholder="Email"
              className="mb-3 p-3 rounded-lg w-full bg-gray-100 outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="mb-3 p-3 rounded-lg w-full bg-gray-100 outline-none"
            />
            <a
              href="#"
              className="self-end mb-4 text-blue-600 hover:underline text-sm"
            >
              Forgot password?
            </a>
            <button
              type="submit"
              className="mt-4 px-12 py-3 bg-[#070758] border-2 border-[#070758] hover:bg-white hover:border-black hover:text-black text-white rounded-lg uppercase tracking-wide font-semibold"
            >
              Sign In
            </button>
          </form>
        </div>

        {/* Toggle Panel */}
        <div
          className={`toggle-container absolute top-0 left-1/2 w-1/2 h-full overflow-hidden rounded-[40px] z-50 transition-transform duration-600 ${
            isActive ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          <div className="toggle bg-[#C60000] text-white relative left-[-100%] w-[200%] h-full flex transition-transform duration-600 transform translate-x-0">
            {/* Left Panel */}
            <div
              className={`toggle-panel toggle-left w-1/2 h-full flex flex-col justify-center items-center px-8 text-center transition-transform duration-600 ${
                isActive ? "translate-x-[100%]" : "translate-x-0"
              }`}
            >
              <h1 className="text-4xl font-bold mb-4">Welcome SAT!</h1>
              <p className="mb-8">If you already have an account</p>
              <button
                onClick={() => setIsActive(false)}
                className="bg-transparent border border-white px-12 py-3 rounded-lg uppercase font-semibold tracking-wide hover:bg-white hover:text-[#C60000] transition"
              >
                Sign In
              </button>
            </div>

            {/* Right Panel */}
            <div
              className={`toggle-panel toggle-right bg-[#070758] w-1/2 h-full flex flex-col justify-center items-center px-8 text-center transition-transform duration-600 ${
                isActive ? "translate-x-[200%]" : "translate-x-0"
              }`}
            >
              <h1 className="text-4xl font-bold mb-4">Hello, SAT!</h1>
              <p className="mb-8">If you don't have an account</p>
              <button
                onClick={() => setIsActive(true)}
                className="bg-transparent border border-white px-12 py-3 rounded-lg uppercase font-semibold tracking-wide hover:bg-white hover:text-[#070758] transition"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
