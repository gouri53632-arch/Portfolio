
import React from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Project from "./components/Project";
//import Counter from "./components/Counter";

function App() {
    return(
        <>
            <Home/>
            <About/>
            <Education/>
            <Skills/>
            <Project/>
            <Contact/>
        </>
    )
}

export default App;

