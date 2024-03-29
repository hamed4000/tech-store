import React from 'react';
import {ProductConsumer} from "../../context/Context";
import Title from "../Title";
import Product from "../Product";
import ProductFilter from "./ProductFilter";

const Products = () => {
  return (
      <ProductConsumer>
        {
          value => {
            const {filteredProducts} = value;
            return (
                <section className="py-5">
                  <div className="container">
                    {/*title*/}
                    <Title title="محصولات" center/>
                    {/*filtering box*/}
                    <ProductFilter/>
                    {/*count total product*/}
                    <div className="row">
                      <div className="col-10 mx-auto">
                        <h6 className="text-title">تعداد کل محصولات: {filteredProducts.length}</h6>
                      </div>
                    </div>
                    {/*products*/}
                    <div className="row py-5">
                      {
                        filteredProducts.length === 0 ? (
                            <div className="col-10 mx-auto">
                              <h3>محصول مشابهی یافت نشد</h3>
                            </div>
                        ) : (filteredProducts.map(product => {
                          return <Product key={product.id} {...product} />
                        }))
                      }
                    </div>
                  </div>
                </section>
            )
          }
        }
      </ProductConsumer>
  );
};

export default Products;