import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
const SignUp = ({ buttonClickHandler }) => {
  const [userInfo, setUserInfo] = useState({ name: "", email: "", password: "" });

  const signUpHandler = async(e) => {
    e.preventDefault();
    console.log(userInfo);
    alert("clicked")
    try {
      console.log('singup')
    
    } 
    catch (error) {
      console.log(error)
    }

  };

  return (
    <div className="h-full w-full flex justify-center items-center rounded-sm">
      <div className="lg:w-2/5 sm:w-4/5 h-2/3 bg-white flex flex-col justify-center items-center">
        <h1 className="lg:text-3xl sm:text-xl font-bold py-4 my-4">Welcome</h1>
        <div className="border-b-2 border-gray-300 mb-4"></div>
        <form className="w-full flex justify-center items-center" onSubmit={signUpHandler}>
          <div className="w-4/5 h-1/2 flex flex-col justify-between">
            <input
              className="w-full h-1/6 border-2 p-4 my-4 rounded-sm border-gray-300 outline-none"
              type="text"
              placeholder="Enter your name"
              value={userInfo.name}
              onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
            />
            <input
              className="w-full h-1/6 border-2 p-4 my-4 rounded-sm border-gray-300 outline-none"
              type="email"
              placeholder="Enter email address"
              value={userInfo.email}
              onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
            />
            <input
              className="w-full h-1/6 border-2 p-4 my-4 rounded-sm border-gray-300 outline-none"
              type="password"
              placeholder="Enter password"
              value={userInfo.password}
              onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
            />
            <button
              type="submit"
              className="w-full h-1/6 bg-gradient-to-r from-blue-500 to-blue-600 p-4 my-8 mb-10 rounded-sm text-white font-bold hover:from-blue-600 hover:to-blue-700"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="border-b-2 border-gray-300 mb-4"></div>
        <div className="text-center text-gray-600 px-4">
          By signing up, you agree to our{" "}
          <Link to="/privacy" className="text-blue-500 hover:text-blue-400 font-bold">
            Privacy Policy
          </Link>{" "}
          &{" "}
          <Link to="/termsConditions" className="text-blue-500 hover:text-blue-400 font-bold">
            Terms & Conditions
          </Link>.
        </div>
        <div className="mb-8"></div>
      </div>
    </div>
  );
};

export default SignUp;
