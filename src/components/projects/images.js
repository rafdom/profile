import React from "react";
import styled, { keyframes, css } from "styled-components";
import { useInView } from "react-intersection-observer";
import { Images } from "../../assets/project-images";
import { FirstImageInfo, SecondImageInfo, ThirdImageInfo } from "./info";

const { Iris, Microtreaty, SustainEx } = Images;

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

const ImageContainer = styled.div`
  grid-column: 1/4;
  grid-row: 1/4;
  align-self: center;
  justify-self: flex-end;
  width: 60vw;
  height: 100vh;
  display: grid;
  grid-template-columns: minmax(25rem, 1fr) minmax(10rem, 1fr) minmax(
      2.5rem,
      0.2fr
    );
  grid-template-rows: 0.3fr repeat(3, 1fr);
  gap: 3.5rem 0;

  @media only screen and (max-width: 740px) {
    grid-row: 2/4;
    width: 100vw;
    height: 100%;
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 740px) {
    grid-template-columns: 1fr;
  }
  @media only screen and (min-width: 741px) and (max-width: 1220px) {
    grid-template-columns: minmax(10rem, 1fr) minmax(10rem, 1fr) minmax(
        2.5rem,
        0.2fr
      );
  }
`;

const SubHeader = styled.div`
  grid-column: 1/3;
  grid-row: 1/2;
  justify-self: flex-start;
  align-self: center;
  color: #e6bb00;
  font-size: calc(1rem + 1vw);
  font-weight: 900;
  opacity: 0;
  animation: ${props =>
    props.state > 0.5
      ? css`
          ${fadeIn} 350ms ease-out 300ms forwards
        `
      : css`
          ${fadeOut} 350ms ease-out forwards
        `};

  @media only screen and (max-width: 740px) {
    justify-self: center;
    align-self: center;
  }
`;

const FirstImage = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
  background: url(${SustainEx});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 15% 0%;
  width: 99%;
  height: 99%;
  opacity: 0;
  filter: grayscale(80%);
  transition: filter 300ms ease-out, width 150ms ease-out, height 150ms ease-out;
  animation: ${props =>
    props.state > 0.5
      ? css`
          ${fadeIn} 650ms ease-out 200ms forwards
        `
      : css`
          ${fadeOut} 650ms ease-out 100ms forwards
        `};

  &:hover {
    width: 100%;
    height: 100%;
    filter: none;
  }

  @media only screen and (max-width: 1220px) {
    grid-column: 1/3;
    filter: opacity(20%);
  }
`;

const SecondImage = styled(FirstImage)`
  grid-column: 1/2;
  grid-row: 3/4;
  background: url(${Microtreaty});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 30% 0%;
  transition: filter 300ms ease-out, width 150ms ease-out, height 150ms ease-out;
  animation: ${props =>
    props.state > 0.5
      ? css`
          ${fadeIn} 650ms ease-out 400ms forwards
        `
      : css`
          ${fadeOut} 650ms ease-out 100ms forwards
        `};
`;

const ThirdImage = styled(FirstImage)`
  grid-column: 1/2;
  grid-row: 4/5;
  background: url(${Iris});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 35% 0%;
  transition: filter 300ms ease-out, width 150ms ease-out, height 150ms ease-out;
  animation: ${props =>
    props.state > 0.5
      ? css`
          ${fadeIn} 650ms ease-out 600ms forwards
        `
      : css`
          ${fadeOut} 650ms ease-out 100ms forwards
        `};
`;

function ProjectImages() {
  const [ref, , entry] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  return (
    <>
      <ImageContainer ref={ref}>
        <SubHeader state={entry && entry.intersectionRatio}>
          Recent Projects:
        </SubHeader>
        <FirstImage state={entry && entry.intersectionRatio} />
        <FirstImageInfo state={entry && entry.intersectionRatio} />
        <SecondImage state={entry && entry.intersectionRatio} />
        <SecondImageInfo state={entry && entry.intersectionRatio} />
        <ThirdImage state={entry && entry.intersectionRatio} />
        <ThirdImageInfo state={entry && entry.intersectionRatio} />
      </ImageContainer>
    </>
  );
}

export default ProjectImages;
