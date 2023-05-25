import React from "react";
import Headcards from "../top-cards/headcards";
import HeroSection from "../hero-section";
import SideBar from "../side-bar/sidelist";

const index = () => {
  return (
    <div className="w-[95%] m-auto pt-6">
      <div className="flex items-start justify-between gap-5">
        <HeroSection />
        <SideBar />
      </div>
      <Headcards />
    </div>
  );
};

export default index;
