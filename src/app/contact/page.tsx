import MainHead from "@/components/main-heading";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";
import ContactContainer from "@/components/contact-page/contact-container";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div>
        <MainHead title="Get in Touch" />
        <ContactContainer />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
