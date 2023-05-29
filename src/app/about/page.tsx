import ProfileSection from "@/components/about-page/card-section";
import Footer from "@/components/footer";
import MainHead from "@/components/main-heading";
import Navbar from "@/components/navbar";
import React from "react";

const About = () => {
  return (
    <>
      <Navbar />
      <div>
        <MainHead title="Our Team is Here" />
        <ProfileSection />
      </div>
      <Footer />
    </>
  );
};

export default About;
