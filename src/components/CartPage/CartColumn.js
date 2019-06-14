/*برای ایجاد ستون های جدول*/
import React from 'react';

const CartColumn = () => {
  return (
      <div className="d-none d-lg-block container-fluid text-center my-5"> {/*در سایز کوچیک ستون ها حذف میشوند و جدولی نخواهیم داشت*/}
        <div className="row">

          <div className="col-10 max-auto col-lg-2">
            <p>product</p>
          </div>

          <div className="col-10 max-auto col-lg-2">
            <p>name of product</p>
          </div>

          <div className="col-10 max-auto col-lg-2">
            <p>price</p>
          </div>

          <div className="col-10 max-auto col-lg-2">
            <p>quantity</p>
          </div>

          <div className="col-10 max-auto col-lg-2">
            <p>remove</p>
          </div>

          <div className="col-10 max-auto col-lg-2">
            <p>total</p>
          </div>

        </div>
      </div>
  );
};

export default CartColumn;