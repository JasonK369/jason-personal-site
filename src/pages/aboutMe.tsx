import * as React from "react"
import Layout from '../components/layout'
import TextBox from '../components/textbox'
import TimelineCard from "../components/timelineCard";
import experiences from "../constant/experience";
import { Chrono } from "react-chrono";
import styled from 'styled-components'

const CardWrapper = styled.div`
    align-items: start !important;
    background: #ffffff !important;
    margin: 0px;
`

export default function aboutMe() {
    return (
        <Layout pageTitle="About Me">
            <div>
                <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
                <TextBox title='Description' content='Detail-oriented backend developer with an extensive experience with payment system. Skilled in handling system design, code review, and managing document and records.' />
                <TextBox title='Experience' content='A timeline'>
                    <Chrono
                        items={experiences}
                        mode="VERTICAL"
                        cardHeight={250}
                    >
                        
                            {
                                experiences.map(experience => {
                                    return (
                                    
                                    <TimelineCard
                                        company={experience.company}
                                        position={experience.position}
                                        location={experience.location}
                                        descriptions={experience.descriptions}
                                    />
                                    )
                                })
                            }
                        
                    </Chrono>
                </TextBox>
                <TextBox title='Skills' content='Skills' />
            </div>
        </Layout>
    )
}