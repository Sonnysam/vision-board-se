/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";
import Loading from "../Loading";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const Home = () => {
  const { id } = useParams();
  const [images, setImage] = useState([]);

  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    getImages();
  }, []);

  const getImages = () => {
    const imagecollection = collection(db, "Properties");
    getDocs(imagecollection)
      .then((response) => {
        const img = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setImage(img);
      })
      .catch((error) => console.log(error.message));
  };

  console.log(images);

  return (
    <div className="mb-10 mt-10">
      {images.length === 0 ? (
        <Loading />
      ) : (
        images.map((image) => {
          const data = image.data.Images.Image1;
          if (image.id === id) {
            return (
              <main className="py-6 mb-[9rem] px-4 sm:p-6 md:py-10 md:px-8">
                <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                  <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                    <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-black">
                      {image.data.title}
                    </h1>
                  </div>
                  <div className="grid cursor-pointer gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
                    <img
                      src={image.data.Images[0]}
                      alt=""
                      className="w-full h-70 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:h-80 lg:col-span-full"
                      loading="lazy"
                    />
                    <img
                      src={image.data.Images[1]}
                      alt=""
                      className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32"
                      loading="lazy"
                    />
                    <img
                      src={image.data.Images[2]}
                      alt=""
                      className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32"
                      loading="lazy"
                    />
                  </div>

                  <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
                    <dt className="sr-only">{image.data.price}</dt>
                    <dt className="sr-only">Location</dt>
                    <dd className="flex items-center font-bold text-lg">
                      <svg
                        width="2"
                        height="2"
                        aria-hidden="true"
                        fill="currentColor"
                        className="mx-3 text-slate-300"
                      >
                        <circle cx="1" cy="1" r="1" />
                      </svg>
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="mr-1 text-slate-400 dark:text-slate-500"
                        aria-hidden="true"
                      >
                        <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                        <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                      </svg>
                      {image.data.Location}
                    </dd>
                  </dl>
                  <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4"></div>
                  <div className="mt-4 mb-2 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 ">
                    <h1 className="font-bold text-xl text-blue-400">
                      Description
                    </h1>
                    <p>
                      This sunny and spacious room is for those traveling light
                      and looking for a comfy and cosy place to lay their head
                      for a night or two. This beach house sits in a vibrant
                      neighborhood littered with cafes, pubs, restaurants and
                      supermarkets and is close to all the major attractions
                      such as Edinburgh Castle and Arthur's Seat.
                    </p>
                  </div>
                  <hr />
                  <div className="">
                    <h1 className="font-bold text-xl text-blue-400">
                      Standard Features
                    </h1>
                    <ul>
                      <li>
                        Number of Bedroom{" "}
                        <span className="font-extrabold">:</span> 2
                      </li>
                      <li>
                        Number of Bathroom{" "}
                        <span className="font-extrabold">:</span> 4
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="md:px-28">
                  <Box sx={{ width: "100%", typography: "body1" }}>
                    <TabContext value={value}>
                      <Box
                        sx={{
                          borderBottom: 1,
                          borderColor: "divider",
                        }}
                      >
                        <TabList
                          onChange={handleChange}
                          aria-label="lab API tabs example"
                        >
                          <Tab label="Interior" value="1" />
                          <Tab label="Exterior" value="2" />
                          <Tab label="Others" value="3" />
                        </TabList>
                      </Box>
                      <TabPanel value="1">
                        <div className="container grid grid-cols-3 gap-2 mx-auto">
                          <div className="w-full rounded">
                            <img src={image.data.Images[0]} alt={true} />
                          </div>
                          <div className="w-full rounded">
                            <img src={image.data.Images[0]} alt={true} />
                          </div>
                          <div className="w-full rounded">
                            <img src={image.data.Images[0]} alt={true} />
                          </div>
                          <div className="w-full rounded">
                            <img src={image.data.Images[2]} alt={true} />
                          </div>
                        </div>
                      </TabPanel>
                      <TabPanel value="2">
                        <div className="container grid grid-cols-3 gap-2 mx-auto">
                          <div className="w-full rounded">
                            <img src={image.data.Images[1]} alt={true} />
                          </div>
                          <div className="w-full rounded">
                            <img src={image.data.Images[0]} alt={true} />
                          </div>
                          <div className="w-full rounded">
                            <img src={image.data.Images[2]} alt={true} />
                          </div>
                          <div className="w-full rounded">
                            <img src={image.data.Images[0]} alt={true} />
                          </div>
                        </div>
                      </TabPanel>
                      <TabPanel value="3">
                        <div className="container grid grid-cols-3 gap-2 mx-auto">
                          <div className="w-full rounded">
                            <img src={image.data.Images[0]} alt={true} />
                          </div>
                          <div className="w-full rounded">
                            <img src={image.data.Images[1]} alt={true} />
                          </div>
                          <div className="w-full rounded">
                            <img src={image.data.Images[2]} alt={true} />
                          </div>
                          <div className="w-full rounded">
                            <img src={image.data.Images[0]} alt={true} />
                          </div>
                        </div>
                      </TabPanel>
                    </TabContext>
                  </Box>
                </div>
              </main>
            );
          }
        })
      )}
    </div>
  );
};

export default Home;
