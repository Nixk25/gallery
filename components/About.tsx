import React from "react";
import { Button } from "./ui/button";

const Feature = ({ name, number }: { name: string; number: string }) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs text-gray-600">{name}</span>
      <span className="text-4xl text-primary ">{number}</span>
    </div>
  );
};

const About = () => {
  return (
    <section className="border-b border-black">
      <div className=" flex w-full md:flex-row flex-col  ">
        <div className="md:flex-1 flex gap-5  p-5 md:px-10 md:justify-start justify-center items-center md:items-start md:space-y-5 border-r border-black">
          <Feature name="Artworks" number="20+" />
          <Feature name="Artists" number="15+" />
          <Feature name="Visitors" number="10k+" />
        </div>
        <div className=" w-full p-5 flex justify-end flex-col ">
          <div className="flex justify-end gap-20 items-center mb-5  ">
            <span className="text-primary text-xs">Redefining Art</span>
            <span className="text-xs text-gray-500">Inspiring Change</span>
          </div>

          <p className=" text-3xl md:text-5xl flex justify-end ">
            We bring art to the forefront, empowering <br /> you to embrace the
            change that inspires.
          </p>
          <div className="w-full flex justify-end mt-10">
            <Button size="lg">Visit us now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
