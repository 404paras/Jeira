import React, { useState } from 'react';
import SignIn from '../components/frontend_components/SignIn';
import SignUp from '../components/frontend_components/SignUp';

const Auth = () => {
  const [signIn, setSignIn] = useState(true);
const  buttonClickHandler = ()=>{
  let val = signIn;
  setSignIn(!val);
}
  return (
    <div className="w-full flex flex-col min-h-screen bg-neutral-100">
  
      <nav className="w-full h-1/5 bg-neutral-100 flex justify-between items-center p-4">
        <div>Logo</div>
        <button
          className="px-4 py-2 h-1/6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-sm text-white font-bold hover:from-blue-600 hover:to-blue-700"
          onClick={ buttonClickHandler }
        >
          {signIn?"SignUp":"SignIn"}
        </button>
      </nav>

      <main className="w-full flex-1 flex justify-center items-center">
      {signIn ? (
          <SignIn buttonClickHandler={buttonClickHandler} />
        ) : (
          <SignUp buttonClickHandler={buttonClickHandler} />
        )}   </main>
    </div>
  );
};

export default Auth;

