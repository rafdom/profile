import React from "react";
import Logo from "../../assets/logo.svg";
import styled from "styled-components";
import { motion } from "framer-motion";

const NavLogo = styled(motion.img)`
  width: 37.5px;
  height: 37.5px;
  display: relative;
  position: fixed;
  top: 0.5rem;
  left: 3.5rem;
  cursor: pointer;
  z-index: 100;

  &:hover {
    width: 50px;
    height: 50px;
  }

  @media only screen and (max-width: 740px) {
    display: none;
  }
`;

function icon() {
  return (
    <NavLogo
      whileHover={{
        rotate: 10,
        scale: 0.8
      }}
      initial={{ opacity: 0, translateY: -40, scale: 1.5 }}
      animate={{ opacity: 1, translateY: 0, scale: 1 }}
      transition={{ type: "spring", damping: 6 }}
      src={Logo}
      alt="RDDesign"
      onClick={() => window.location.reload(true)}
    />
  );
}

export default icon;
