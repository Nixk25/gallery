import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { TESTIMONIALS } from "@/app/constants";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  return (
    <section className=" flex justify-center items-center  mb-20">
      <div className="w-full relative border  md:pb-10 pb-20 border-black ">
        <div className="w-full border-b border-black">
          <h2 className="subheading  border-black border-r w-max p-5 ">
            What Our <br /> <span className="text-primary">Clients</span> Say
          </h2>
        </div>

        <Carousel opts={{ align: "start" }} className="w-full p-5 ">
          <CarouselContent>
            {TESTIMONIALS.map((testimonial, idx) => (
              <Testimonial key={idx} testimonial={testimonial} idx={idx} />
            ))}
          </CarouselContent>
          <div className="absolute md:right-5 md:-top-14 flex gap-5 justify-end  md:-translate-x-0 -bottom-14 left-1/2 -translate-x-1/2">
            <CarouselPrevious variant="default" />
            <CarouselNext variant="default" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
