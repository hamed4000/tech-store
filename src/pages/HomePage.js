import React from 'react';
import Hero from "../components/Hero";
import {Link} from "react-router-dom";
import Services from "../components/HomePage/Services";
import Featured from "../components/HomePage/Featured";

const HomePage = () => {
  return (
      <>
        <Hero title="برترین گجت ها" max="true">
          <Link to="/products" className="main-link mt-3">همه محصولات</Link>
        </Hero>
        <Services/>
        <Featured/>
      </>
  );
};

export default HomePage;