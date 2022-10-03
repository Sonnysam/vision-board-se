import React from "react";
import Empty from "../components/Empty/Empty";
import About from "../components/Home/About";
import Cal from "../components/Home/Cal";
import Hero from "../components/Home/Hero";
import How from "../components/Home/How";
import Partners from "../components/Home/Partners";
import Property from "../components/Home/Property";
// import Testimony from "../components/Home/Testimony";
import Us from "../components/Home/Us";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Partners />
      <Us/>
      <About />
      <Property />
      <How/>
      <Cal />
      {/* <Testimony /> */}
      <Empty/>
    </div>
  );
};

export default Home;
