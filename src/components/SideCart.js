import React from 'react';
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context/Context";
import styled from "styled-components";

const CartWrapper = styled.div`
  position: fixed;
  top: 60px;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 1;
  transform: ${props => (props.show ? "translateX(0)" : "translateX(100%)")};
  border-left: 4px solid var(--primaryColor);
  transition: var(--mainTransition);
  overflow: scroll;
  padding: 2rem;
  @media (min-width: 576px) {
    width: 20rem;
  }
  ul {
    padding: 0 !important;
  }
  .cart-item{
    list-style: none;
  }
`;

const SideCart = () => {
  return (
      <ProductConsumer>
        {
          value => {
            const { cartOpen, closeCart, cart, cartTotal } = value;
            return(
                <CartWrapper show={cartOpen} onClick={closeCart}>
                  <ul>
                    {
                      cart.map(item => (
                          // console.log(item)
                          <li key={item.id} className="cart-item mb-4">
                            <img src={`../${item.image}`} alt="cart item" width="45"/>
                            <div className="mt-3">
                              <h6 className="text-uppercase">{item.title}</h6>
                              <h6 className="text-title text-capitalize"> تعداد : {item.count}</h6>
                            </div>
                          </li>
                      ))
                    }
                  </ul>
                  <h4 className="text-capitalize text-main">مجموع: {cartTotal} ريال</h4>
                  <div className="text-center my-5">
                    <Link to="/cart" className="main-link">
                      رفتن به سبد خرید
                    </Link>
                  </div>
                </CartWrapper>
            )
          }
        }
      </ProductConsumer>
  );
};

export default SideCart;