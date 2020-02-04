import React from "react";
import styled, { keyframes, css } from "styled-components";
import { ContextCreator } from "../../store/index";
import { AboutText } from "../introduction/header";
import { useInView } from "react-intersection-observer";

const fadeIn = keyframes`
from {
    opcaity: 0;
}

to {
    opacity: 1;
}
`;

const fadeOut = keyframes`
from {
    opcaity: 1;
}

to {
    opacity: 0;
}
`;

const Header = styled(AboutText)`
  grid-column: 1/2;
  grid-row: 1/4;
  justify-self: flex-start;
  align-self: center;
  transform: rotate(-90deg) translate(-0.6vw, -0.92vw);
  display: block;
  opacity: 0;
  animation: ${props =>
    props.state > 0.35
      ? css`
          ${fadeIn} 650ms ease-out 100ms forwards
        `
      : css`
          ${fadeOut} 650ms ease-out 100ms forwards
        `};

  &::after {
    content: "";
    background: linear-gradient(to right, #fff 47%, #e6bb00 47%);
    width: 100%;
    height: 1rem;
    margin-top: 0.5rem;
    display: block;
  }

  span {
    color: #e6bb00;
  }

  @media only screen and (max-width: 740px) {
    opacity: 0;
    animation: ${props =>
      props.state > 0.35
        ? css`
            ${fadeIn} 650ms ease-out 400ms forwards
          `
        : css`
            ${fadeOut} 650ms ease-out 100ms forwards
          `};
  }

  @media only screen and (max-height: 640px) {
    transform: translateY(150px);
  }
`;

function ProjectHeader() {
  const {
    state: { landingPage }
  } = React.useContext(ContextCreator);
  const [ref, , entry] = useInView({
    threshold: 0.35,
    triggerOnce: true
  });

  return (
    <>
      {!landingPage && (
        <Header ref={ref} state={entry && entry.intersectionRatio}>
          wo<span>rks</span>
        </Header>
      )}
    </>
  );
}

export default ProjectHeader;
