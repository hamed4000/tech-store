import React from 'react';
import {Link} from "react-router-dom";
import { ProductConsumer } from "../../context/Context";
import Title from "../Title";
import Product from "../Product";

const Featured = () => {
  return (
      <section className="py-5">
        <div className="container">
          {/*title*/}
          <Title title="محصولات برگزیده" center="true"/>
        {/*  products*/}
          <div className="row">
            <ProductConsumer>
              {
                value => {
                  const { featuredProducts } = value;
                  return featuredProducts.map( product => (
                      <Product key={product.id} {...product} />
                  ))
                }
              }
            </ProductConsumer>
          </div>
          <div className="row mt-5">
            <div className="col text-center">
              <Link to="/products" className="main-link">
                دیگر محصولات
              </Link>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Featured;