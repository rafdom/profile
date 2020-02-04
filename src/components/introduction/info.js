import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { ContextCreator } from "../../store";
import { Logos } from "../../assets/about-logos";

const {
  affinity,
  css,
  express,
  git,
  github,
  gitlab,
  html,
  illustrator,
  jira,
  js,
  nodejs,
  react,
  sketch,
  solidity,
  vue,
  xd
} = Logos;

const fadeIn = keyframes`
from {
    opcaity: 0;

}

to {
    opacity: 1;
}
`;

const AboutBody = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  align-self: center;
  justify-self: flex-start;
  width: calc(24vw + 9%);
  word-wrap: break-word;
  font-size: calc(1rem + 0.5vw);
  font-weight: 600;
  line-height: 1.5;
  text-align: justify;
  text-justify: auto;
  display: ${props => (props.state === "fill" ? "initial" : "none")};
  animation: ${fadeIn} 600ms ease-out 1050ms forwards;
  transform: translateY(-9.5rem);
  color: hsl(233, 14%, 20%);
  opacity: 0;
  z-index: 20;

  b {
    color: #fff;
  }

  strong {
    font-weight: 900;
  }

  p {
    font-size: calc(0.7rem + 0.3vw);
    letter-spacing: 0px;
    text-align: left;
    animation: ${fadeIn} 600ms ease-out 1300ms forwards;
    transform: translateY(2.5rem);
    opacity: 0;

    @media only screen and (max-width: 740px) {
      justify-self: center;
      text-align: center;
    }

    @media only screen and (min-width: 741px) and (max-width: 845px) {
      margin-bottom: 1rem;
    }
  }

  @media only screen and (max-width: 740px) {
    justify-self: center;
    width: 75vw;
    transform: translateY(-6.5rem);
  }

  @media only screen and (min-width: 741px) and (max-width: 845px) {
    width: 33.5vw;
  }

  @media only screen and (min-width: 845px) and (max-width: 1550px) {
    width: 40vw;
  }
