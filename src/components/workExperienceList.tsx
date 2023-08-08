import * as React from "react";
import styled from "styled-components";
import experiences from "../constant/experience";
import WorkExperience from "./workExperience";

const HorizontalContainer = styled.div`
  display: flex;
  overflow-x: scroll;

  @media (max-width: 768px) {
    flex-direction: column;
    overflow-x: hidden;
  }
`;

const WorkExperienceList = () => {
  return (
    <HorizontalContainer>
      {experiences.map((experience) => {
        return (
          <WorkExperience
            company={experience.company}
            periodStart={experience.periodStart}
            periodEnd={experience.periodEnd}
            position={experience.position}
            location={experience.location}
            descriptions={experience.descriptions}
            techStacks={experience.techStacks}
            sideNote={experience.sideNote}
          />
        );
      })}
    </HorizontalContainer>
  );
};

export default WorkExperienceList;
