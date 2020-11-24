import React from 'react';

import "./NavBar.css";

function NavBar() {
    return (
        <div className="navbar">
                <a href="#home" className="active">imVR</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#hireMe">Hire Me</a>
        </div>
    )
}

export default NavBar;
