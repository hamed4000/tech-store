import React from 'react';
import Title from "../Title";
import CartColumn from "./CartColumn";
import CartTotals from "./CartTotals";
import CartList from "./CartList";

const Cart = () => {
  return (
      <section className="py-5">
        {/*title*/}
        <div className="container">
          <Title center="center" title="your cart items"/>
        </div>
        {/*cart columns*/}
        <CartColumn/>
        {/*cart List*/}
        <CartList/>
        {/*cart total*/}
        <CartTotals/>
      </section>
  );
};

export default Cart;