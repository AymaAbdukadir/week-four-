import React, { useState } from "react";
import axios from "axios";
import loginpic from "../assets/login-pic.png";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineHand } from "react-icons/hi";

function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userEmail === "" || userPassword === "") {
      return alert("Please fill all fields");
    }

    axios
      .post("http://localhost:8000/login", { userEmail, userPassword })
      .then((result) => {
        console.log(result);
        if (result.data === "success") {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='bg-amber-300 min-h-screen w-screen flex justify-center items-center p-4'>
      <div
        className='
        w-[60%] h-[60vh] bg-white rounded-lg flex
        max-md:w-[90%] max-md:h-auto max-md:flex-col
      '
      >
        {/* IMAGE SECTION */}
        <div
          className='
          bg-yellow-200 h-full w-[50%] flex items-center justify-center rounded-l-lg
          max-md:w-full max-md:h-[200px] max-md:rounded-t-lg max-md:rounded-l-none
        '
        >
          <img
            src={loginpic}
            alt=''
            className='w-[80%] max-md:w-[60%] max-sm:w-[70%] object-contain'
          />
        </div>

        <div
          className='
          h-full w-[50%] flex items-center justify-center
          max-md:w-full max-md:py-6 max-md:px-4
        '
        >
          <form onSubmit={handleSubmit} className='w-[70%] max-md:w-full'>
            <h1 className='text-2xl text-center text-amber-300 font-bold mb-2'>
              Login
            </h1>

            <div className='flex justify-center items-center gap-1 mb-6'>
              <p className='text-xl font-bold'>Welcome Back</p>
              <HiOutlineHand size={25} className='text-amber-500' />
            </div>

            <div className='flex flex-col gap-2 mb-3'>
              <label htmlFor='email'>Email</label>
              <input
                onChange={(e) => setUserEmail(e.target.value)}
                value={userEmail}
                type='email'
                id='email'
                placeholder='Enter your email'
                className='border-2 border-gray-200 rounded-sm p-2 outline-amber-200'
              />
            </div>

            <div className='flex flex-col gap-2 mb-4'>
              <label htmlFor='password'>Password</label>
              <input
                onChange={(e) => setUserPassword(e.target.value)}
                value={userPassword}
                type='password'
                id='password'
                placeholder='Enter your password'
                className='border-2 border-gray-200 rounded-sm p-2 outline-amber-200'
              />
            </div>

            <button
              type='submit'
              className='w-full h-10 bg-amber-300 text-white text-2xl rounded-sm mb-4 active:scale-95 transition'
            >
              Login
            </button>

            <p className='text-center'>
              Don’t have an account?
              <span className='text-amber-300 text-xl pl-2'>
                <Link to='/register'>Register</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
