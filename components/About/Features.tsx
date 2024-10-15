import React from "react";
import Feature from "./Feature";

const Features = () => {
  return (
    <div className="md:flex-1 flex gap-5 md:flex-col flex-row  p-5 md:px-10 md:justify-start justify-center items-center md:items-start border-r border-black">
      <Feature name="Artworks" number="20+" />
      <Feature name="Artists" number="15+" />
      <Feature name="Visitors" number="10k+" />
    </div>
  );
};

export default Features;
