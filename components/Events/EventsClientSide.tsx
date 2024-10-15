"use client";

import React, { useState, useEffect } from "react";
import ScrollEvents from "./ScrollEvents";
import { EVENTS } from "@/app/constants";
import { AnimatePresence, motion } from "framer-motion";

const EventsClientSide = () => {
  const [currentEventIndex, setCurrentEventIndex] = useState<number>(0);
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  const handleEventClick = (index: number) => {
    setCurrentEventIndex(index);
  };

  useEffect(() => {
    const eventDate = new Date(EVENTS[currentEventIndex].date).getTime();
    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      setDaysLeft(days > 0 ? days : 0);
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [currentEventIndex]);

  const charVariants = {
    initial: { opacity: 0, y: "10vh" },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: "-10vh" },
  };

  return (
    <>
      <ScrollEvents onEventClick={handleEventClick} />

      <div className="text-start md:p-20 p-5 ">
        <AnimatePresence mode="wait">
          {EVENTS[currentEventIndex] && (
            <div key={currentEventIndex}>
              <h3 className="text-5xl md:text-6xl overflow-hidden ">
                {EVENTS[currentEventIndex].title.split(" ").map((word, i) => (
                  <span key={i} className="inline-block">
                    {word.split("").map((char, j) => (
                      <motion.span
                        key={j}
                        variants={charVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                          delay: (i + j * 0.1) * 0.2,
                          ease: "easeInOut",
                        }}
                        className="drop-shadow-sm inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                    <span className="inline-block">&nbsp;</span>
                  </span>
                ))}
              </h3>

              {daysLeft ? (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  exit={{ opacity: 0 }}
                  className="text-lg mt-4"
                >
                  <span className="text-primary">{daysLeft} days</span> until
                  this event
                </motion.p>
              ) : (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  exit={{ opacity: 0 }}
                  className="text-lg mt-4"
                >
                  <span className="text-primary">
                    Unfortunately, this event has already happened.
                  </span>
                </motion.p>
              )}

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                exit={{ opacity: 0 }}
                className="text-sm"
              >
                {EVENTS[currentEventIndex].date}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                exit={{ opacity: 0 }}
                className="text-sm"
              >
                {EVENTS[currentEventIndex].description}
              </motion.p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default EventsClientSide;
