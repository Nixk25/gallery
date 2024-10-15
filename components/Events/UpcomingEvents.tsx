import React from "react";
import EventsClientSide from "./EventsClientSide";

const UpcomingEvents = () => {
  return (
    <section className="flex justify-center items-center ">
      <div className="container border py-10 border-black border-b-0 text-center ">
        <span className="text-xs text-gray-500">Join us for a journey</span>
        <h2 className="subheading px-5 tracking-tighter border-b pb-5  border-black">
          <span className="text-primary">Echoes</span> of Creation
        </h2>
        <EventsClientSide />
      </div>
    </section>
  );
};

export default UpcomingEvents;
