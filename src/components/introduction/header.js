import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { ContextCreator } from "../../store";

const fadeIn = keyframes`
from {
    opcaity: 0;

}

to {
    opacity: 1;
}
`;

export const AboutText = styled.div`
  grid-column: 1/2;
  grid-row: 1/4;
  justify-self: flex-end;
  align-self: center;
  font-size: calc(5.25rem + 5.5vw);
  font-weight: 900;
  letter-spacing: -3px;
  line-height: 0.9;
  text-transform: uppercase;
  text-align: right;
  color: #fff;
  display: ${props => (props.state === "fill" ? "initial" : "none")};
  transform: rotate(-90deg) translateX(-4vw);
  animation: ${fadeIn} 600ms ease-out 850ms forwards;
  opacity: 0;
  z-index: 20;

  span {
    color: hsl(233, 14%, 20%);
  }

&::after {
    content: "";
    background: linear-gradient(to right, #fff 40%, hsl(233, 14%, 20%) 40% );
    width: 100%;
    height: 1rem;
    margin-top: .5rem;
    display: block;
  }
}

  @media screen and (max-width: 740px) {
    grid-column: 2/3;
    grid-row: 1/2;
    justify-self: center;
    align-self: flex-end;
    transform: none;
    margin-bottom: 9.4rem;
    letter-spacing: 0.15rem;
    font-size: calc(2.25rem + 5.5vw);
  }

  @media screen and (min-width: 740px) and (max-width:845px) {
    margin-right: -5rem;
  }
`;

function IntroductionAbout() {
  const {
    state: { targetClass: target }
  } = useContext(ContextCreator);

  return (
    <AboutText state={target}>
      ab<span>out</span>
    </AboutText>
  );
}

export default IntroductionAbout;
