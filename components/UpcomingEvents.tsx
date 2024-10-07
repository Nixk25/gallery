import React from "react";
import EventsClientSide from "./EventsClientSide";

const UpcomingEvents = () => {
  return (
    <section className="flex justify-center items-center ">
      <div className="container border border-t-0 py-10 border-black text-center ">
        <span className="text-xs text-gray-500">
          Join us for a journey through art, creativity, and connection
        </span>
        <h2 className="subheading px-5 tracking-tighter border-b  border-black">
          <span className="text-primary">Echoes</span> of Creation
        </h2>
        <EventsClientSide />
      </div>
    </section>
  );
};

export default UpcomingEvents;
