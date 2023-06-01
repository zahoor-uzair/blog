"use client"
import { Typography } from "@mui/material";
import React from "react";

const index = (props: any) => {
  return (
    <>
    <div className="w-full h-[20vh] flex justify-center items-center">
      <Typography variant="h4" className="font-bold border-b-2  text-slate-700">{props.title}</Typography>
      </div>
    </>
  );
};

export default index;
