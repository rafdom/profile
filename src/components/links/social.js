import React from "react";
import styled, { keyframes } from "styled-components";
import github from "../../assets/github-yellow.svg";
import linkedin from "../../assets/linkedin-yellow.svg";

const fadeIn = keyframes`
from {
    opcaity: 0;
}

to {
    opacity: 1;
}
`;

const IconLinks = styled.div`
  display: relative;
  position: fixed;
  bottom: 50vh;
  left: 0;
  z-index: 100;
  opacity: 0;
  margin-left: 0.6rem;
  animation: ${fadeIn} 450ms ease-out 3900ms forwards;

  img {
    width: 35px;
    height: 35px;
    margin-bottom: 0.5rem;
    transition: filter 350ms ease-out, transform 150ms ease-out;

    &:hover {
      cursor: pointer;
      filter: grayscale(50%);
      transform: rotate(13deg);
    }
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    height: 3px;
    width: 30px;
    left: -25px;
    bottom: 66.5px;
    background: #e6bb00;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    height: 3px;
    width: 30px;
    left: -25px;
    bottom: 22.5px;
    background: #e6bb00;
  }

  @media only screen and (max-width: 740px) {
    display: none;
  }
`;

function Social() {
  return (
    <IconLinks>
      <img
        src={github}
        alt=""
        onClick={() => window.open("https://github.com/rd1dgm", "_blank")}
      />
      <img
        src={linkedin}
        alt=""
        onClick={() => window.open("https://linkedin.com/in/rdd-m", "_blank")}
      />
    </IconLinks>
  );
}

export default Social;
