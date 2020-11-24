import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import PublicIcon from '@material-ui/icons/Public';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from "@material-ui/core/Link";

import "./ProjectCard.css";

function ProjectCard(props) {

  return (
    <div className="projectCard">
      <h1 className="title">{props.title}</h1>
      <p className="subheader">{props.subheader}</p>
      <p className="projectCard__description">{props.description}</p>
      <h4>Tools Used: <span>{props.tools}</span></h4>
      <h4>Deployed On: <span>{props.deployed}</span> </h4>
      <h4>Version Control: <span>Git</span></h4>
      <div className="projectCard__icons">

        <IconButton>
        <Link href={props.webLink} target="_blank" rel="noopener" className="projectCard__link">
            <PublicIcon />
        </Link>
        </IconButton>

        <IconButton>
        <Link href={props.gitHubLink} target="_blank" rel="noopener" className="projectCard__link">
            <GitHubIcon/>
        </Link>
        </IconButton>
 
      </div>
    </div>
  );
}

export default ProjectCard;
