import * as React from 'react'
import styled from 'styled-components'

interface IProps {
  heading: string
  children?: JSX.Element
};

const Heading = styled.h2`
  padding: 10px !important;
`

const Container = styled.div`
  width: 60vw;
  margin: 0 auto;
`


const ContentContainer = ({heading, children}: IProps) => {
  return(
    <Container>
      <Heading>
        {heading}
      </Heading>
      {children}
    </Container>
  )
}

export default ContentContainer;
