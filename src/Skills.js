import React from 'react';
import SkillChart from "./SkillChart";

import "./Skills.css";

function Skills() {
    return (
        <div id="skill" className="skills scrollbar__hidden">
            <SkillChart title="ReactJS" level={55} />
            <SkillChart title="JavaScript" level={60} />
            <SkillChart title="HTML5" level={80} />
            <SkillChart title="CSS3" level={60} />
            <SkillChart title="MongoDB" level={75} />
            <SkillChart title="Bootstrap" level={60} />
            <SkillChart title="Redux" level={40} />
            <SkillChart title="NodeJS" level={60} />
            <SkillChart title="Express" level={50} />
            <SkillChart title="Python" level={60} />
            <SkillChart title="MS SQL" level={60} />
            <SkillChart title="C#" level={60} />
            <SkillChart title="C" level={50} />

        </div>
    )
}

export default Skills
