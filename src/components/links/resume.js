import React from "react";
import resume from "../../assets/RafaelMariscal-Resume.pdf";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
from {
    opcaity: 0;
}

to {
    opacity: 1;
}
`;

const ResumeP = styled.p`
  padding: 3px 14.4px 6px 14.4px;
  border: 2px solid #e6bb00;
  border-radius: 4px;
  color: #e6bb00;
  font-size: calc(0.6rem + 0.2vw);
  font-weight: 600;
  letter-spacing: 1px;
  display: relative;
  position: fixed;
  top: calc(0.7rem + 0.05vw);
  right: 3.5rem;
  z-index: 100;
  opacity: 0;
  transition: background-color 350ms ease-out, color 350ms ease-out;
  animation: ${fadeIn} 450ms ease-out 3500ms forwards;

  &:hover {
    cursor: pointer;
    color: #1d1e26;
    background-color: #e6bb00;
  }

  @media only screen and (max-width: 740px) {
    display: none;
  }
`;

function Resume() {
  return (
    <a
      href={resume}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <ResumeP> Resume</ResumeP>
    </a>
  );
}

export default Resume;
