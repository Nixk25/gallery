import React from "react";
import { EVENTS } from "@/app/constants";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import Event from "./Event";

const ScrollEvents = ({
  onEventClick,
}: {
  onEventClick: (index: number) => void;
}) => {
  return (
    <ScrollArea className="w-full ">
      <div className="flex oveflow-x-auto">
        {EVENTS.map((event, idx) => (
          <Event
            event={event}
            idx={idx}
            key={idx}
            onEventClick={onEventClick}
          />
        ))}
      </div>

      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default ScrollEvents;
