import React from "react";
import FaqAccordion from "./FaqAccordion";

const Faq = () => {
  return (
    <section className="flex justify-center items-center border border-t-0 border-black mb-10">
      <div className="flex w-full flex-col md:flex-row">
        <h2 className="capitalize flex justify-center items-center md:items-start pt-5 md:pt-0 flex-col  subheading tracking-tighter flex-1 border-r border-black pl-5">
          Frequently asked <br />{" "}
          <span className="text-primary">Questions</span>
        </h2>
        <FaqAccordion />
      </div>
    </section>
  );
};

export default Faq;
