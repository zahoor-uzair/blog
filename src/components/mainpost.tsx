"use client";
import React from "react";
import { Typography } from "@mui/material";

const Mainpost = () => {
  return (
    <>
      <div
        className="w-[600px] h-[450px] bg-red-200 ml-6 my-2 rounded bg-center bg-no-repeat bg-cover  relative drop-shadow-2xl cursor-pointer"
        style={{
          backgroundImage:
            "url('https://ventsmagazine.com/wp-content/uploads/2020/11/blog.jpg')",
        }}
      >
        <div className="absolute bottom-0 pb-6 text-center text-white text-shadow-lg  backdrop-grayscale-0 bg-black/30">
          {" "}
          <Typography variant="h4">Title</Typography>
          <Typography variant="body2" className="px-4 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium nulla aspernatur sit odit, quaerat id veritatis officiis
            esse corporis voluptatum dolor dicta deleniti omnis quis vitae!
            Doloremque quam eligendi sit?
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Mainpost;
