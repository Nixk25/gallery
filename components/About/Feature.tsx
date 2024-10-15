import React from "react";

const Feature = ({ name, number }: { name: string; number: string }) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs text-gray-600">{name}</span>
      <span className="text-4xl text-primary ">{number}</span>
    </div>
  );
};

export default Feature;
