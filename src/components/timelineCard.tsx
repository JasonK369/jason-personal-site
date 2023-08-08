import React from 'react';
import styled from 'styled-components'

interface IProps {
    company: string,
    position: string,
    location: string,
    descriptions: Array<string>
};

const CardWrapper = styled.div`
    position: relative;
    left: 0px;
    padding-left: 40px;
    margin: 0px;
    width: 400px;
    min-height: 300px;
    word-wrap: break-word;
`

const Company = styled.h3`
    font-weight: bold;
    color: #ddfbd2;
`

const Position = styled.div`
    font-size: 30px;
    color: #BCEDF6;
`

const Location = styled.div`
    color: #007EA7;
`

const Description = styled.div`
    color: #bfc0c0;
`


const timelineCard = ({ company, position, location, descriptions }: IProps) => {

    const JobDescriptions = () => {
        return (
            <ul>
                {descriptions.map((description) => (
                    <Description><li>{description}</li></Description>
                ))}
            </ul>
        );
    }

    return (
        <CardWrapper>
            <Company>{company}</Company>
            <Position>{position}</Position>
            <Location>{location}</Location>
            {JobDescriptions()}
        </CardWrapper>
    )
}

export default timelineCard;