import React from "react";
import styled from "styled-components";
import ContactHeader from "./header";
import ContactBody from "./body";
import ContactButton from "./button";
import { useInView } from "react-intersection-observer";

const ContactContainer = styled.div`
  height: 100vh;
  display: grid;
  gap: 2rem 0;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto 1fr;
  background-color: #e6bb00;

  ${"" /* @media only screen and (max-height: 1000px) {
    height: 120vh;
  } */}
`;

function Contact() {
  const [ref, , entry] = useInView({ threshold: 0.4, triggerOnce: true });

  const intersectionRatio = 0.4;

  return (
    <ContactContainer ref={ref}>
      {intersectionRatio >= 0.4 && (
        <>
          {" "}
          <ContactHeader ratio={entry && entry.intersectionRatio} />
          <ContactBody ratio={entry && entry.intersectionRatio} />
          <ContactButton ratio={entry && entry.intersectionRatio} />
        </>
      )}
    </ContactContainer>
  );
}

export default Contact;
