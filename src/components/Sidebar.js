import React from 'react';
<<<<<<< HEAD
import styled from "styled-components";
import {Link} from "react-router-dom";
import {ProductConsumer} from "../context/Context";

const SideWrapper = styled.nav`
  position: fixed;
  top: 61px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: var(--mainGrey);
  border-right: 4px solid var(--primaryColor);
  transform: ${props => (props.show ? "translateX(0)" : "translateX(-100%)")};
  transition: var(--mainTransition);
  ul{
    list-style-type: none;
    padding: 0 !important;
  }
  .sidebar-link{
    display: block;
    font-size: 1.5rem;
    text-transform: capitalize;
    color: var(--mainBlack);
    padding: 0.5rem 1.5rem;
    background: transparent;
    transition: var(--mainTransition);
  }
  .sidebar-link:hover{
    background: var(--primaryColor);
    color: var(--mainWhite);
    padding: 0.5rem 1.5rem 0.5rem 2.5rem;
    text-decoration: none;
  }
  @media (min-width: 576px) {
    width: 20rem;
  }
`;

const Sidebar = () => {
  return (
      <ProductConsumer>
        {
          value => {
            const {links, sidebarOpen, handleSidebar} = value;
            return (
                <SideWrapper show={sidebarOpen}>
                  <ul>
                    {
                      links.map((link) => {
                        return (
                            <li key={link.id}>
                              <Link to={link.path}
                                    className="sidebar-link"
                                    onClick={handleSidebar}
                              >
                                {link.text}
                              </Link>
                            </li>
                        )
                      })
                    }
                  </ul>
                </SideWrapper>
            )
          }
        }
      </ProductConsumer>
=======

const Sidebar = () => {
  return (
      <div>
        side bar
      </div>
>>>>>>> 05074428dc028fe763ac3b74f78682bf0ed77a8f
  );
};

export default Sidebar;