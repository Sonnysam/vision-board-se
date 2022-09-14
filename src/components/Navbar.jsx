import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { UserAuth } from "../context/AuthContext";
import User from '../components/vision/visionAssets/user.png'



const NavMenu = () => {

  const navigate = useNavigate();
  const { user, logOut } = UserAuth();
  
  const handleLogout = async () => {
    try {
      await logOut()
      navigate("/");
    } catch (error) {
      console.log(error)
    }
  };


  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 sm:flex justify-center items-center">
      <Typography
        as="li"
        className="p-1 font-bold"
      >
        <Link to="/" className="flex items-center">
          HOME
        </Link>
      </Typography>
      <Typography
        as="li"
        className="p-1 font-bold"
      >
        <Link to="/about" className="flex items-center">
          ABOUT
        </Link>
      </Typography>
      <Typography
        as="li"
        className="p-1 font-bold"
      >
        <Link to="/property" className="flex items-center">
          PROPERTY
        </Link>
      </Typography>
      <Typography
        as="li"
        className="p-1  font-bold"
      >
        <Link to="/mortgagecal" className="flex items-center">
          MORTGAGE
        </Link>
      </Typography>
      
    </ul>
  );
 

  return (
    <Navbar className="mx-auto text-black m-0 mr-0  w-full  py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          <h1 className="font-bold text-xl">
            <Link to="/">VISION BOARD</Link>
            <br />
            <span className="text-sm font-light text-sky-500">
              REAL ESTATE LIMITED
            </span>
          </h1>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        {user?.email ? (
          <span>
            <Link to="">
              <img
                src={User}
                alt="user"
                style={{ width: 90, height: 50 }}
                className="hidden lg:inline-block mr-3"
              />
            </Link>

            <Button
              onClick={handleLogout}
              variant="gradient"
              size="sm"
              className="hidden text-white lg:inline-block bg-[#1CBEEC]"
            >
              Logout
            </Button>
          </span>
        ) : (
          <span>
            <Button
              variant="gradient"
              size="sm"
              className="hidden text-black lg:inline-block mr-4"
            >
              <Link to="/login">Login</Link>
            </Button>
            <Button
              variant="gradient"
              size="sm"
              className="hidden text-white bg-[#1CBEEC]  lg:inline-block"
            >
              <Link to="/register">Register</Link>
            </Button>
          </span>
        )}
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        {navList}
        {user?.email ? (
          <span className="flex justify-center items-center">
            <Link to="">
              <img
                src={User}
                alt="user"
                style={{ width: 90, height: 50 }}
                className="hidden lg:inline-block mr-4"
              />
            </Link>
            <Button
              onClick={handleLogout}
              variant="gradient"
              size="sm"
              className=" text-white mt-2 bg-[#1CBEEC]  lg:inline-block"
            >
              Logout
            </Button>
          </span>
        ) : (
          <span>
            <Button
              variant="gradient"
              size="sm"
              className="text-black lg:inline-block mr-4"
            >
              <Link to="/login">Login</Link>
            </Button>
            <Button
              variant="gradient"
              size="sm"
              className="text-white bg-[#1CBEEC]  lg:inline-block"
            >
              <Link to="/register">Register</Link>
            </Button>
          </span>
        )}
      </MobileNav>
    </Navbar>
  );
  
};

export default NavMenu;