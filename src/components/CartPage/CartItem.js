/*هر محصولی از لیست خرید در یک ردیف جدول قرار میگیره که این کامپوننت مسعول ایجاد ردیف هست*/
import React from "react";
import {FaTrash, FaPlusSquare, FaMinusSquare} from "react-icons/fa";

const CartItem = ({decrement, increment, removeItem, id, title, price, count, total, image}) => {
  return (
      <div className="row mt-5 mt-lg-0 text-center align-items-center">
        {/*image*/}
        <div className="col-10 mx-auto col-lg-2 pb-2">
          <img src={image} alt="product" width="60" className="img-fluid"/>
        </div>
        {/*name*/}
        <div className="col-10 mx-auto col-lg-2 pb-2">
          <span className="d-lg-none">product :</span>
          {/* چون در حالت صفحه کوچیک میخواهیم جدول نباشد این را قرار میدهیم پس در حالت بزرگ این حرف میشه */}
          {title}
        </div>
        {/*price*/}
        <div className="col-10 mx-auto col-lg-2 pb-2">
          <span className="d-lg-none">price :</span>${price}
        </div>
        {/*count and increment and decrement*/}
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
          <div className="d-flex justify-content-center align-items-center">
            <FaMinusSquare className="cart-icon text-primary" onClick={() => decrement(id)}/>
            <span className="text-title text-muted mx-3">{count}</span>
            <FaPlusSquare className="cart-icon text-primary" onClick={() => increment(id)}/>
          </div>
        </div>
        {/*trash icon*/}
        <div className="col-10 mx-auto col-lg-2 pb-2">
          <FaTrash className="text-danger cart-icon" onClick={() => removeItem(id)}/>
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <strong className="text-muted">item total :</strong>${total}
        </div>
      </div>
  );
};

export default CartItem;
