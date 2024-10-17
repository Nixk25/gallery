import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItemProps = {
  item: {
    question: string;
    answer: string;
  };
};

const FaqItem = ({ item }: FaqItemProps) => {
  return (
    <AccordionItem
      value={item.question}
      className="flex flex-1 py-10  flex-col data-[state=open]:bg-black data-[state=open]:text-white border-b border-black last:border-b-0  "
    >
      <AccordionTrigger className="px-5 hover:no-underline text-start pt-5">
        {item.question}
      </AccordionTrigger>
      <AccordionContent className="px-5 text-gray-400">
        {item.answer}
      </AccordionContent>
    </AccordionItem>
  );
};

export default FaqItem;
