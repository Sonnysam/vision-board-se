import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import insure from "./assests/insurance 1.png";
import asset from "./assests/assets 1.png";
import money from "./assests/money-bag 1.png";
import star from "./assests/start.png";
import one from "./assests/Ellipse2(1).png";
import two from "./assests/Ellipse2(2).png";
import three from "./assests/Ellipse2.png";
import line from "./assests/Line.png"


/* Install pure-react-carousel using -> npm i pure-react-carousel */
export default function Testimony() {
    return (
      <div className="mb-5">
        <div className="flex items-center justify-between h-full w-full absolute z-0">
          <div className="w-1/3 h-full" />
          <div className="w-4/6 ml-16  h-full" />
        </div>
        <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
          <CarouselProvider
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={2}
          >
            <h1 className="text-2xl text-center font-normal xl:block hidden leading-tight text-gray-800">
              Testiominal
              <br />
              <p className="text-sm font-light text-gray-600">
                What our customers say about us
              </p>
            </h1>
            <div className="flex justify-between">
              <span> </span>
              <div className="flex items-center mt-8 mx-10">
                <ButtonBack
                  className="cursor-pointer bg-sky-100 p-2 rounded-full"
                  role="button"
                  aria-label="previous slide"
                >
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonal-svg2.svg"
                    alt="previous"
                  />
                </ButtonBack>

                <ButtonNext
                  role="button"
                  aria-label="next slide"
                  className="cursor-pointer ml-2 bg-sky-100 p-1 rounded-full"
                >
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg3.svg"
                    alt="next"
                  />
                </ButtonNext>
              </div>
            </div>
            <h1 className="text-3xl font-bold xl:hidden leading-tight lg:leading-10 text-gray-800 flex justify-center items-center">
              Testimonial
            </h1>
            <p className="text-gray-300 text-xl font-light flex justify-center items-center">
              What our client say
            </p>
            <Slider>
              <Slide index={0} tabIndex="null">
                <div class="grid lg:grid-cols-2">
                  <div class="w-full p-4 lg:w-100">
                    <div class="p-8 bg-white rounded-md shadow-md border-sky-200 border-2 cursor-pointer ">
                      <div className="flex justify-center items-center ">
                        <img src={two} style={{ height: 80, width: 80 }} />
                      </div>
                      <h2 class="text-xl font-semibold text-gray-800 flex justify-center items-center mt-1">
                        Nathan Offei Ansah
                      </h2>
                      <p className="flex justify-center items-center text-gray-400 text-base">
                        Product Designer
                      </p>
                      <div className="flex justify-center items-center my-2">
                        <img src={line} className="" />
                      </div>
                      <div className="flex-row justify-center items-center">
                        <ul className="flex justify-center items-center">
                          <li>
                            <img
                              src={star}
                              alt=""
                              style={{ width: 20, height: 20 }}
                            />
                          </li>
                          <li>
                            <img
                              src={star}
                              alt=""
                              style={{ width: 20, height: 20 }}
                            />
                          </li>
                          <li>
                            <img
                              src={star}
                              alt=""
                              style={{ width: 20, height: 20 }}
                            />
                          </li>
                          <li>
                            <img
                              src={star}
                              alt=""
                              style={{ width: 20, height: 20 }}
                            />
                          </li>
                        </ul>
                      </div>
                      <p class="text-gray-400">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Autem consequatur eaque ab quibusdam Lorem,
                        placeataiores obcaecati asperiores nesciunt deserunt
                        laboriosam!
                      </p>
                    </div>
                  </div>
                  <div class="w-full p-4 lg:w-100">
                    <div class="p-8 bg-white rounded-md shadow-md border-sky-200 border-2 cursor-pointer ">
                      <div className="flex justify-center items-center ">
                        <img src={one} style={{ height: 80, width: 80 }} />
                      </div>
                      <h2 class="text-xl font-semibold text-gray-800 flex justify-center items-center mt-1">
                        Nana Adjoa Opei
                      </h2>
                      <p className="flex justify-center items-center text-gray-400 text-base">
                        Senior Accountant
                      </p>
                      <div className="flex justify-center items-center my-2">
                        <img src={line} className="" />
                      </div>
                      <div className="flex-row justify-center items-center">
                        <ul className="flex justify-center items-center">
                          <li>
                            <img
                              src={star}
                              alt=""
                              style={{ width: 20, height: 20 }}
                            />
                          </li>
                          <li>
                            <img
                              src={star}
                              alt=""
                              style={{ width: 20, height: 20 }}
                            />
                          </li>
                          <li>
                            <img
                              src={star}
                              alt=""
                              style={{ width: 20, height: 20 }}
                            />
                          </li>
                          <li>
                            <img
                              src={star}
                              alt=""
                              style={{ width: 20, height: 20 }}
                            />
                          </li>
                        </ul>
                      </div>
                      <p class="text-gray-400">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Autem consequatur eaque ab quibusdam Lorem,
                        placeataiores obcaecati asperiores nesciunt deserunt
                        laboriosam!
                      </p>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide index={1} className="">
                <div class="grid lg:grid-cols-2">
                  <div class="w-full p-4 lg:w-100">
                    <div class="p-8 bg-white rounded-md shadow-md border-sky-200 border-2 cursor-pointer ">
                      <div className="flex justify-center items-center ">
                        <img src={three} style={{ height: 80, width: 80 }} />
                      </div>
                      <h2 class="text-xl font-semibold text-gray-800 flex justify-center items-center mt-1">
                        Godwin K. Baah
                      </h2>
                      <p className="flex justify-center items-center text-gray-400 text-base">
                        Software Developer
                      </p>
                      <div className="flex justify-center items-center my-2">
                        <img src={line} className="" />
                      </div>
                      <div className="flex-row justify-center items-center">
                        <ul className="flex justify-center items-center">
                          <li>
                            <img
                              src={star}
                              alt=""
                              style={{ width: 20, height: 20 }}
                            />
                          </li>
                          <li>
                            <img
                              src={star}
                              alt=""
                              style={{ width: 20, height: 20 }}
                            />
                          </li>
                          <li>
                            <img
                              src={star}
                              alt=""
                              style={{ width: 20, height: 20 }}
                            />
                          </li>
                          <li>
                            <img
                              src={star}
                              alt=""
                              style={{ width: 20, height: 20 }}
                            />
                          </li>
                        </ul>
                      </div>
                      <p class="text-gray-400">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Autem consequatur eaque ab quibusdam Lorem,
                        placeataiores obcaecati asperiores nesciunt deserunt
                        laboriosam!
                      </p>
                    </div>
                  </div>
                  <div class="w-full p-4 lg:w-100">
                    <div class="p-8 bg-white rounded-md shadow-md border-sky-200 border-2 cursor-pointer ">
                      <div className="flex justify-center items-center ">
                        <img src={one} style={{ height: 80, width: 80 }} />
                      </div>
                      <h2 class="text-xl font-semibold text-gray-800 flex justify-center items-center mt-1">
                        Nana Adjoa Opei
                      </h2>
                      <p className="flex justify-center items-center text-gray-400 text-base">
                        Senior Accountant
                      </p>
                      <div className="flex justify-center items-center my-2">
                        <img src={line} className="" />
                      </div>
                      <div className="flex-row justify-center items-center">
                        <ul className="flex justify-center items-center">
                          <li>
                            <img
                              src={star}
                              alt=""
                              style={{ width: 20, height: 20 }}
                            />
                          </li>
                          <li>
                            <img
                              src={star}
                              alt=""
                              style={{ width: 20, height: 20 }}
                            />
                          </li>
                          <li>
                            <img
                              src={star}
                              alt=""
                              style={{ width: 20, height: 20 }}
                            />
                          </li>
                          <li>
                            <img
                              src={star}
                              alt=""
                              style={{ width: 20, height: 20 }}
                            />
                          </li>
                        </ul>
                      </div>
                      <p class="text-gray-400">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Autem consequatur eaque ab quibusdam Lorem,
                        placeataiores obcaecati asperiores nesciunt deserunt
                        laboriosam!
                      </p>
                    </div>
                  </div>
                </div>
              </Slide>
            </Slider>
            {/* <div className="flex items-center mt-8">
              <ButtonBack
                className="cursor-pointer"
                role="button"
                aria-label="previous slide"
              >
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonal-svg2.svg"
                  alt="previous"
                />
              </ButtonBack>

              <ButtonNext
                role="button"
                aria-label="next slide"
                className="cursor-pointer ml-2"
              >
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg3.svg"
                  alt="next"
                />
              </ButtonNext>
            </div> */}
          </CarouselProvider>
        </div>
      </div>
    );
}
