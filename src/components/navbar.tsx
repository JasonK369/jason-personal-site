import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Navbar = styled.nav`
  display: flex;
  background-color: #fff;
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  border-bottom: 2px solid #33333320;
  margin: 0 auto;
  z-index: 2;
  align-self: center;

  @media (max-width: 768px) {
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const NavLinks = styled.ul`
    display: flex;
    list-style: none;
    padding-left: 0;
`

const NavLinkItem = styled.li`
    padding-right: 2rem;
`

const NavLinkText = styled.div`
    color: black;
`


const navBar = () => {
    return (
        <Navbar>
            <NavLinks>
                <NavLinkItem>
                        <Link to="/">
                            <NavLinkText>
                                Home
                            </NavLinkText>
                        </Link>
                </NavLinkItem>

                <NavLinkItem>
                        <Link to="/about">
                            <NavLinkText>
                                About
                            </NavLinkText>
                        </Link>
                    </NavLinkItem>
            </NavLinks>
        </Navbar>
    )
}

export default navBar;