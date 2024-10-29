import React from "react";
import NewsletterInput from "./NewsletterInput";

const Contact = () => {
  return (
    <section className=" flex justify-center items-center ">
      <div className="container flex border border-black border-t-0 border-b-0 py-10 px-5 pb-20 justify-center items-center flex-col ">
        <h2 className="text-center subheading tracking-tighter">
          Keep in <span className="text-primary ">Touch</span>
        </h2>
        <p className="text-gray-500 text-center">
          Subscribe for updates about our gallery
        </p>
        <NewsletterInput />
      </div>
    </section>
  );
};

export default Contact;
