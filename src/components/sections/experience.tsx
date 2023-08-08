import * as React from "react";
import styled from "styled-components";
import ContentContainer from "../contentContainer";
import WorkExperienceList from "../workExperienceList";

const Container = styled.div`
  min-height: 60vh;
  flex-direction: column;
  display: flex;
  align-items: flex-center;

  background-color: #7a6099;
`;
const HeadTriangle = styled.div`
  background-color: #222639;
  min-height: 10vh;
  clip-path: polygon(0% 0%, 100% 0%, 70% 95%);

  @media (max-width: 768px) {
    min-height: 5vh;
  }
`;

const TailTriangle = styled.div`
  flex-grow: 1;
  background-color: #97abb1;
  min-height: 20vh;
  clip-path: polygon(100% 100%, 100% 20%, 0% 100%);

  @media (max-width: 768px) {
    clip-path: polygon(100% 100%, 100% 40%, 0% 100%);
    min-height: 5vh;
  }
`;

const experience = () => {
  return (
    <Container id="experience">
      {/* A head triangle for separating sections */}
      <HeadTriangle />
      <ContentContainer heading="Past Experience">
        <WorkExperienceList />
      </ContentContainer>
      {/* A tails triangle for separating sections */}
      <TailTriangle />
    </Container>
  );
};

export default experience;
