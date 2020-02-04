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

const Button = styled.button`
  height: 50px;
  margin-top: 1rem;
  padding: 0.5rem 1.5rem;
  border: 3px solid hsl(233, 14%, 20%);
  border-radius: 6px;
  color: #hsl(233, 14%, 20%);
  font-size: calc(0.7rem + 0.3vw);
  font-weight: 700;
  transition: background-color 350ms ease-out, color 350ms ease-out;
  opacity: 0;
  animation: ${props =>
    props.state >= 0.4
      ? css`
          ${fadeIn} 650ms ease-out 900ms forwards
        `
      : css`
          ${fadeOut} 650ms ease-out 100ms forwards
        `};

  &:hover {
    cursor: pointer;
    background-color: hsl(233, 14%, 20%);
    color: #fff;
  }
`;

function ContactButton({ ratio }) {
  return (
    <a
      href="mailto:rd1.dgm@gmail.com"
      style={{ gridRow: "3/4", justifySelf: "center", cursor: "default" }}
    >
      {" "}
      <Button state={ratio}>Say Hello!</Button>
    </a>
  );
}

export default ContactButton;
