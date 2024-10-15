import React from "react";
import AboutText from "./AboutText";
import Features from "./Features";

const About = () => {
  return (
    <section className="border-b border-black">
      <div className=" flex w-full md:flex-row flex-col  ">
        <Features />
        <AboutText />
      </div>
    </section>
  );
};

export default About;
