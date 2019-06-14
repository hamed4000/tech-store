/* لیست از محصولاتی که در سبد خرید هستند*/
import React from 'react';
import {ProductConsumer} from "../../context/Context";
import CartItem from "./CartItem";

const CartList = () => {
  return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <ProductConsumer>
              {
                value => {
                  const {cart, increment, decrement, removeItem} = value;
                  if (cart.length === 0) {
                    return (
                        <h2 className="text-center text-title my-4"> سبد خرید شما خالیست </h2>
                    )
                  }
                  return (
                      <>
                        {
                          cart.map(item => (
                              <CartItem key={item.id}
                                        {...item}
                                        increment={increment}
                                        decrement={decrement}
                                        removeItem={removeItem}/>
                          ))
                        }
                      </>
                  )
                }
              }
            </ProductConsumer>
          </div>
        </div>
      </div>
  );
};

export default CartList;