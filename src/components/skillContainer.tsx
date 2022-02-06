import * as React from "react"
import SkillBox from './skillbox'

interface IProps {
    skills: ISkill[]
}
interface ISkill {
    skill: string
};

const skillContainer = ({ skills }: IProps) => {
    const skillList = () => {
        return (
            <div>
                {skills.map((skill) => (
                    <SkillBox skillName={skill.skill} />
                ))}
            </div>
        );
    }

    return (
        <div>
            {skillList()}
        </div>
    )
}

export default skillContainer;