"use client";

import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { RiDoubleQuotesL } from "react-icons/ri";
import { CarouselItem } from "@/components/ui/carousel";
import { motion } from "framer-motion";
type TestimonialProps = {
  testimonial: {
    name: string;
    avatar: string;
    testimonial: string;
    position: string;
    company: string;
    location: string;
  };
  idx: number;
};

const Testimonial = ({ testimonial, idx }: TestimonialProps) => {
  return (
    <CarouselItem className="md:basis-1/2 lg:basis-1/3 hover:cursor-grab active:cursor-grabbing overflow-hidden ">
      <motion.div
        initial={{ opacity: 0, y: "30vh" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.08 * idx }}
      >
        <div className="p-1">
          <Card className="md:p-3 space-y-4 md:space-y-10 border-none shadow-md rounded-none select-none min-h-[610px] smallMobile:min-h-[480px] relative">
            <CardHeader className="flex justify-center smallMobile:justify-between items-center flex-col smallMobile:flex-row">
              <Avatar className="size-20">
                <AvatarImage
                  className="object-cover"
                  src={testimonial.avatar}
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="text-xl text-primary text-center ">
                {testimonial.company}
              </span>
            </CardHeader>
            <CardContent className="flex flex-col  justify-center   ">
              <RiDoubleQuotesL size={40} className="text-primary" />
              <p className="px-2 text-xl md:texl-3xl mt-5 pb-20">
                {testimonial.testimonial}
              </p>
            </CardContent>
            <CardFooter className="absolute bottom-0 left-0">
              <div className="border-l-2 pl-5 border-gray-200 flex flex-col items-start">
                <span>{testimonial.name}</span>
                <div className="flex flex-col mt-1">
                  <span className="text-xs text-gray-500">
                    {testimonial.position}
                  </span>
                  <span className="text-xs text-gray-500">
                    {testimonial.location}
                  </span>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </motion.div>
    </CarouselItem>
  );
};

export default Testimonial;
