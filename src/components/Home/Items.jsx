import React from 'react'

const Items = (props) => {
  return (
    <div>
      <article className="shadow-md bg-white rounded-3xl p-5 transform motion-safe:hover:scale-110 ...">
        <img
          src={props.data.Images[0]}
          alt={props.data.Image}
          className="w-full h-52 object-cover rounded-3xl md:h-80 cursor-pointer "
          loading="lazy"
        />

        <article className="flex items-center flex-wrap justify-between">
          <div className=" flex items-center justify-start">
            <ul className="ml-3">
              <li className="font-bold text-lg mb-1">{props.data.title}</li>

              <li className="">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  View
                </button>
              </li>
            </ul>
          </div>
          <div>
            <ul className="text-sm text-right mt-7">
              <li>
                <span className="font-bold "></span> {props.data.Rooms}
              </li>
              <li className="text-blue-900 font-serif"></li>
            </ul>
          </div>
        </article>
      </article>
    </div>
  );
}

export default Items