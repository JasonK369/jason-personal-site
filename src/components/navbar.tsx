import * as React from 'react'
import styled from 'styled-components'
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Navbar = styled.nav`
  display: flex;
  background-color: #fff;
  position: relative;
  justify-content: space-between;
  border-bottom: 2px solid #33333320;
  margin: 0 auto;
  z-index: 2;
  align-self: center;
  min-height: 50px;
  flex-direction: row;


  @media (max-width: 768px) {
    background-color: #ff0000;
    display: flex;
    flex-direction: column;
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`
const Content = styled.div`
  display: flex;
  // align-self: left;
  width: 50vw;
`

const Item = styled.div`
  padding-left: 30px;
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