import * as React from "react"
import styled from 'styled-components'
import { Rating } from 'react-simple-star-rating'

interface IProps{
    skills: ISkill[]
}

interface ISkill {
    skill: string,
    rating: number
};

const SkillContainer = styled.td`
    color: #EFF7F6;
`;

const skillTable = ({skills}: IProps) => {
    const skillList = () => {
        return (
            <tr>
                {skills.map((skill) => (
                    <tr>
                        <SkillContainer>{skill.skill}</SkillContainer>
                        <td>
                            <Rating 
                                ratingValue={skill.rating}
                                readonly={true} // not expect any change here
                                allowHalfIcon={true}
                            />
                        </td>
                    </tr>
                ))}
            </tr>
        );
    
    }

    return (
        <div>
            <table>
                {skillList()}
            </table>
        </div>
    )
}

export default skillTable;