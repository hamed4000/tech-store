/*برای ایجاد ستون های جدول*/
import React from 'react';

const CartColumn = () => {
  return (
      <div className="d-none d-lg-block container-fluid text-center my-5"> {/*در سایز کوچیک ستون ها حذف میشوند و جدولی نخواهیم داشت*/}
        <div className="row">

          <div className="col-10 max-auto col-lg-2">
            <p>تصویر</p>
          </div>

          <div className="col-10 max-auto col-lg-2">
            <p>نام محصول</p>
          </div>

          <div className="col-10 max-auto col-lg-2">
            <p>قیمت</p>
          </div>

          <div className="col-10 max-auto col-lg-2">
            <p>تعداد</p>
          </div>

          <div className="col-10 max-auto col-lg-2">
            <p>حذف</p>
          </div>

          <div className="col-10 max-auto col-lg-2">
            <p>مجموع</p>
          </div>

        </div>
      </div>
  );
};

export default CartColumn;