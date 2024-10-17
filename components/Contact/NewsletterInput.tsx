import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const NewsletterInput = () => {
  return (
    <div className="relative mt-5 w-full min-w-[300px] max-w-[600px]  ">
      <Input
        className="h-full  py-4 border-black focus-visible:ring-primary transition-all duration-300 ease-in-out focus-visible:border-0 caret-primary"
        placeholder="Enter your email here..."
      />
      <Button className="absolute right-2 top-1/2 -translate-y-1/2 h-[80%]">
        Subscribe
      </Button>
    </div>
  );
};

export default NewsletterInput;
