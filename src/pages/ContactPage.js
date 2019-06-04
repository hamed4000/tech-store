import React from "react";
import Hero from "../components/Hero";
import Contact from "../components/ContactPage/Contact";
import contactImg from "../images/contactBcg.jpeg";

const ContactPage = () => {
  return (
    <>
      <Hero img={contactImg} />
      <Contact />
    </>
  );
};

export default ContactPage;