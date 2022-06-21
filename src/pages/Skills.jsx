import React from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import './skills.css'

function Skills() {
  return (
    <section id="experience">
      <h2>Skills</h2>

   
    <div className ="container experience__container">
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <h4>HTML</h4>
            <small className="text">Experienced</small>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <h4>CSS</h4>
            <small className="text-light">Intermediate</small>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <h4>JavaScript</h4>
            <small className="text-light">Experienced</small>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon"/>
            <h4>Bootstrap</h4>
            <small className="text-light">Intermediate</small>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <h4>ReactJS</h4>
            <small className="text-light">Intermediate</small>
          </article>
        </div>
      </div>
      <div classNAme="experience__backend">
      <h3>Backend Development</h3>
        <div className="experience__content">
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon"/>
            <h4>Node JS</h4>
            <small className="text-light">Experienced</small>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon"/>
            <h4>Mongo DB</h4>
            <small className="text-light">Expereinced</small>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon"/>
            <h4>MySQL</h4>
            <small className="text-light">Experienced</small>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon"/>
            <h4>Java 8</h4>
            <small className="text-light">Experienced</small>
          </article>
        </div>
      </div>

   

    </div>
    </section>
    
  )
}

export default Skills