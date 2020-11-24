import React from 'react';

import "./HireMe.css";

function HireMe() {
    return (
        <div className="hireMe" id="hireMe">
            <h1>Hire Me</h1>
            <form>
    
                <input placeholder="Enter your name" className="hireMe__styles"></input>
                <input placeholder="Enter your email address" className="hireMe__styles"></input>
                <textarea placeholder="Type your message..." className="hireMe__styles"></textarea>
            <button>
                Submit
            </button>              
            </form>
    
        </div>
    )
}

export default HireMe;
