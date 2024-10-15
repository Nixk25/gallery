import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { TESTIMONIALS } from "@/app/constants";
import Testimonial from "./Testimonial";
const TestimonialCarousel = () => {
  return (
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
  );
};

export default TestimonialCarousel;
