import React from 'react';
import { IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import PublicIcon from "@material-ui/icons/Public";

import "./ProjectCard.css";

function ProjectCard({ title, subTitle, description, tech, gitHubLink, webLink}) {
    return (
        <div className="projectCard">
            <div className="projectCard__info">
            <h1>{title}</h1> 
            <p>{subTitle}</p>
            <div>
            {description.map(desc => <p>{desc}</p>)}
            </div>
           <div className="scrollbar__hidden">
           {tech.map(tech => <div className="projectCard__badge">{tech}</div>)}
           </div>
            </div>
           
           <div className="projectCard__icons">
            <IconButton href={gitHubLink} target="_blank">
                <GitHubIcon className="color" fontSize="large" />
            </IconButton>
            <IconButton href={webLink} target="_blank">
                <PublicIcon className="color" fontSize="large" />
            </IconButton>
           </div>
        </div>
    )
}

export default ProjectCard;
