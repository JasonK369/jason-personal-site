import * as React from 'react'
import styled from 'styled-components'
import NavBar from '../components/navbar'

type IProps = {
    pageTitle: string,
    children?: JSX.Element
};

const Container = styled.div`
    margin: auto;
    max-width: 600px;
    font-family: Noto Sans;
`

const Heading = styled.h1`
    background: rebeccapurple none repeat scroll 0% 0%;
    margin-bottom: 1.45rem;
    color: #ffffff;
    padding: 10px
`

// React.ReactNode = a react component
const layout = ({ pageTitle, children }: IProps) => {
    return (
        <Container>
            <title>{pageTitle}</title>
            <NavBar/>
            <main>
                <Heading>{pageTitle}</Heading>
                {children}
            </main>
        </Container>
    )
}


export default layout;