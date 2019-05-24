import React from 'react';
import {FaBars, FaCartPlus} from "react-icons/fa";
import {ProductConsumer} from "../context/Context";
import logo from "../images/logo.svg"
import styled from "styled-components";

const NavWrapper = styled.nav`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  background: var(--mainGray);
  border-bottom: 3px solid var(--primaryColor);
  .nav-center{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-icon{
    font-size: 1.5rem;
    cursor:pointer;
  }
  .nav-cart{
    position:relative;
  }
  .cart-items{
    font-size: .85rem;
    position: absolute;
    top: -8px;
    right: -8px;
    padding: 0 5px;
    background: var(--primaryColor);
    color: var(--mainWhite);
    border-radius: 50%;
  }
  
`;
const NavigationBar = () => {
  return (
      <ProductConsumer>
        {
          value => {
            const {cartItems, handleSidebar, handleCart} = value;
            return (
                <NavWrapper>
                  <div className="nav-center">
                    <FaBars className="nav-icon" onClick={handleSidebar}/>
                    <img src={logo} alt="tech store logo"/>
                    <div className="nav-cart">
                      <FaCartPlus className="nav-icon" onClick={handleCart}/>
                      <div className="cart-items">{cartItems}</div>
                    </div>
                  </div>
                </NavWrapper>
            )
          }
        }
      </ProductConsumer>
  );
};

export default NavigationBar;