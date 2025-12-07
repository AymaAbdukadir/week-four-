import React, { useState } from "react";
import loginpic from "../assets/lemon-register.png";
import { Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Register() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userName || !userEmail || !userPassword) {
      return toast.error("Please fill all fields", {
        style: {
          borderRadius: "10px",
          background: "#fff",
          color: "#000",
        },
      });
    }

    axios
      .post("http://localhost:8000/register", {
        userName,
        userEmail,
        userPassword,
      })
      .then(() => {
        toast.success("Registration successful!", {
          duration: 3000,
          style: {
            borderRadius: "10px",
            background: "#fff",
            color: "#000",
            fontSize: "16px",
          },
        });
      })
      .catch((err) => console.log(err));

    setUserName("");
    setUserEmail("");
    setUserPassword("");
  };

  return (
    <div className="bg-amber-300 min-h-screen w-screen flex justify-center items-center p-4">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="
        w-[60%] h-[60vh] bg-white rounded-lg flex
        max-md:w-[90%] max-md:h-auto max-md:flex-col
      ">
        
        {/* IMAGE SECTION */}
        <div className="
          bg-amber-200 h-full w-[50%] flex items-center justify-center rounded-l-lg
          max-md:w-full max-md:h-[200px] max-md:rounded-t-lg max-md:rounded-l-none
        ">
          <img
            src={loginpic}
            alt=""
            className="w-[80%] max-md:w-[60%] max-sm:w-[70%] object-contain"
          />
        </div>

        {/* FORM SECTION */}
        <div className="
          h-full w-[50%] flex items-center justify-center
          max-md:w-full max-md:py-6 max-md:px-4
        ">
          <form
            onSubmit={handleSubmit}
            className="w-[70%] max-md:w-full"
          >
            <h1 className="text-2xl text-center text-amber-300 font-bold mb-4">
              Create Account
            </h1>

            {/* NAME INPUT */}
            <div className="flex flex-col gap-2 mb-3">
              <label htmlFor="name">Name</label>
              <input
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
                type="text"
                id="name"
                placeholder="Enter your name"
                className="border-2 border-gray-200 rounded-sm p-2 outline-amber-200"
              />
            </div>

            {/* EMAIL INPUT */}
            <div className="flex flex-col gap-2 mb-3">
              <label htmlFor="email">Email</label>
              <input
                onChange={(e) => setUserEmail(e.target.value)}
                value={userEmail}
                type="email"
                id="email"
                placeholder="Enter your email"
                className="border-2 border-gray-200 rounded-sm p-2 outline-amber-200"
              />
            </div>

            {/* PASSWORD INPUT */}
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="password">Password</label>
              <input
                onChange={(e) => setUserPassword(e.target.value)}
                value={userPassword}
                type="password"
                id="password"
                placeholder="Enter your password"
                className="border-2 border-gray-200 rounded-sm p-2 outline-amber-200"
              />
            </div>

            {/* REGISTER BUTTON */}
            <button
              type="submit"
              className="w-full h-10 bg-amber-300 text-white text-xl rounded-sm mb-4 active:scale-95 transition"
            >
              Register
            </button>

            {/* LOGIN LINK */}
            <p className="text-center">
              Already have an Account?
              <span className="text-amber-300 text-xl font-bold pl-2">
                <Link to="/login">Login</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
