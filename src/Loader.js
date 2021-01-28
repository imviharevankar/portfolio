import React from 'react';

import r2d2 from "./r2d2.svg";
import "./Loader.css";

function Loader() {
    return (
        <div className="loader">
            <img src={r2d2} alt="loader"></img>
            
        </div>
    )
}

export default Loader
