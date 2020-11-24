import React from 'react';

import ProjectCard from "./ProjectCard/ProjectCard";
import "./Projects.css";

function Projects() {
    return (
        <div id="projects">
            <h1 className="projects__title">Projects</h1>
            <div className="projects__container">
            <div className="item">
            <ProjectCard title="Clima" subheader="A Weather App" description="l" tools="HTML5" deployed="GitHub Pages" webLink="" gitHubLink="" /> 
            </div>
            <div className="item">
            <ProjectCard title="Clima" subheader="A Weather App" description="l" tools="HTML5" deployed="GitHub Pages" webLink="" gitHubLink=""  />  
            </div>
            <div className="item">
            <ProjectCard title="Clima" subheader="A Weather App" description="l" tools="HTML5" deployed="GitHub Pages" webLink="" gitHubLink=""  /> 
            </div>

            <div className="item">
            <ProjectCard title="Clima" subheader="A Weather App" description="l" tools="HTML5" deployed="GitHub Pages" webLink="" gitHubLink=""  />  
            </div>
            <div className="item">
            <ProjectCard title="Clima" subheader="A Weather App" description="l" tools="HTML5" deployed="GitHub Pages" webLink="" gitHubLink=""  /> 
            </div>

            </div>
            
             

        </div>
    )
}

export default Projects;
