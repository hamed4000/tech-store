import React from 'react';
import styled, { css } from "styled-components";

const TitleWrapper = styled.div`
  text-align: ${props => (props.center ? "center" : "right")};
  .title-underline {
    height: 0.25rem;
    width: 7rem;
    background: var(--primaryColor);
    float: right;
    ${props => props.center && css`
        margin: 0 auto;
        float: none;
     `}
  }
`;

const Title = ({title, center}) => {
  return (
      <TitleWrapper className="row" center={center}>
        <div className="col">
          <h2 className="text-title">{title}</h2>
          <div className="title-underline" />
        </div>
      </TitleWrapper>
  );
};

export default Title;