import React from 'react';

import ProjectCard from "./ProjectCard";
import "./Project.css";

function Project() {
    return (
        <div id="project" className="project scrollbar__hidden">
            <ProjectCard 
                title="finCalc"
                subTitle="An app to calculate emi and sip."
                description={[
                "User can  enter input and calculate emi and sip. ",
                "User can see a clean UI.",
                "User can see the Results in pie chart (chartJS).", 
                "User can route to /sip to calculate sip.",
                ]}
                tech={["ReactJS" , "ChartJs", "MaterialUI", "JavaScript", "CSS3" , "HTML5", "git" ]}
                gitHubLink="https://github.com/imviharevankar/fincalc"
                webLink="https://imviharevankar.github.io/fincalc/"
            />
            <ProjectCard 
                title="Gmail Clone"
                subTitle="A gmail clone."
                description={[
                "User can login using his/her google account.",
                "User can see a replica of gmail UI.",
                "User can open the mail.", 
                "User can send the mail, which gets populated in mail box.",
                "User can logout."]}
                tech={["ReactJS" , "Redux", "Firebase", "Firestore", "MaterialUI", "JavaScript", "CSS3" , "HTML5", "git" ]}
                gitHubLink="https://github.com/imviharevankar/gmail-clone"
                webLink="https://clone-6a509.firebaseapp.com/"
            />

            <ProjectCard 
                title="Covid-19T"
                subTitle="A coronavirus live tracker app."
                description={[
                "User can access the live active, death and recovered cases of coronavirus worldwide and by countries.",
                "User can see cases on a map, worldwide and by countries (LeafletJS).",
                "User can access the data of number of death cases for the past six months via a line graph.(chartJS). "]}
                tech={["ReactJS" , "LeafletJS", "ChartJS", "fetchAPI", "MaterialUI", "JavaScript", "CSS3" , "HTML5", "git" ]}
                gitHubLink="https://github.com/imviharevankar/covid19t"
                webLink="https://imviharevankar.github.io/covid19t/"
            />

            <ProjectCard 
                title="Portfolio"
                subTitle="A personal website."
                description={[
                "User can get to know me and my work.",
                "User can contact me via e-mail or social media."]}
                tech={["ReactJS", "ChartJS", "MaterialUI",  "JavaScript", "CSS3" , "HTML5", "git" ]}
                gitHubLink="https://github.com/imviharevankar/portfolio"
                webLink="https://imviharevankar.github.io/portfolio/"
            />

            <ProjectCard 
                title="Divisas"
                subTitle="A foreign exchange app."
                description={[
                "User can select various international currencies and compare it against with other currency.",
                "User can see how strong one currency is to another.",
                "User can get latest forex rates." 
                ]}
                tech={["JavaScript", "FetchAPI", "CSS3" , "HTML5", "git" ]}
                gitHubLink="https://github.com/imviharevankar/divisas"
                webLink="https://imviharevankar.github.io/divisas/"
            />

            <ProjectCard 
                title="Clima"
                subTitle="A weather app."
                description={[
                "User can get the weather info based on his location",
                "User can see the time via a clock."
                ]}
                tech={["JavaScript", "FetchAPI", "CSS3" , "HTML5", "git" ]}
                gitHubLink="https://github.com/imviharevankar/clima"
                webLink="https://imviharevankar.github.io/clima/"
            />

            <ProjectCard 
                title="TinDog"
                subTitle="Landing page for dinner for dogs."
                description={[
                "User can see an UI designed to get relative info."
                ]}
                tech={["Bootstrap", "CSS3" , "HTML5", "git" ]}
                gitHubLink="https://github.com/imviharevankar/tindog"
                webLink="https://imviharevankar.github.io/tindog/"
            />
        </div>
    )
}

export default Project;
