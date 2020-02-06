import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
from {
    opcaity: 0;
}

to {
    opacity: 1;
}
`;

const EmailDiv = styled.div`
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.2rem;
  color: #e6bb00;
  transform: rotate(90deg) translate(-9rem, -4rem);
  display: relative;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 100;
  opacity: 0;
  animation: ${fadeIn} 450ms ease-out 3700ms forwards;

  &::after {
    content: "";
    display: block;
    position: absolute;
    height: 3px;
    width: 80px;
    right: -76px;
    bottom: 6px;
    background: #e6bb00;
  }

  @media only screen and (max-width: 740px) {
    display: none;
  }
`;

function Email() {
  return <EmailDiv>rd1.dgm@gmail.com</EmailDiv>;
}

export default Email;
