"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Marquee = () => {
  return (
    <div className="h-max border-b-2 border-black flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-x-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </div>
  );
};

const testimonials = [
  { name: "Picasso" },
  { name: "Van Gogh" },
  { name: "Monet" },
  { name: "Basquiat" },
  { name: "Herman Melville" },
  { name: "Pollock" },
  { name: "Rothko" },
];

export default Marquee;
