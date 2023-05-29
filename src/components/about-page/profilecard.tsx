"use client";
import { Typography } from "@mui/material";
// import Image from "next/image";
import React from "react";

const ProfileCard = () => {
  return (
    <>
      <div className="w-80 h-[400px] flex flex-col justify-center items-center p-6 rounded-md mx-10 shadow-2xl">
        <img
          className="rounded-3xl mb-14"
          width={100}
          height={100}
          src={
            "https://marketplace.canva.com/EAFEits4-uw/1/0/800w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-r0bPCSjUqg0.jpg"
          }
          alt="profile"
        ></img>
        <Typography variant="h5">Muhabat Khan Niazi</Typography>
        <Typography variant="body1" className="text-blue-950">
          Software Engineer
        </Typography>
        <Typography variant="body2" className="text-center mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing amet consectetur
          adipisicing dolor sit amet consectetur adipisicing amet consectetur
          adipisicing.
        </Typography>
      </div>
    </>
  );
};

export default ProfileCard;
