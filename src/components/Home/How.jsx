import React from 'react'
import image from './assests/Rectangle 9.png'
import { FaHome } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { BiMoney } from "react-icons/bi";

const How = () => {
  return (
    <section className="mt-20 mx-3">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <div className='mt-5'>
            <h1 className="text-3xl font-medium">How it Works</h1>
            <p className="text-gray-300 text-xl">
              Easy steps in getting a new home
            </p>
          </div>
          <div className="flex mt-7">
            <div className=" flex justify-center items-center">
              <FaHome className=" bg-[#E2F1F6] p-2 rounded-full" size={40} />
            </div>
            <div className="mx-3 mt-3">
              <h1 className="text-gray-500">Find a home you love</h1>
              <p className="text-gray-400 text-sm max-w-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                eveniet consectetur numquam reprehenderit minus rem!
              </p>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="flex justify-center items-center">
              <RiCustomerService2Fill
                className=" bg-[#E2F1F6] p-2 rounded-full"
                size={40}
              />
            </div>
            <div className="mx-3 mt-3">
              <h1 className="text-gray-500">Meet our agent</h1>
              <p className="text-gray-400 text-sm max-w-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                eveniet consectetur numquam reprehenderit minus rem!
              </p>
            </div>
          </div>
          <div className="flex mt-6">
            <div className=" flex justify-center items-center">
              <BiMoney className=" bg-[#E2F1F6] p-2 rounded-full" size={40} />
            </div>
            <div className="mx-3">
              <h1 className="text-gray-500">Pay and move-in</h1>
              <p className="text-gray-400 text-sm max-w-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                eveniet consectetur numquam reprehenderit minus rem!
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            className="lg:h-[70vh] md:flex lg:flex hidden -mx-7"
            src={image}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default How