import React from "react";
import { SideBar, HeroSection, TopCards } from "..";

const index = () => {
  return (
    <div className="w-[95%] m-auto pt-6">
      <div className="flex items-start justify-between gap-5">
        <HeroSection />
        <SideBar />
      </div>
      <TopCards />
    </div>
  );
};

export default index;
