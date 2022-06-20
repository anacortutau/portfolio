import React, { useState } from 'react'
import "./profile.css"
import ProjectsList from "../pages/ProjectsList"
import Contact from './Contact'
import Toggle from '../components/toggle/Toggle'
import { ThemeProvider } from 'react-bootstrap'
// import Me from "../../src/img/me.png"

function Profile() {
  const [dark, setDark] = useState(false)
  return (
    <>
    
    
    <Toggle/>
   
    <div className = "i">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h2 className="i-name">Ana</h2>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">MERN Stack Developer</div>
              <div className="i-title-item">JavaScript(ES6)</div>
              <div className="i-title-item">React</div>
              <div className="i-title-item">HTML && CSS</div>
              <div className="i-title-item">MongoDB</div>
            </div>
          </div>
          <div className="i-desc">
            I am a restless person, in continuous learning.
            <p>We live in the digital age,
            so for my professional development to be optimal.
            <p>I seek to be at the forefront of technology.</p>
            </p>
          </div>


        </div>
       
        <div className="i-right">
          <div className="i-bg"></div>
          {/* <img src={me} alt="" className="i-img" /> */}

        </div>
       
        
       
     
       
        
         
       </div>

       <ProjectsList/>
       <Contact/>

       </>
       
    
  )
}

export default Profile