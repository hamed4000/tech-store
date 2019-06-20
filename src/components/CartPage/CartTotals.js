/*باکسی در سبد خرید که اطلاعات کامل خریدها را ارایه میده*/
import React from 'react';
import {ProductConsumer} from "../../context/Context";

const CartTotals = () => {
  return (
      <div className="container">
        <div className="row">
          <ProductConsumer>
            {
              value => {
                const {clearCart, cartSubTotal, cartTax, cartTotal} = value;
                return (
                    <div className="col text-title text-center my-4">
                      <button className="btn btn-outline-danger mb-4" onClick={clearCart}>پاک کردن سبد خرید</button>
                      <h3>   قیمت محصول : {cartSubTotal}ريال</h3>
                      <h3>   مالیات : {cartSubTotal}ريال</h3>
                      <h3>   مجموع : {cartSubTotal}ريال</h3>
                    </div>
                    
                )
              }
            }
          </ProductConsumer>
        </div>
      </div>
  );
};

export default CartTotals;