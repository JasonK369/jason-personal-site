import * as React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import experiences from "../constant/experience";
import TimelineCard from "../components/timelineCard";

import styled from "styled-components";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";

interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      sx={{ borderRight: 1, borderColor: "divider" }}
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavTabs = ({ label, href }: LinkTabProps) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "100%",
        display: "flex",
        "flex-direction": "row",
        "@media (max-width: 768px)": {
          "flex-direction": "column",
        },
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        orientation={isMobile ? "horizontal" : "vertical"}
      >
        {experiences.map((experience) => {
          return <LinkTab label={experience.company} />;
        })}
      </Tabs>
      <TimelineCard
        company={experiences[value].company}
        position={experiences[value].position}
        location={experiences[value].location}
        descriptions={experiences[value].descriptions}
      />
    </Grid>
  );
};

export default NavTabs;
