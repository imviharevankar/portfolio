import React from 'react';
import { IconButton, Tooltip } from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

import "./Home.css";
import resume from "./ViharRevankarCV.pdf";

function Home() {
    return (
        <div id="home" className="home">
            <div className="home__image">
                {/* <img src="" alt="" /> */}
            </div>
            <div className="home__info">
            <p>Hello World!!!</p>
            <h1>I'm Vihar Revankar</h1>
            <p>Mechanical Engineer by Degree,</p>
            <p>Web Developer by Passion.</p>
            </div>


            <div className="home__icons">
            <Tooltip title="Linked In">
            <IconButton target="_blank" href="https://www.linkedin.com/in/vihar-revankar-0428081b8/">
                <LinkedInIcon className="color" fontSize="large" />
            </IconButton>  
            </Tooltip>
            <Tooltip title="Resume">
            <IconButton href={resume} target="_blank" download="ViharRevankar-Resume">
                <PictureAsPdfIcon className="color" fontSize="large"  />
            </IconButton>
            </Tooltip>
            <Tooltip title="Github" arrow>
            <IconButton target="_blank" href="https://github.com/imviharevankar">
                <GitHubIcon className="color" fontSize="large" />
            </IconButton>
            </Tooltip>
           <Tooltip title="Instagram">
            <IconButton target="_blank" href="https://www.instagram.com/imviharevankar/">
                <InstagramIcon className="color" fontSize="large" />
            </IconButton>
            </Tooltip>
            <Tooltip title="Twitter">
            <IconButton target="_blank" href="https://twitter.com/imVihaRevankar">
                <TwitterIcon className="color" fontSize="large" />
            </IconButton>
            </Tooltip>
            </div>            
        </div>
    )
}

export default Home;
