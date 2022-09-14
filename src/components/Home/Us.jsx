import React from "react";
import insure from "./assests/insurance 1.png";
import asset from "./assests/assets 1.png";
import money from "./assests/money-bag 1.png";

const Us = () => {
  return (
    <div className="md:ml-[140px]">
      <div className="mt-16">
        <h1 className="flex justify-center items-center text-[#121828] text-3xl font-semibold">
          Why Choose Us
        </h1>
        <h5 className="flex justify-center items-center text-[#6B7280] text-base">
          Reasons to do business with us
        </h5>
      </div>
      <div class="grid lg:grid-cols-3">
        <div class="w-full p-4 lg:w-80">
          <div class="p-8 bg-white rounded-md shadow-md border-sky-200 border-2 cursor-pointer">
            <div className="flex justify-center items-center">
              <img src={insure} style={{ height: 80, width: 80 }} />
            </div>
            <h2 class="text-xl font-semibold text-gray-800 flex justify-center items-center mt-1">
              Insurance Coverage
            </h2>
            <p class="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing so elit. Autem
              consequatur te eaque ab quibusdam sua Lorem, Lorem, ipsum. lorem
              placeataiores obcaecatite asperiores nesciunt lorem deserunt
              laboriosam!
            </p>
          </div>
        </div>
        <div class="w-full p-4 lg:w-80">
          <div class="p-8 bg-white rounded-md shadow-md border-sky-200 border-2 cursor-pointer ">
            <div className="flex justify-center items-center ">
              <img src={asset} style={{ height: 80, width: 80 }} />
            </div>
            <h2 class="text-xl font-semibold text-gray-800 flex justify-center items-center mt-1">
              Insurance Coverage
            </h2>
            <p class="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing so elit. Autem
              consequatur te eaque ab quibusdam sua Lorem, Lorem, ipsum. lorem
              placeataiores obcaecatite asperiores nesciunt lorem deserunt
              laboriosam!
            </p>
          </div>
        </div>
        <div class="w-full p-4 lg:w-80">
          <div class="p-8 bg-white rounded-md shadow-md border-sky-200 border-2  cursor-pointer">
            <div className="flex justify-center items-center">
              <img src={money} style={{ height: 80, width: 80 }} />
            </div>
            <h2 class="text-xl mt-1 font-semibold text-gray-800 flex justify-center items-center">
              Insurance Coverage
            </h2>
            <p class="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing so elit. Autem
              consequatur te eaque ab quibusdam sua Lorem, Lorem, ipsum. lorem
              placeataiores obcaecatite asperiores nesciunt lorem deserunt
              laboriosam!
            </p>
          </div>
        </div>
      </div>
      {/* <br /><br /><br /> */}
    </div>
  );
};

export default Us;
