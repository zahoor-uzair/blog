"use client";
import React from "react";
import { Typography } from "@mui/material";

const HeroSection = () => {
  return (

      <div
        className="w-full h-[85vh]  overflow-hidden  rounded-lg bg-center bg-no-repeat bg-cover  relative"
        style={{
          backgroundImage:
            "url('https://ventsmagazine.com/wp-content/uploads/2020/11/blog.jpg')",
        }}
      >
        <div className="absolute bottom-0 py-6 text-center text-white text-shadow-lg  bg-blackBlur">
          <Typography variant="h4">Title</Typography>
          <Typography variant="body2" className="px-4 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium nulla aspernatur sit odit, quaerat id veritatis officiis
            esse corporis voluptatum dolor dicta deleniti omnis quis vitae!
            Doloremque quam eligendi sit?
          </Typography>
        </div>
      </div>

  );
};

export default HeroSection;
