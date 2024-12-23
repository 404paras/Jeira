import React, { useState } from 'react';

const SignIn = ({ buttonClickHandler }) => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  const signInHandler = (e) => {
    e.preventDefault();
    console.log(userInfo);
  };

  return (
    <div className="h-full w-full flex justify-center items-center rounded-sm">
      <div className="lg:w-2/5 sm:w-4/5 h-2/3 bg-white flex flex-col justify-center items-center">
        <h1 className="lg:text-3xl sm:text-xl font-bold py-4 my-4">Welcome Back</h1>
        <div className="border-b-2 border-gray-300 mb-4"></div>
        <form className="w-full flex justify-center items-center" onSubmit={signInHandler}>
          <div className="w-4/5 h-1/2 flex flex-col justify-between">
            <input
              className="w-full h-1/6 border-2 p-4 my-4 rounded-sm border-gray-300 outline-none"
              type="text"
              placeholder="Enter email address"
              value={userInfo.name}
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
              Sign In
            </button>
          </div>
        </form>
        <div className="border-b-2 border-gray-300 mb-8"></div>
        <div>
          Don't have an account?{" "}
          <span
            onClick={buttonClickHandler}
            className="text-blue-500 hover:text-blue-400 cursor-pointer font-bold"
          >
            Sign Up
          </span>
        </div>
        <div className="mb-8"></div>
      </div>
    </div>
  );
};

export default SignIn;
