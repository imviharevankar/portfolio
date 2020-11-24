import React from 'react';

import "./Skills.css";

function Skills() {
    return (
        <div className="skills" id="skills">
        <h1 style={{color: "#feda4a"}}>Skills</h1>
            <div className="bar">
                <div className="info">
                    <span>HTML5</span>
                </div>
                <div className="progress-line html">
                    <span></span>
                </div>
            </div>
            <div className="bar">
                <div className="info">
                    <span>CSS3</span>
                </div>
                <div className="progress-line css">
                    <span></span>
                </div>
            </div>
            <div className="bar">
                <div className="info">
                    <span>Javascript</span>
                </div>
                <div className="progress-line javascript">
                    <span></span>
                </div>
            </div>
            <div className="bar">
                <div className="info">
                    <span>MongoDB</span>
                </div>
                <div className="progress-line mongoDB">
                    <span></span>
                </div>
            </div>
            <div className="bar">
                <div className="info">
                    <span>NodeJS</span>
                </div>
                <div className="progress-line nodeJS">
                    <span></span>
                </div>
            </div>
            <div className="bar">
                <div className="info">
                    <span>React</span>
                </div>
                <div className="progress-line react">
                    <span></span>
                </div>
            </div>
            <div className="bar">
                <div className="info">
                    <span>C</span>
                </div>
                <div className="progress-line c">
                    <span></span>
                </div>
            </div>
            <div className="bar">
                <div className="info">
                    <span>C#</span>
                </div>
                <div className="progress-line csharp">
                    <span></span>
                </div>
            </div>
            <div className="bar">
                <div className="info">
                    <span>MS SQL Server</span>
                </div>
                <div className="progress-line msSqlServer">
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Skills;