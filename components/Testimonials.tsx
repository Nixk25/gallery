import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";

const Testimonials = () => {
  return (
    <section className=" flex justify-center items-center p-5 mb-20">
      <div className="container relative">
        <h2 className="subheading  ">
          What Our <br /> <span className="text-primary">Clients</span> Say
        </h2>

        <Carousel className="w-full ">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 hover:cursor-grab active:cursor-grabbing"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute flex gap-5 md:right-14 md:-top-10 -bottom-10 left-1/2 -translate-x-1/2">
            <CarouselPrevious variant="default" />

            <CarouselNext variant="default" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
