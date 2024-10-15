import React from "react";

type EventProps = {
  event: {
    title: string;
    order: number;
    date: string;
    description: string;
  };
  idx: number;
  onEventClick: (idx: number) => void;
};

const Event = ({ event, idx, onEventClick }: EventProps) => {
  return (
    <div
      key={idx}
      className="flex md:min-w-[300px]  p-5 border border-black gap-2 items-center hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer group ease-in-out"
      onClick={() => onEventClick(idx)}
    >
      <span className="text-gray-500 group-hover:text-gray-700">
        0{event.order}
      </span>
      <h3 className="text-lg text-nowrap ">{event.title}</h3>
    </div>
  );
};

export default Event;
