import React from "react";
import { Button } from "./ui/button";
import { IoMenu } from "react-icons/io5";
const Navbar = () => {
  return (
    <nav className="border-b-2 border-black w-full h-full">
      <div className=" flex justify-between items-center h-[40px]">
        <div className="border-r h-full flex justify-center items-center px-4  border-black ">
          <IoMenu />
        </div>

        <Button className="border-l h-full border-black">Visit us</Button>
      </div>
    </nav>
  );
};

export default Navbar;
