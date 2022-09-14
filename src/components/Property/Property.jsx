import React from "react";
import { BiBed } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { TbBath } from "react-icons/tb";



const Property = (props) => {
  return (
    <div className="mb-20">
      <article className="shadow-md bg-white rounded-3xl p-5 transform motion-safe:hover:scale-110 ...">
        <img
          src={props.data.Images[0]}
          alt={props.data.Images[0]}
          className="w-full h-52 object-cover rounded-3xl md:h-50 cursor-pointer "
          loading="lazy"
        />

        <article className="flex items-center flex-wrap justify-between">
          <div className="pt-5 flex items-center justify-start">
            <ul className="ml-3 space-y-1">
              <li className="font-light  text-lg mb-1 text-[#6B7280]">
                {props.data.title}
              </li>
              <div className="flex space-x-3">
                <GoLocation className="mt-1" color="#1CBEEC" />
                <li className="text-[#6B7280]">{props.data.location}</li>
              </div>
              <div className="flex space-x-3">
                <li className="flex text-[#6B7280]">
                  <BiBed className="mt-1 mr-1" color="#1CBEEC" />
                  Bathroom <span>3</span>
                </li>
                <li className="flex text-sm text-[#6B7280]">
                  <TbBath className="mt-1 mr-1" color="#1CBEEC" />
                  Bedroom <span>4</span>
                </li>
                <li className="flex text-sm text-[#6B7280]">
                  <TbBath className="mt-1 mr-1" color="#1CBEEC" />
                  Kitechen: 1
                </li>
              </div>
              <div className="flex mt-5">
                <li className="mt-2 text-[#1CBEEC]">
                  Price: {props.data.price} cedis
                </li>
                <li className="float-right ml-16">
                  <button className="bg-[#1CBEEC] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl">
                    View Details
                  </button>
                </li>
              </div>
            </ul>
          </div>
        </article>
      </article>
    </div>
  );
};

export default Property;
