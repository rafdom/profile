import React from "react";
import { ContextCreator } from "../../store";
import styled, { css, keyframes } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import {
  fadeUp,
  fadeDown,
  slideLeft,
  slideRight,
  colorChange,
  revertColor
} from "../../animations/animation";

const IntroText = styled.div`
  grid-row: 2/3;
  grid-column: 2/3;
  align-self: center;
  justify-self: center;
  margin: 0 1rem;
  z-index: 1;
  overflow: hidden;

  @media only screen and (max-width: 600px) {
    overflow: visible;
  }

  @media only screen and (min-width: 600px) and (max-width: 1135px) {
  }
`;

const P1 = styled(motion.p)`
  color: #fff;
  font-size: calc(2.25rem + 3.5vw);
  font-weight: 700;
  letter-spacing: -3px;

  span {
    color: hsl(233, 14%, 20%);
    margin-left: 1.5rem;

    @media only screen and (max-width: 600px) {
      margin-left: 0.5rem;
    }
  }
`;

const P2 = styled(motion.p)`
  display: flex;
  justify-content: flex-start;
  font-size: 2rem;
  font-weight: 400;
  color: #fff;
  opacity: 0;
  margin-top: -0.5rem;
  margin-left: 0.25rem;

  span:nth-child(1) {
    margin: 0px 9px;

    @media only screen and (max-width: 600px) {
      margin: 0px 5px;
    }
  }

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
    margin-left: 1.5px;
  }

  @media only screen and (min-width: 600px) and (max-width: 1135px) {
    font-size: 1.5rem;
  }
`;

const fullLg = keyframes`
  from {
    width: 0px;
  }

  to {
 width: 28.75rem;
  }
`;
const revertLg = keyframes`
  from {
    width: 28.75rem;
  }

  to {
    width: 0;
  }
`;

const fullMd = keyframes`
  from {
    width: 0px;
  }

  to {
    width: 22rem;
  }
`;
const revertMd = keyframes`
  from {
    width: 22rem;
  }

  to {
    width: 0;
  }
`;

const fullSm = keyframes`
  from {
    width: 0px;
  }

  to {
    width: 14.5rem;
  }
`;
const revertSm = keyframes`
  from {
    width: 14.5rem;
  }

  to {
    width: 0;
  }
`;

const Underline = styled(motion.div)`
  width: 0px;
  height: 5px;
  transform: translateX(6px) translateY(-5px);
  background: linear-gradient(to right, #fff 32%, hsl(233, 14%, 20%) 32%);
  animation: ${props =>
    props.target === "revert"
      ? css`
          ${fullLg} 600ms ease 2300ms both
        `
      : css`
          ${revertLg} 400ms ease both
        `};

  @media only screen and (max-width: 600px) {
    height: 2px;
    background: linear-gradient(to right, #fff 32%, hsl(233, 14%, 20%) 32%);
    animation: ${props =>
      props.target === "revert"
        ? css`
            ${fullSm} 600ms ease 2300ms both
          `
        : css`
            ${revertSm} 400ms ease both
          `};
    transform: translateX(2px);
  }
  @media only screen and (min-width: 600px) and (max-width: 1135px) {
    height: 2px;
    background: linear-gradient(to right, #fff 32%, hsl(233, 14%, 20%) 32%);
    animation: ${props =>
      props.target === "revert"
        ? css`
            ${fullMd} 600ms ease 2300ms both
          `
        : css`
            ${revertMd} 400ms ease both
          `};
    transform: translateX(2px);
  }
`;

function IntroductionTxt() {
  const { state } = React.useContext(ContextCreator);

  return (
    <AnimatePresence>
      <IntroText>
        <P1
          initial={
            state.targetClass === "revert" ? fadeUp.initial : fadeDown.initial
          }
          animate={
            state.targetClass === "revert" ? fadeUp.animate : fadeDown.animate
          }
          transition={
            state.targetClass === "revert"
              ? fadeUp.transition
              : fadeDown.transition
          }
          exit={{ opacity: 0 }}
        >
          Hi, I'm
          <span>Rafael Mariscal</span>
          <b>.</b>
        </P1>
        <P2
          initial={
            state.targetClass === "revert"
              ? slideLeft.initial
              : slideRight.initial
          }
          animate={
            state.targetClass === "revert"
              ? slideLeft.animate
              : slideRight.animate
          }
          transition={
            state.targetClass === "revert"
              ? slideLeft.transition
              : slideRight.transition
          }
          exit={{ opacity: 0 }}
        >
          Interactive
          <motion.span
            animate={
              state.targetClass === "revert"
                ? colorChange.animate
                : revertColor.animate
            }
            transition={colorChange.transition}
            exit={{ opacity: 0 }}
          >
            Front-End Developer
          </motion.span>
        </P2>
        <Underline target={state.targetClass} exit={{ opacity: 0 }} />
      </IntroText>
    </AnimatePresence>
  );
}

export default IntroductionTxt;
