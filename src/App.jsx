import React from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App(){
  return(
    <>
    <Home/>
    <About/>
    <Education/>
    <Skills/>
    <Contact/>
    <Navbar/>
    <Footer/>
    </>
  )
}
export default App;

