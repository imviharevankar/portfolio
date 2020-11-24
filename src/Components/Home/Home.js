import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import DescriptionIcon from '@material-ui/icons/Description';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from '@material-ui/icons/Twitter';

import "./Home.css";

function Home() {
    return (
        <div className="home" id="home">
            <h1>I'm Viha<span>r</span> <span>R</span>evanka<span>r</span></h1>

            <p>Mechanical Enginee<span>r</span> by Deg<span>r</span>ee,<br></br>
            Web Develope<span>r</span> by Passion</p>
            <div className="home__icons">
            <IconButton>
                <DescriptionIcon fontSize="large" />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/vihar-revankar-0428081b8/" target="_blank">
                <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton href="https://github.com/imviharevankar" target="_blank">
                <GitHubIcon fontSize="large" />
            </IconButton>
            <IconButton href="https://www.instagram.com/imviharevankar/" target="_blank">
                <InstagramIcon fontSize="large"  />
            </IconButton>
            <IconButton href="https://twitter.com/imviharevankar" target="_blank">
                <TwitterIcon fontSize="large" />
            </IconButton>
            </div>
            
            
        </div>
    )
}

export default Home;
