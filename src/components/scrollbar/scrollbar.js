import React, { useEffect, useState } from "react";
import styled from "styled-components";

function getWindowViewPortScroll() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  const value = scrollTop / (scrollHeight - clientHeight);

  return {
    value
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowViewPortScroll()
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowViewPortScroll());
    }

    window.addEventListener("scroll", handleResize);
    return () => window.removeEventListener("scroll", handleResize);
  }, []);

  return windowDimensions;
}

const ScrolledDiv = styled.div.attrs(props => ({
  style: {
    height: `${props.state * 100}vh`
  }
}))`
  width: 6px;
  z-index: 103;
  display: relative;
  position: fixed;
  top: 0;
  right: 0;
  background-color: #e6bb00;

  @media only screen and (max-width: 740px) {
    width: 5px;
    background-color: #1d1e26;
    border-right: 2px solid #e6bb00;
  }
`;

function ScrollBar() {
  const { value } = useWindowDimensions();

  return <ScrolledDiv state={value} id="scroll-div" />;
}

export default ScrollBar;
