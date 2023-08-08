import * as React from "react";
import styled from "styled-components";
import useMediaQuery from "../hooks/useMediaQuery";
import { IconBrandLinkedin } from "@tabler/icons-react";

const Container = styled.div`
  position: sticky;
  top: 80px;
  left: 90%;
  width: 47px;
  height: 47px;
  border: 3px solid #73ad21;
  border-radius: 50%;
  background: #f5ebd5;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 820px) {
    width: 32px;
    height: 32px;
  }

  @media screen and (max-width: 768px) {
    width: 26px;
    height: 26px;
  }
`;

const linkedInButton = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Container>
      <IconBrandLinkedin
        size={isMobile ? 25 : 40}
        onClick={() =>
          window.open("https://www.linkedin.com/in/jason-kwong-dev/", "_blank")
        }
      />
    </Container>
  );
};

export default linkedInButton;
