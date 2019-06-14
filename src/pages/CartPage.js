import React from 'react';
import Hero from "../components/Hero";
import cartBcg from "../images/storeBcg.jpeg"
import Cart from "../components/CartPage"; // بخاطر package.json که فولدر قرار دادیم دیگه لازم بنوشتن Cart.js نشده

const CartPage = () => {
  return (
      <>
        <Hero img={cartBcg}/>
        <Cart/>
      </>
  );
};

export default CartPage;