`;

const AboutList = styled.div`
  grid-column: 2/3;
  grid-row: 3/4;
  justify-self: flex-start;
  margin-top: -5.5rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(11rem, 1fr));
  grid-auto-rows: 3.5rem 2rem 2rem 2rem 2rem 3.5rem 2rem 2rem 3.5rem 2rem 2rem;
  gap: 0px 10px;
  display: ${props => (props.state === "fill" ? "grid" : "none")};
  animation: ${fadeIn} 600ms ease-out 1450ms forwards;
  opacity: 0;
  z-index: 20;

  p {
    color: hsl(233, 14%, 20%);
    font-size: calc(0.8rem + 0.3vw);
    font-weight: 600;

    &::before,
    span::before {
      display: block;
      float: left;
      margin-right: 5px;
      width: calc(15px + 0.5vw);
      height: calc(15px + 0.5vw);
    }
  }

  p:nth-child(1) {
    grid-column: 1/3;
    margin: 1.5rem 0 0 1.6rem;
    font-weight: 800;
    transform: translate(-1.5rem, -0.05rem);
    text-decoration: underline;

    @media only screen and (max-width: 750px) {
      justify-self: center;
    }
  }

  p:nth-child(2)::before {
    grid-column: 1/2;
    content: "";
    background: url(${js});
    background-repeat: no-repeat;
    background-size: contain;
  }

  p:nth-child(3) {
    margin-left: -1.8rem;
    &::before {
      content: "";
      background: url(${html});
      background-repeat: no-repeat;
      background-size: contain;
      transform: translateX(0.95rem);
    }
  }

  p > span::before {
    content: "";
    background: url(${css});
    background-repeat: no-repeat;
    background-size: contain;
    transform: translate(0.5rem, -0.01rem);
    ${"" /* transform: translateY( -0.01rem); */}
  }

  p:nth-child(4)::before {
    content: "";
    background: url(${react});
    background-repeat: no-repeat;
    background-size: contain;
  }

  p:nth-child(6)::before {
    content: "";
    background: url(${nodejs});
    background-repeat: no-repeat;
    background-size: cover;
  }

  p:nth-child(7)::before {
    content: "";
    background: url(${express});
    background-repeat: no-repeat;
    background-size: cover;
  }

  p:nth-child(5)::before {
    content: "";
    background: url(${vue});
    background-repeat: no-repeat;
    background-size: contain;
  }
  p:nth-child(8)::before {
    content: "";
    background: url(${solidity});
    background-repeat: no-repeat;
    background-size: contain;
  }

  p:nth-child(9) {
    grid-column: 1/3;
    margin: 2.5rem 0 0 1.6rem;
    font-weight: 800;
    transform: translate(-1.5rem, -1rem);
    text-decoration: underline;

    @media only screen and (max-width: 750px) {
      justify-self: center;
    }
  }

  p:nth-child(10)::before {
    content: "";
    background: url(${illustrator});
    background-repeat: no-repeat;
    background-size: contain;
    float: left;
    width: calc(15px + 0.5vw);
    height: calc(15px + 0.5vw);
  }

  p:nth-child(11)::before {
    content: "";
    background: url(${sketch});
    background-repeat: no-repeat;
    background-size: contain;
  }

  p:nth-child(12)::before {
    content: "";
    background: url(${xd});
    background-repeat: no-repeat;
    background-size: contain;
  }

  p:nth-child(13)::before {
    content: "";
    background: url(${affinity});
    background-repeat: no-repeat;
    background-size: contain;
  }

  p:nth-child(14) {
    grid-column: 1/3;
    margin: 2.5rem 0 0 1.6rem;
    font-weight: 800;
    transform: translate(-1.5rem, -1rem);
    text-decoration: underline;

    @media only screen and (max-width: 750px) {
      justify-self: center;
    }
  }

  p:nth-child(15)::before {
    content: "";
    background: url(${github});
    background-repeat: no-repeat;
    background-size: contain;
  }

  p:nth-child(16)::before {
    content: "";
    background: url(${gitlab});
    background-repeat: no-repeat;
    background-size: contain;
  }

  p:nth-child(17)::before {
    content: "";
    background: url(${git});
    background-repeat: no-repeat;
    background-size: contain;
  }

  p:nth-child(18)::before {
    content: "";
    background: url(${jira});
    background-repeat: no-repeat;
    background-size: contain;
  }

  @media only screen and (max-width: 550px) {
    p {
      margin-left: 1rem;
      justify-self: flex-start;
    }
  }

  @media only screen and (max-width: 740px) {
    margin-top: -5rem;
    justify-self: center;
    grid-template-columns: repeat(2, minmax(75px, 180px));

    p {
      justify-self: flex-start;
    }
  }

  @media only screen and (min-width: 740px) and (max-width: 845px) {
    margin-top: -7rem;
    grid-template-columns: repeat(2, minmax(100px, 0.6fr));
  }
`;

function IntroductionParagraph() {
  const {
    state: { targetClass: target }
  } = useContext(ContextCreator);

  return (
    <>
      <AboutBody state={target}>
        Hello! I’m Rafael, a <b>front-end developer </b> & <b> UI Designer</b>{" "}
        based in Toronto, ON who has an obsession for building interactive and
        intuitive User Interface and User Experience. I develop dynamic{" "}
        <strong>web</strong> and <strong>blockchain applications</strong> that
        provides pixel-perfect interface.
        <p>The tools and technologies i've been working with recently:</p>
      </AboutBody>
      <AboutList state={target}>
        <p>Programming</p>
        <p>Javascript(ES6+)</p>
        <p>
          HTML & <span>(S)CSS</span>
        </p>
        <p>React</p>
        <p>Vue</p>
        <p>Node.js</p>
        <p>Express.js</p>
        <p>Solidity (Ethereum)</p>
        <p>Design</p>
        <p>Adobe Illustrator</p>
        <p>Sketch</p>
        <p>Adobe XD</p>
        <p>Affinity Designer</p>
        <p>Project Management & Collaboration</p>
        <p>Github</p>
        <p>Gitlab</p>
        <p>Git</p>
        <p>Jira</p>
      </AboutList>
    </>
  );
}

export default IntroductionParagraph;
