import * as React from "react";
import styled from "styled-components";

interface IExperience {
  company: string;
  periodStart: string;
  periodEnd: string;
  position: string;
  location: string;
  descriptions: Array<string>;
  techStacks: Array<string>;
  sideNote?: string;
}

const WorkContainer = styled.div`
  border: solid 1px #4b6982;
  border-radius: 5px;
  margin: 10px;
  padding: 15px;
  min-width: 20vw;
  background-color: #4b6982;
`;

const WorkExperience = ({
  company,
  periodStart,
  periodEnd,
  position,
  location,
  descriptions,
  techStacks,
  sideNote,
}: IExperience) => {
  return (
    <div>
      <WorkContainer>
        <h2>{company}</h2>
        {location} <br />
        {periodStart} - {periodEnd} <br />
        {position} <br />
        {!!sideNote ? <small>{sideNote}</small> : <small>&nbsp;</small>}
        <h4>Job Description </h4>
        <ul>
          {descriptions.map((description) => {
            return <li>{description}</li>;
          })}
        </ul>
        <h4>Tech Stack </h4>
        <ul>
          {techStacks.map((tech) => {
            return <li>{tech}</li>;
          })}
        </ul>
      </WorkContainer>
    </div>
  );
};

export default WorkExperience;
