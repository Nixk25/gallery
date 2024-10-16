import React from "react";
import TestimonialCarousel from "./TestimonialCarousel";

const Testimonials = () => {
  return (
    <section className=" flex justify-center items-center ">
      <div className="w-full relative border  md:pb-10 pb-20 border-black ">
        <div className="w-full border-b border-black">
          <h2 className="subheading  border-black border-r w-max p-5 ">
            What Our <br /> <span className="text-primary">Clients</span> Say
          </h2>
        </div>
        <TestimonialCarousel />
      </div>
    </section>
  );
};

export default Testimonials;
