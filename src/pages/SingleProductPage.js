import React from 'react';
import {Link} from "react-router-dom";
import {ProductConsumer} from "../context/Context";
import singleProductImg from "../images/singleProductBcg.jpeg";
import Hero from "../components/Hero";

const SingleProductPage = () => {
  return (
      <>
        <Hero img={singleProductImg} title="single Product"/>
        <ProductConsumer>
          {
            value => {
              const {
                singleProduct: {
                  company,
                  description,
                  id,
                  price,
                  title,
                  image
                }, addToCart, loading
              } = value;

              if (loading) {
                console.log("hello from loading");
                return <h1>منتظر بمانید....</h1>;
              }
              return (
                  <section className="py-5">
                    <div className="container">
                      <div className="row">
                        <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                          <img
                              src={`../${image}`}
                              // src={image}
                              alt="single product"
                              className="img-fluid"
                          />
                        </div>
                        <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                          <h5 className="text-title mb-4">مدل :{title} </h5>
                          <h5 className="text-capitalize text-muted mb-4">
                            سازنده : {company}
                          </h5>
                          <h5 className="text-main text-capitalize mb-4">
                            {price} قیمت : ريال
                          </h5>
                          <p className="text-capitalize text-title mt-3">
                            درباره محصول :
                          </p>
                          <p>{description}</p>
                          <button
                              type="button"
                              className="main-link"
                              style={{margin: "0.75rem"}}
                              onClick={() => addToCart(id)}
                          >
                            اضافه به سبد خرید
                          </button>
                          <Link
                              to="/products"
                              className="main-link"
                              style={{margin: "0.75rem"}}
                          >
                            بازگشت به صفحه محصولات
                          </Link>
                        </div>
                      </div>
                    </div>
                  </section>
              )
            }
          }
        </ProductConsumer>
      </>
  );
};

export default SingleProductPage;