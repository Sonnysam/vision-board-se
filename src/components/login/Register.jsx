import React, { useState } from "react";
import house from "./loginAssets/house.png";
import google from "./loginAssets/google-color 1.png";
import fb from "./loginAssets/facebook-color 1.png";
import or from "./loginAssets/OR.png";
import key from "./loginAssets/key.png";
import gmail from "./loginAssets/mail.png";
import line from "./loginAssets/Line 3.png";
import { Link, useNavigate } from "react-router-dom";
import e2 from "./loginAssets/Ellipse 2.png";
import e3 from "./loginAssets/Ellipse 3.png";
import e4 from "./loginAssets/Ellipse 4.png";
import star from "./loginAssets/star.png";
import { UserAuth } from "../../context/AuthContext";
import { async } from "@firebase/util";


const Signin = () => {
  const [isShown, setIsSHown] = useState(false);

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {user, signUp} = UserAuth()

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signUp(email, password)
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div class="h-screen md:flex mb-[6rem]">
      <div class="bg-image relative overflow-hidden md:flex w-1/2  justify-around items-center hidden bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="absolute mx-5 mt-30">
          <h1 className="text-4xl text-white font-medium">
            Start turning your <br /> ideas into reality
          </h1>
          <p className="text-white text-xl mt-4 font-medium">
            Create a free account and get access to <br />
            all features. Trusted by over 4,000 professionals
          </p>
          <p>
            <ul className="flex ">
              <li>
                <img src={e2} alt="" className="elip" />
              </li>
              <li>
                <img src={e3} alt="" className="elip" />
              </li>
              <li>
                <img src={e4} alt="" className="elip" />
              </li>
            </ul>
          </p>
          {/* stars */}
          <p>
            <ul className="flex ml-36 -mt-9">
              <li>
                <img src={star} alt="" />
              </li>
              <li>
                <img src={star} alt="" />
              </li>
              <li>
                <img src={star} alt="" />
              </li>
              <li>
                <img src={star} alt="" />
              </li>
              <li>
                <img src={star} alt="" />
              </li>
              <li className="text-white text-base ml-2">5.0</li>
            </ul>
            <p className="text-white ml-36">from 200+ reviews</p>
          </p>
        </div>
      </div>
      <div class="flex md:w-1/2 justify-center py-10 items-center mx-6 bg-white ">
        <form class="w-full p-2" onSubmit={handleSubmit}>
          <h1 className="text-3xl text-start mt-4 font-bold wel">Welcome to</h1>
          <p className="text-3xl text-start mt-1 real mb-7">
            Real Estate Business
          </p>
          <div class="flex items-center border-2 py-2 px-3 rounded mb-4 bg-[#E2F1F6]">
            <img src={gmail} alt="f" style={{ width: 30, height: 28 }} />
            <input
              onChange={(e) => setEmail(e.target.value)}
              class="pl-2 outline-none border-none bg-transparent py-2 overflow-hidden"
              type="text"
              name=""
              id=""
              placeholder="Email"
              autoComplete="email"
            />
          </div>
          <div class="flex items-center border-2 py-2 px-3 rounded mb-4 bg-[#E2F1F6]">
            <img src={key} alt="f" style={{ width: 30, height: 28 }} />
            <input
              onChange={(e) => setPassword(e.target.value)}
              class="pl-2 outline-none border-none bg-transparent py-2"
              type="password"
              name=""
              id=""
              placeholder="Password"
              autoComplete="current-password"
            />
          </div>
          <div className="flex justify-between">
            <p className="text-sm">
              {" "}
              <input
                type="checkbox"
                name=""
                id=""
                className="bg-[#E2F1F6]"
              />{" "}
              Remember Me
            </p>
            <p className="text-sm hover:text-blue-500 cursor-pointer">
              Forgot Password?
            </p>
          </div>

          <button
            type="submit"
            class="block w-full bg-[#1CBEEC] mt-4 py-4 rounded text-white font-semibold mb-2"
          >
            Register
          </button>
          <span class="text-sm ml-2 cursor-pointer flex justify-center items-center">
            Already have an account? &nbsp;{" "}
            <Link to="/login" className="text-[#1CBEEC] text-base font-bold">
              login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signin;
