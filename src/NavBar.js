import React from 'react';
import { useHistory } from "react-router-dom";

import { IconButton } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import MailIcon from '@material-ui/icons/Mail';

import "./NavBar.css";




function NavBar() {

    const history = useHistory();

    function displayHome () {
        history.push("/");
    }


    function displayAboutMe() {
        history.push("/about")
        
    }

    function displayProject() {
        history.push("/projects")

        
    }

    function displaySkills() {
        history.push("/skills");

        
    }

    function displayContactMe() {
        history.push("/contact");    
    }

    return (


        <div className="navbar">

            <div className="navbar__home" onClick={ displayHome }>
            <IconButton>
                <HomeIcon className="color" fontSize="large" />
            </IconButton>
            <p>Home</p>
            </div>

            <div className="navbar__aboutMe" 
            onClick={ displayAboutMe }>
            <IconButton >
                <AccountCircleIcon className="color" fontSize="large" />
            </IconButton>
            <p>About</p>
            </div>

            <div className="navbar__projects" onClick={ displayProject }>
            <IconButton>
                <AssignmentTurnedInIcon className="color" fontSize="large" />
            </IconButton>
            <p>Projects</p>
            </div>

            <div className="navbar__skills" onClick={ displaySkills }>
            <IconButton>
                <EmojiObjectsIcon className="color" fontSize="large" />
            </IconButton>
            <p>Skills</p>
            </div>

            <div className="navbar__contactMe" onClick={ displayContactMe }>
            <IconButton>
                <MailIcon className="color" fontSize="large" />
            </IconButton>
            <p>Contact</p>
            </div>  

            
        </div>
    )
}

export default NavBar;
