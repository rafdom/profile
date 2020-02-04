import React from "react";
import { ContextCreator } from "../../store";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import Arrow from "../../assets/arrow-down.svg";

const IntroArrow = styled.div`
  grid-column: 2/3;
  grid-row: 3/4;
  align-self: flex-end;
  justify-self: center;
  opacity: 0;
`;

const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
 `;
const fadeOut = keyframes`
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
 `;

const FadeIn = styled(IntroArrow)`
  animation: ${fadeIn} 600ms ease 3000ms forwards;
`;

const FadeOut = styled(IntroArrow)`
  animation: ${fadeOut} 600ms ease forwards;
`;

const ScrollDown = styled.div`
  letter-spacing: 1px;
  font-weight: 900;
  font-size: 0.75rem;
  transform: rotate(-90deg) translateX(1rem);
  color: hsl(233, 14%, 20%);

  @media only screen and (max-width: 600px) {
    font-weight: 700;
    font-size: 0.65rem;
    transform: rotate(-90deg) translate(0.7rem, -0.25rem);
  }
`;

const ArrowDown = styled(motion.div)`
  background: url(${Arrow}) no-repeat;
  background-repeat: no-repeat;
  position: relative;
  height: 16px;
  width: 16px;
  left: 17px;

  @media only screen and (max-width: 600px) {
    position: relative;
    height: 13px;
    width: 13px;
    left: 10px;
  }
`;

function IntroductionArrow() {
  const { state } = React.useContext(ContextCreator);
  return state.targetClass === (undefined || "revert") ? (
    <FadeIn>
      <ScrollDown>Scroll</ScrollDown>
      <ArrowDown
        animate={{
          translateY: ["5%", "15%", "90%"]
        }}
        transition={{ duration: 0.4, yoyo: Infinity }}
      />
    </FadeIn>
  ) : (
    <FadeOut></FadeOut>
  );
}

export default IntroductionArrow;
