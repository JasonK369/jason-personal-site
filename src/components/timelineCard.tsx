import React, { useEffect, useState } from 'react';
import styled from 'styled-components'

interface IProps {
    company: string,
    position: string,
    location: string,
    descriptions: Array<string>
};

const CardWrapper = styled.div`
    position: fixed;
    left: 0px;
    padding: 10px;
    background: #ffffff !important;
    margin: 0px;
`

const Company = styled.div`
    font-size: 15px;
    font-weight: bold;
    color: #000000;
`

const Position = styled.div`
    color: #586F7C !important;
`

const Location = styled.div`
    color: #007EA7;
`

const Description = styled.div`
    color: #000000;
`


const timelineCard = ({ company, position, location, descriptions }: IProps) => {

    function JobDescriptions() {
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