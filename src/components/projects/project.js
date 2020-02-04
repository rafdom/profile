import React from "react";
import styled from "styled-components";
import ProjectHeader from "./header";
import ProjectInfo from "./images";

const ProjectContainer = styled.div`
  height: 120vh;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 0.75fr repeat(2, 1fr);
  background-color: hsl(233, 14%, 13%);

  @media only screen and (min-height: 641px) and (max-height: 1000px) {
    height: 185vh;
  }

  @media only screen and (min-height: 601px) and (max-height: 640px) {
    height: 200vh;
  }

  @media only screen and (max-height: 600px) {
    height: 220vh;
  }
`;

function Projects() {
  return (
    <ProjectContainer id="Project-Container">
      <>
        {" "}
        <ProjectHeader /> <ProjectInfo />{" "}
      </>
    </ProjectContainer>
  );
}

export default Projects;
