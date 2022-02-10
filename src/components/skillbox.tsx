import * as React from 'react'
import styled from 'styled-components'

interface IProps {
    skillName: string
}

const Box = styled.div`
    margin: 10px 5px;
    display: inline-block;
    border: 1px solid;
    border-radius: 5px;
    background-color: #94dfd3;
`;

const TextContainer = styled.div`
    padding: 10px;
    color: #000000;
`;

const skillBox = ({ skillName }: IProps) => {
    return (
        <Box>
            <TextContainer>
                {skillName}
            </TextContainer>
        </Box>
    )
}

export default skillBox;