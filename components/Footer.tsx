import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center border border-black">
      <div className="container py-5 sm:flex-row sm:justify-between  flex flex-col justify-center items-center w-full">
        <span>©2024 Éclat Gallery</span>
        <span className="text-primary">See the change </span>
        <a className=" underline" href="#">
          hello@eclatgallery.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
