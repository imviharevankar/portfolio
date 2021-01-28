import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"


import Header from "./Header";
import NavBar from "./NavBar";
import Loader from "./Loader";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Skills from "./Skills";
import Contact from "./Contact";

import './App.css';


function App() {

  const [showLoader, setShowLoader] = useState(true);
  const [showMain, setShowMain] = useState(false);

  const timeOut = () => {
    console.log(showLoader)
    setTimeout(() => {
      setShowLoader(false);
      setShowMain(true)
    }, 1500);
  }

  useEffect(() => {
      timeOut();
  }, [])


  
  return (

    <Router>
        <div className="app">
        <Header />
        <div className="app__box">
        <NavBar />
        </div>
      </div>
        <div className="app__main">
            <Switch>
                <Route  path="/contact">
                    {showLoader && <Loader />}
                    {showMain && <Contact />}
                </Route>
                <Route path="/skills">
                    {showLoader && <Loader />}
                    {showMain && <Skills />}
                </Route>
                <Route path="/projects">
                    {showLoader && <Loader />}
                    {showMain && <Project />}
                </Route>
                <Route path="/about">
                    {showLoader && <Loader />}
                    {showMain && <About />}
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    
    <Footer />
    </Router>
  );
}

export default App;
