import * as React from 'react'
import styled from 'styled-components'
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  margin: 0 auto;
  z-index: 2;
  align-self: center;
  min-height: 50px;
  align-items: center;
  padding-top: 5px;


  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    // position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`
const Content = styled.div`
  display: flex;
  width: 50vw;
  align-items: center;
  justify-content: center;
  padding: 5px;

  @media (max-width: 768px) {
    margin: 0px 1vw;
    padding: 0px;
    width: 70vw;
  }
`

const Item = styled.div`
  margin: 0px 4vw;
  a:link, a:visited {
    color: #7df5c7;
  }
  @media (max-width: 768px) {
    margin: 0px 2vw;
  }

  @media (max-width: 375px) {
    margin: 0px 1vw;
  }
`


const navBar = () => {
  return (
    <Navbar>
      <Content>
        <Item>
          <AnchorLink to="#aboutMe" title="About Me">
            About Me
          </AnchorLink>
        </Item>
        <Item>
          <AnchorLink to="#experience" title="Past Experience">
            Experience
          </AnchorLink>
        </Item>
        <Item>
          <AnchorLink to="#skill" title="Skills">
            Skills
          </AnchorLink>
        </Item>
      </Content>
    </Navbar>
    // <Link to="https://www.linkedin.com/in/jason-kwong-hk/">
    //       <NavLinkText>
    //                          LinkedIn
    //                      </NavLinkText>
    //                  </Link>

  )
}

export default navBar;