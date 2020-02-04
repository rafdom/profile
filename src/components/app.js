import React from "react";
import Introduction from "./introduction/introduction";
import Frame from "./frame/frame";
import Icon from "./icon/logo";
import styled from "styled-components";
import ScrollBar from "./scrollbar/scrollbar";
import Email from "./email/email";
import Projects from "./projects/project";
import Contact from "./contact/contact";

const AppContainer = styled.div`
  background-color: hsl(233, 14%, 13%);
`;

function App() {
  return (
    <AppContainer>
      <Frame />
      <Introduction />
      <Icon />
      <ScrollBar />
      <Email />
      <Projects />
      <Contact />
    </AppContainer>
  );
}

export default App;
