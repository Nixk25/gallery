import React from "react";
import { Button } from "../ui/button";

const AboutText = () => {
  return (
    <div className=" w-full p-5 flex justify-end flex-col ">
      <div className="flex sm:justify-end gap-20 items-center mb-5  ">
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
  );
};

export default AboutText;
