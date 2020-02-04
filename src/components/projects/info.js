import React from "react";
import styled, { keyframes, css } from "styled-components";
import MicrotreatyAnimation from "../../assets/microtreaty.mp4";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Logos } from "../../assets/about-logos";

const { githubY } = Logos;

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "3px solid #e6bb00",
    boxShadow: theme.shadows[5]
  }
}));

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

const ImageInfo = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  margin-top: -1rem;
  display: grid;
  grid-template-rows: 1fr auto repeat(2, 1fr);
  opacity: 0;
  animation: ${props =>
    props.state > 0.5
      ? css`
          ${fadeIn} 650ms ease-out 200ms forwards
        `
      : css`
          ${fadeOut} 650ms ease-out 100ms forwards
        `};

  p {
    justify-self: flex-end;
    text-align: right;
    font-weight: 600;
    word-wrap: break-word;
    cursor: default;
    z-index: 98;
  }

  p:nth-child(1) {
    grid-row: 1/2;
    align-self: center;
    font-size: calc(0.25rem + 1.25vw);
    color: #fff;

    span {
      font-size: calc(0.7rem + 0.3vw);
      color: #00e658;
    }
  }

  p:nth-child(2) {
    grid-row: 2/3;
    padding: 1rem;
    line-height: 1.3;
    word-spacing: 0.2rem;
    font-size: calc(0.8rem + 0.3vw);
    width: 110%;
    background-color: #e6bb00;
  }

  p:nth-child(3) {
    grid-row: 3/4;
    align-self: center;
    font-size: calc(0.7rem + 0.3vw);
    word-spacing: 1rem;
    font-weight: 500;
    color: #fff;
  }

  p:nth-child(4) {
    grid-row: 4/5;
    align-self: flex-start;
    padding: 0.5rem 0.8rem;
    border: 3px solid #e6bb00;
    border-radius: 6px;
    color: #e6bb00;
    font-size: calc(0.7rem + 0.3vw);
    font-weight: 700;
    cursor: pointer;
    transition: background-color 350ms ease-out, color 350ms ease-out;

    &:hover {
      background-color: #e6bb00;
      color: #1d1e26;
    }
  }

  @media only screen and (max-width: 1220px) {
    grid-column: 1/3;

    p {
      justify-self: flex-start;
      text-align: left;
    }

    p:nth-child(1) {
      font-size: calc(0.85rem + 0.85vw);
    }

    p:nth-child(2) {
      width: 100%;
    }
  }
`;

const ImageInfo2 = styled(ImageInfo)`
  grid-row: 3/4;
  display: grid;
  animation: ${props =>
    props.state > 0.5
      ? css`
          ${fadeIn} 650ms ease-out 400ms forwards
        `
      : css`
          ${fadeOut} 650ms ease-out 100ms forwards
        `};

  p:nth-child(1) {
    span {
      font-size: calc(0.7rem + 0.3vw);
      color: #00d7e6;
    }
  }

  p:nth-child(4) {
    padding: 0px;
    border: none;
    border-radius: 0px;
    color: transparent;
    display: grid;
    grid-template-column: 1fr 1fr;
    gap: 0px 1rem;

    &:hover {
      background-color: transparent;
      color: transparent;
    }

    span {
      padding: 0.5rem 0.8rem;
      border: 3px solid #e6bb00;
      border-radius: 6px;
      color: #e6bb00;
      font-size: calc(0.7rem + 0.3vw);
      font-weight: 700;
      transition: background-color 350ms ease-out, color 350ms ease-out;

      &:hover {
        background-color: #e6bb00;
        color: #1d1e26;
      }

      &:nth-child(1) {
        grid-column: 1/2;
      }

      &:nth-child(2) {
        grid-column: 2/3;
      }
    }
  }
`;

const ImageInfo3 = styled(ImageInfo2)`
  grid-row: 4/5;
  margin-top: 0;
  animation: ${props =>
    props.state > 0.5
      ? css`
          ${fadeIn} 650ms ease-out 600ms forwards
        `
      : css`
          ${fadeOut} 650ms ease-out 100ms forwards
        `};

  p:nth-child(1) {
    span {
      color: #00e658;
    }
  }

  p:nth-child(4) {
    span {
      padding: 0px;
      border: none;
      border-radius: 0px;
      color: none;

      &:nth-child(1) {
        background: url(${githubY});
        background-repeat: no-repeat;
        background-size: contain;
        width: 45px;
        height: 45px;
        transition: filter 200ms ease-out;

        &:hover {
          filter: contrast(30%);
        }
      }

      &:nth-child(2) {
        padding: 0.5rem 0.8rem;
        border: 3px solid #e6bb00;
        border-radius: 6px;
        color: #e6bb00;
        &:hover {
          color: #1d1e26;
        }
      }
    }
  }

  @media only screen and (max-width: 740px) {
    p:nth-child(4) {
      span {
        &:nth-child(1) {
          width: 35px;
          height: 35px;
        }
      }
    }
  }
`;

export const FirstImageInfo = ({ state }) => {
  return (
    <ImageInfo state={state}>
      <p>
        Sustainability Exchange <span>(Software Development)</span>
      </p>
      <p>
        A Prediction Market based <b>Decentralized Web Application </b>for ESG
        Ratings (Environmental, Social and Governance) that utilizes modern
        blockchain technology.
      </p>
      <p>React.js Redux Node.js Express SCSS PostgreSQL Solidity</p>
      <p
        onClick={() =>
          window.open("https://dev.sustainability.exchange/", "_blank")
        }
      >
        Website &#10148;
      </p>
    </ImageInfo>
  );
};

export const SecondImageInfo = ({ state }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ImageInfo2 state={state}>
      <p>
        Microtreaty <span>(UI/UX Design)</span>
      </p>
      <p>
        A <b>Decentralized Web Application </b> for creating digital assets that
        are stored on the blockchain. These assets can be transferred worldwide
        and peer-to-peer. Just like sending a simple text message.
      </p>
      <p>Adobe-Illustrator Adobe-XD Sketch Material-Design</p>
      <p>
        <span onClick={handleOpen}>Animation &#10148;</span>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <p id="transition-modal-description">
                <video
                  controls
                  autoPlay
                  playsinline
                  style={{ height: "auto", width: "calc(200px + 40vw)" }}
                  loop
                >
                  <source src={MicrotreatyAnimation} type="video/mp4" />
                </video>
              </p>
            </div>
          </Fade>
        </Modal>
        <span
          onClick={() =>
            window.open(
              "https://xd.adobe.com/view/87e652ae-5207-4558-7010-dfe7b99dea1c-f1d7/grid",
              "_blank"
            )
          }
        >
          Prototypes &#10148;
        </span>
      </p>
    </ImageInfo2>
  );
};

export const ThirdImageInfo = ({ state }) => {
  return (
    <ImageInfo3 state={state}>
      <p>
        Iris <span>(Software Development)</span>
      </p>
      <p>
        A <b>Decentralized Web Application </b> platform for publishing,
        networking, and socializing that incentivizes users to have beneficial
        interactions around the globe.
      </p>
      <p>React.js Redux Node.js Express Firebase Solidity</p>
      <p>
        <span
          onClick={() =>
            window.open("https://github.com/rd1dgm/iris", "_blank")
          }
        />
        <span
          onClick={() => window.open("https://iris-f137c.web.app/", "_blank")}
        >
          {" "}
          Website &#10148;
        </span>
      </p>
    </ImageInfo3>
  );
};
