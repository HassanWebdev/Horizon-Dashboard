'use client'
import React, { useState } from "react";
import { IoMoonSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";
function Signin() {
    const[eyeopen,setEyeopen]=useState(false)
  return (
    <div className="w-full relative bg-white h-auto ">
      <div className="w-[60vw] bg-[#1418F4] h-[100vh] rounded-bl-[23rem] translate-x-[67.5rem]">
        <div className="-translate-x-[9%] translate-y-[18%] flex justify-center items-center flex-col">
          <div className="w-[20rem] bg-white rounded-full h-[20rem] mb-10 flex justify-center items-center">
            <IoMoonSharp className="text-[#404CFF] text-[12rem] rotate-[135deg]" />
          </div>
          <h1 className="text-white text-[5rem] font-semibold leading-none mb-20">
            Horizon
          </h1>
          <div className="w-[33rem] border-1 border-gray-400 rounded-3xl text-center py-5">
            <p className="text-gray-400 text-2xl">
              Learn more about Horizon UI on
            </p>
            <h1 className="text-[2.7rem]  text-white font-semibold">
              horizon-ui.com
            </h1>
          </div>
        </div>
      </div>
      <div className="w-[45rem] absolute top-16 left-32 ">
        <div className="w-full text-gray-400 mb-32 ">
          <Link href="/" className="flex gap-2 items-center w-max ">
            <RiArrowDropDownLine className="text-6xl   rotate-[90deg]" />
            <p className="text-2xl">Back to simmmple</p>
          </Link>
        </div>
        <div>
          <h1 className="text-[3.5rem] leading-none text-[#1A254A] font-bold">
            Sign In
          </h1>
          <h1 className="text-gray-400 text-3xl pt-4">
            Enter your email and password to sign in!
          </h1>
          <button className="mt-16 mb-10 py-5 rounded-3xl text-3xl w-full transition-all bg-[#F5F7FF] hover:bg-gray-200  flex items-center justify-center">
            <svg
              className="mr-4"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 48 48"
              enable-background="new 0 0 48 48"
              focusable="false"
              class="chakra-icon css-hxdg3j"
              height="1.5em"
              width="1.5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>{" "}
            Sign in with Google
          </button>
          <div className="flex justify-center items-center opacity-20 mb-16">
            <div className="h-[1.2px] bg-gray-800 flex-grow-[1]"></div>
            <div className="flex justify-center items-center px-3 text-2xl">
              {" "}
              or
            </div>
            <div className="h-[1.2px] flex-grow-[1] bg-gray-800"></div>
          </div>
          <div id="input">
            <label htmlFor="email" className="text-3xl">
              Email
            </label>
            <br />
            <input
              id="email"
              type="text"
              placeholder="mail@sammmple.com"
              className="w-full py-5 mt-2 mb-7 pl-6 text-2xl outline-none border-gray border-1  rounded-3xl"
            />
            <label htmlFor="Password" className="text-3xl">
              Password
            </label>
            <br />
            <div className="relative">
                <input
              id="Password"
              type={eyeopen ? "text" : "password"}
              placeholder="Min.8 characters"
              className=" w-full py-5 mt-2 mb-10 pl-6 pr-16  text-2xl outline-none border-gray border-1  rounded-3xl"
            />
            <div className="absolute top-7 -translate-x-[3.5rem] cursor-pointer  left-full  px-2 py-3" onClick={()=>setEyeopen(!eyeopen)}>
              {eyeopen ? (
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  focusable="false"
                  class="chakra-icon css-1cvluau"
                  height="1.4em"
                  width="1.4em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M12 6.5a9.77 9.77 0 018.82 5.5c-1.65 3.37-5.02 5.5-8.82 5.5S4.83 15.37 3.18 12A9.77 9.77 0 0112 6.5m0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 5a2.5 2.5 0 010 5 2.5 2.5 0 010-5m0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5z"></path>
                </svg>
              ) : (
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  focusable="false"
                  class="chakra-icon css-1cvluau"
                  height="1.4em"
                  width="1.4em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.34268 18.7819L7.41083 18.2642L8.1983 15.3254C7.00919 14.8874 5.91661 14.2498 4.96116 13.4534L2.80783 15.6067L1.39362 14.1925L3.54695 12.0392C2.35581 10.6103 1.52014 8.87466 1.17578 6.96818L3.14386 6.61035C3.90289 10.8126 7.57931 14.0001 12.0002 14.0001C16.4211 14.0001 20.0976 10.8126 20.8566 6.61035L22.8247 6.96818C22.4803 8.87466 21.6446 10.6103 20.4535 12.0392L22.6068 14.1925L21.1926 15.6067L19.0393 13.4534C18.0838 14.2498 16.9912 14.8874 15.8021 15.3254L16.5896 18.2642L14.6578 18.7819L13.87 15.8418C13.2623 15.9459 12.6376 16.0001 12.0002 16.0001C11.3629 16.0001 10.7381 15.9459 10.1305 15.8418L9.34268 18.7819Z"></path>
                </svg>
              )}
            </div>
            </div>
           

            <div className="w-full flex justify-between items-center mb-10">
              <div className="flex gap-4 items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-6 w-6 text-[#432AFA] rounded-md border-2 border-gray-300 focus:ring-0 focus:ring-offset-0"
                />
                <label htmlFor="remember" className="text-2xl">
                  Keep me logged in
                </label>
              </div>
              <div className="text-2xl text-primary-400 cursor-pointer  font-semibold">
                Forget Password?
              </div>
            </div>
            <button className="w-full py-6 flex justify-center items-center text-white text-3xl mb-10 bg-[#381DE9] rounded-3xl">
              Sign In
            </button>
            <div className="mb-[2rem]">
              <span className="text-2xl  mr-2">Not registered yet?</span>
              <a href="/" className="text-primary-400 text-2xl">
                Create an Account
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
