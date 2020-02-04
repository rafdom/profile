import React from "react";
import styled from "styled-components";

const BorderTop = styled.div`
  height: 55px;
  width: 100%;
  background-color: hsl(233, 14%, 13%);
  position: fixed;
  top: 0px;
  z-index: 99;

  @media only screen and (max-width: 740px) {
    display: none;
  }
`;

const BorderBottom = styled.div`
  height: 55px;
  width: 100%;
  background-color: hsl(233, 14%, 13%);
  position: fixed;
  bottom: 0px;
  z-index: 99;

  @media only screen and (max-width: 740px) {
    display: none;
  }
`;

const BorderLeft = styled.div`
  height: 100%;
  width: 55px;
  background-color: hsl(233, 14%, 13%);
  position: fixed;
  z-index: 99;

  @media only screen and (max-width: 740px) {
    display: none;
  }
`;

const BorderRight = styled.div`
  height: 100%;
  width: 55px;
  background-color: hsl(233, 14%, 13%);
  position: fixed;
  bottom: 0px;
  right: 0px;
  z-index: 99;

  @media only screen and (max-width: 740px) {
    display: none;
  }
`;

function Frame() {
  return (
    <>
      <BorderTop />
      <BorderBottom />
      <BorderLeft />
      <BorderRight />
    </>
  );
}

export default Frame;
