import React from 'react'
import image from './assests/Rectangle 9.png'
import {
    useNavigate
} from "react-router-dom"

const About = () => {
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault();
        navigate("/about")
    }

  return (
    <section className="mt-24 mx-3">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <img
            className="lg:h-[50vh] lg:w-[30vw] md:flex lg:flex hidden"
            src={image}
            alt=""
          />
        </div>
        <div>
          <strong className="text-3xl text-center">ABOUT US</strong>
          <p className="flow-root ... max-w-md text-gray-600 mt-3">
            Vision Board Realty Limited (VBRL) is an organisation committed and
            dedicated to assisting our clients, both local and abroad, find
            their ideal homes and properties. <br /> Our focus is to ensure that
            the purchasing, rental or management process is seamless for our
            clients by providing options that meet their needs while remaining
            professionals and delivering excellence.
          </p>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-900 mt-5 text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            READ MORE
          </button>
        </div>
      </div>
    </section>
  );
}

export default About
