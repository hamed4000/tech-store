import React from "react";
import styled from "styled-components";
import {ProductConsumer} from "../context/Context";

const FooterWrapper = styled.footer`
  background: var(--darkGrey);
  color: var(--mainWhite);
  .icon{ // کلاس که ایکن دارند
    font-size: 1.5rem;
    color: var(--mainWhite);
    transition: var(--mainTransition);
  }
  .icon:hover{
    color: var(--primaryColor);
    cursor: pointer;
  }
`;

const Footer = () => {
  return (
      <ProductConsumer>
        {value => {
          return (
              <FooterWrapper className="py-3">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <p className="text-capitalize">
                        copyright &copy; tech store {new Date().getFullYear()} all
                        right reserved
                      </p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-around">
                      {value.socialLinks.map(item => (
                          <a href={item.url} key={item.id}>
                            {item.icon}
                          </a>
                      ))}
                    </div>
                  </div>
                </div>
              </FooterWrapper>
          );
        }}
      </ProductConsumer>
  );
};

export default Footer;
