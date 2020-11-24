import React from "react";

import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import HireMe from "./Components/HireMe/HireMe";
import Footer from "./Components/Footer/Footer";

import "./App.css";


function App() {
  return (
    <div className="app">
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <HireMe />
      <Footer />
    </div>
  );
}

export default App;
