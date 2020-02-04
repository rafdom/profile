import React from "react";
import { useInView } from "react-intersection-observer";
import useActions from "../../store/actions";
import { ContextCreator } from "../../store/index";
import styled, { keyframes } from "styled-components";

const THRESHHOLD = [
  0.9,
  0.91,
  0.92,
  0.93,
  0.94,
  0.95,
  0.96,
  0.97,
  0.98,
  0.99,
  1
];

const fadeIn = keyframes`
 from {
    opacity: 0;
    width: 0vw;
  }

  to {
    opacity: 1;
    width: 100vw;
  }
`;

const IntroBox = styled.div`
  background: hsl(49, 100%, 45%);
  height: ${props => (props.clientRect >= -20 ? "50vh" : "120vh")};
  width: 100vw;
  grid-row: 1/4;
  grid-column: 1/4;
  opacity: 0;
  transition: height 1100ms ease;
  animation: ${fadeIn} 800ms ease 250ms forwards;

  @media only screen and (max-height: 1000px) {
    height: ${props => (props.clientRect >= -20 ? "50vh" : "110%")};
  }
`;

function IntroductionBG() {
  const { getTargetClass, setLandingPage } = useActions();
  const [ref, , entry] = useInView({ threshold: THRESHHOLD });
  const target =
    entry && entry.target.classList[entry.target.classList.length - 1];
  const boundingClient = entry && entry.boundingClientRect.top;

  React.useEffect(() => {
    getTargetClass(target);
    boundingClient >= -20 ? setLandingPage(true) : setLandingPage(false);
  }, [target, getTargetClass, setLandingPage, boundingClient]);

  return (
    <IntroBox
      ref={ref}
      className={boundingClient >= -20 ? "revert" : "fill"}
      clientRect={boundingClient}
    ></IntroBox>
  );
}

export default IntroductionBG;
