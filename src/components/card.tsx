"use client"
import React from 'react'
import { Typography } from "@mui/material";

export default function PostCard() {
  return (
    <div
      className="w-56 h-48 bg-red-200 my-2 bg-center hover:scale-105 transition ease-in-out delay-150 duration-300 bg-no-repeat bg-cover rounded relative shadow-lg cursor-pointer"
      style={{
        backgroundImage:
          "url('https://ventsmagazine.com/wp-content/uploads/2020/11/blog.jpg')",
      }}
    >
      <div className="absolute bottom-0 text-center text-white backdrop-grayscale-0 bg-black/30 pb-2">
        <Typography variant="h5">Title</Typography>
        <Typography className="text-xs">02-April-2022</Typography>
        <Typography variant="body2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </Typography>
      </div>
    </div>
  );
}
