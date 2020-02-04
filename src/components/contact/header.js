import React from "react";
import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
from {
    opcaity: 0;
    transform: translateY(-5px);
}

to {
    opacity: 1;
    transform: translateY(0px);
}
`;

const fadeOut = keyframes`
from {
    opcaity: 1;
    transform: translateY(0px);
}

to {
    opacity: 0;
    transform: translateY(-5px);
}
`;

const Header = styled.p`
  grid-row: 1/2;
  align-self: flex-end;
  justify-self: center;
  font-size: calc(2.25rem + 3.5vw);
  font-weight: 700;
  letter-spacing: -3px;
  color: #fff;
  opacity: 0;
  animation: ${props =>
    props.state >= 0.4
      ? css`
          ${fadeIn} 650ms ease-out 500ms forwards
        `
      : css`
          ${fadeOut} 650ms ease-out 100ms forwards
        `};

  span {
    color: hsl(233, 14%, 20%);
  }
`;

function ContactHeader({ ratio }) {
  return (
    <Header state={ratio}>
      Get In <span>Touch</span>.
    </Header>
  );
}

export default ContactHeader;
