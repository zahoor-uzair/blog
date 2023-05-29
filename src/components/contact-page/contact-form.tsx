"use client";
import { TextField, Typography, Button } from "@mui/material";
import React from "react";

const stl = {
  marginTop: "10px",
  marginBottom: "10px",
};

const ContactForm = () => {
  return (
    <>
      <div className="w-[50%] rounded-l-md shadow-lg">
        <form action="" className="flex flex-col px-10 py-4">
          <Typography
            variant="h5"
            className="w-full text-center mt-2 font-bold text-slate-700"
          >
           Hit Us Up
          </Typography>
          <TextField label="Name" variant="outlined" size="small" sx={stl} />
          <TextField label="Email" variant="outlined" size="small" sx={stl} />
          <TextField label="Contact" variant="outlined" size="small" sx={stl} />
          <TextField
            label="Message"
            variant="outlined"
            multiline
            maxRows={4}
            sx={{ marginTop: "10px", marginBottom: "10px" }}
          />
          <button className="mt-6 w-full bg-slate-700 text-white h-12 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
