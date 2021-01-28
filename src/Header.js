import React from 'react';
import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';

import "./Header.css";

function Header() {

    const history = useHistory();
    
    return (
        <div className="header">
            <h1>imVR</h1>
            <Button onClick={() => history.push("/contact")} className="header__btn">
            Contact Me
            </Button>
            
        </div>
    )
}

export default Header;
