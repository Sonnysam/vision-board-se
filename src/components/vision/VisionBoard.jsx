import React from 'react'
import goal from './visionAssets/goal.png'
import vision from './visionAssets/vision.png'
import image from './visionAssets/Rectangle 9.png'

const VisionBoard = () => {
  return (
    <div className="mb-20">
      <section className="mt-20 ">
        <strong className="text-3xl flex justify-center text-center mb-4 font-medium vision">
          About Vision Board
        </strong>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2">
          <div>
            <img
              className="lg:h-[50vh] lg:w-[30vw] md:flex lg:flex hidden mx-auto"
              src={image}
              alt=""
            />
          </div>
          <div>
            <p className="flow-root ...  max-w-lg text-gray-600 mx-3 mt-10">
              Vision Board Realty Limited (VBRL) is an organisation committed
              and dedicated to assisting our clients, both local and abroad,
              find their ideal homes and properties. <br /> Our focus is to
              ensure that the purchasing, rental or management process is
              seamless for our clients by providing options that meet their
              needs while remaining professionals and delivering excellence.
            </p>
          </div>
        </div>
      </section>
      {/* SECOND PART */}
      <section className="mt-20">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2">
          <div className=" text-center mx-auto">
            <img src={vision} alt="" className="mx-auto v" />
            <strong className="g font-bold">Our Vision</strong>
            <p className="max-w-lg mx-3 text-gray-500">
              To be recognised as a trusted and reliable brokerage.
            </p>
          </div>
          <div className="text-center mx-auto mb-7">
            <img src={goal} alt="" className="mx-auto v" />
            <strong className="g font-bold">Our Mission</strong>
            <p className="max-w-lg mx-3 text-gray-500">
              To be excellent in service delivery while remaining professional
              and maintaining international standards.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VisionBoard;