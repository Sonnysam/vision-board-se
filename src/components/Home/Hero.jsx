import React from "react";

const Hero = () => {
  const backgroundImageStyle = {
    backgroundImage: `url("https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div>
      <section
        style={backgroundImageStyle}
        loading="lazy"
        className=""
      >
        <div className="px-8 py-[32vh] md:py-[35vh] abosulte">
          <div className=" text-white mt-[-40px]">
            <h1 class="font-bold text-2xl md:text-4xl uppercase heroheader">
              Find your next <br />
              perfect place <br />
              to live <br />
            </h1>
            <div class="herotext">
              <p>The internet’s source of freely-usable images.</p>
              <p>Powered by creators everywhere.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
