import * as React from "react"
import Layout from '../components/layout'
import TextBox from '../components/textbox'
import TimelineCard from "../components/timelineCard";
import SkillTable from "../components/skillTable";
import experiences from "../constant/experience";
import skills from "../constant/skills"

import { Chrono } from "react-chrono";

export default function about() {
    return (
        <Layout pageTitle="About Me">
            <div>
                <p>Hi, this page contain Jason's description and past experience</p>
                {/* Description */}
                <TextBox title='Description' content='Detail-oriented backend developer with an extensive experience with payment system. Skilled in handling system design, code review, and managing document and records.' />
                
                {/* Past Experience */}
                <TextBox title='Experience'>
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

                {/* Skills */}
                <TextBox title='Skills' content='Skills'>
                    <SkillTable skills={skills}/>
                </TextBox>
            </div>
        </Layout>
    )
}