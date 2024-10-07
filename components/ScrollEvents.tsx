import React from "react";
import { EVENTS } from "@/app/constants";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

const ScrollEvents = ({
  onEventClick,
}: {
  onEventClick: (index: number) => void;
}) => {
  return (
    <ScrollArea className="w-full ">
      <div className="flex oveflow-x-auto">
        {EVENTS.map((event, idx) => (
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
        ))}
      </div>

      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default ScrollEvents;
