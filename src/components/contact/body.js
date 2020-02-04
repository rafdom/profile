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

const Body = styled.p`
  grid-row: 2/3;
  width: calc(10rem + 25vw);
  align-self: center;
  justify-self: center;
  word-wrap: break-word;
  font-size: calc(1rem + 0.5vw);
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
  color: hsl(233, 14%, 20%);
  opacity: 0;
  animation: ${props =>
    props.state >= 0.4
      ? css`
          ${fadeIn} 650ms ease-out 700ms forwards
        `
      : css`
          ${fadeOut} 650ms ease-out 100ms forwards
        `};

  span {
    font-weight: 800;
  }
`;

function ContactBody({ ratio }) {
  return (
    <Body state={ratio}>
      I am currently open for <span>new opportunities</span>, my inbox is always
      open. Whether for a potential project or just to say hi, I'll make sure to
      answer your email!
    </Body>
  );
}

export default ContactBody;
