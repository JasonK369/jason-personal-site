import * as React from "react"
import styled from 'styled-components'

interface IProps {
    title: string,
    content?: string,
    children?: JSX.Element
};

const Wrapper = styled.div`
    background-color: #42BFDD; // title color
`

const Title = styled.h2`
    padding: 10px 0px 0px 10px;
    margin-bottom: 10px;
`

const ContentWrapper = styled.div`
    background-color: #084B83; // content background color
    padding: 10px;
    margin-bottom: 10px;
    color: #F0F6F6 // word color
`

const textbox = ({ title, content, children }: IProps) => {
    return (
        <Wrapper>
            <Title>
                {title}
            </Title>
            <ContentWrapper>
                {children || content}
            </ContentWrapper>
        </Wrapper>
    )
}

export default textbox;