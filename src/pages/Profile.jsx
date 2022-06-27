import React, { useState } from "react";
import "./profile.scss";
import ProjectsList from "../pages/ProjectsList";
import Contact from "./Contact";
import Toggle from "../components/toggle/Toggle";
import { ThemeProvider } from "react-bootstrap";
import Skills from "./Skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngular,
  faCss3,
  faGit,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import ResumeList from "./ResumeList";
import Logo from '../img/logo.png'
import Footer from "../components/Footer";


// import Me from "../../src/img/me.png"

function Profile() {
  const [dark, setDark] = useState(false);

  return (
    <>
    
      <Toggle />
     
      
      <div className="i">
        
        <div className="i-left">
          <div className="i-left-wrapper">
            <h1 className="i-intro">
              <strong>Hello World!</strong>
            </h1>
            <br />
            <h3 className="i-name">
              <strong> I'm Ana</strong>
            </h3>
          </div>
        </div>
      </div>

      <div className="i-title">
        <div className="i-title-wrapper">
          <div className="i-title-item">MERN Stack Developer</div>
          <div className="i-title-item">JavaScript(ES6)</div>
          <div className="i-title-item">React</div>
          <div className="i-title-item">HTML && CSS</div>
          <div className="i-title-item">MongoDB</div>
        </div>
      </div>

      <div className="i-right">
        I am a restless person, in continuous learning.
        <p>
          We live in the digital age, so for my professional development to be
          optimal.
          <p>I seek to be at the forefront of technology.</p>
        </p>
      </div>

      
    
      <img src={Logo} className="my-header"></img>

        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGit} color="#EC4D2H" />
          </div>
        </div>
      
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
     

       
      <ResumeList />
      <br />
      <ProjectsList />
      <br />
      <br />
      <Skills />
      <br />
      <br />
      <Contact />
      <Footer/>

     
    </>
  );
}

export default Profile;
