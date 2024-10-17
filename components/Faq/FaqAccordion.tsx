import React from "react";
import { Accordion } from "@/components/ui/accordion";
import { faq } from "@/app/constants";
import FaqItem from "./FaqItem";
const FaqAccordion = () => {
  return (
    <Accordion type="multiple" className="w-full flex flex-1 flex-col">
      {faq.map((item, i) => (
        <FaqItem item={item} key={i} />
      ))}
    </Accordion>
  );
};

export default FaqAccordion;
