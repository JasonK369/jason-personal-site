import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

type Props = {
    pageTitle: string,
    children?: JSX.Element
};

const Container = styled.div`
    margin: auto;
    max-width: 500px;
    font-family: sans-serif;
`

const Heading = styled.h1`
    color: rebeccapurple;
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

// React.ReactNode = a react component
const layout = ({ pageTitle, children }: Props) => {
    return (
        <Container>
            <title>{pageTitle}</title>
            <nav>
                <NavLinks>
                    <NavLinkItem>
                        <Link to="/">
                            <NavLinkText>
                                Home
                            </NavLinkText>
                        </Link>
                    </NavLinkItem>
                    <NavLinkItem>
                        <Link to="/aboutMe">
                        <NavLinkText>
                            About
                        </NavLinkText>
                        </Link>
                    </NavLinkItem>
                </NavLinks>
            </nav>
            <main>
                <Heading>{pageTitle}</Heading>
                {children}
            </main>
        </Container>
    )
}


export default layout;