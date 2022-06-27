import React from 'react'
import './skills.css'
import html from "../img/html.png"
import css from "../img/css.png"
import js from "../img/js.png"
import bootstrap from "../img/bootstrap.png"
import react from "../img/react.png"
import node from "../img/node.png"
import mongo from "../img/mongo.png"
import mysql from "../img/mysql.png"
import java from "../img/java.png"
function Skills() {
  return (
    <section id="experience">
      <h2 className="c-title">Skills</h2>

   
    <div className ="container experience__container">
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className="experience__details">
            <img src={html} alt="" style={{width:30}}/>
            <h4>HTML</h4>
            <small className="text">Experienced</small>
          </article>
          <article className="experience__details">
          <img src={css} alt="" style={{width:30}}/>
            <h4>CSS</h4>
            <small className="text">Intermediate</small>
          </article>
          <article className="experience__details">
          <img src={js} alt="" style={{width:30}}/> 
            <h4>JavaScript</h4>
            <small className="text">Experienced</small>
          </article>
          <article className="experience__details">
          <img src={bootstrap} alt="" style={{width:30}}/> 
            <h4>Bootstrap</h4>
            <small className="text">Intermediate</small>
          </article>
          <article className="experience__details">
          <img src={react} alt="" style={{width:30}}/> 
            <h4>ReactJS</h4>
            <small className="text">Intermediate</small>
          </article>
        </div>
      </div>
      <div classNAme="experience__backend">
      <h3>Backend Development</h3>
        <div className="experience__content">
          <article className="experience__details">
          <img src={node} alt="" style={{width:30}}/> 
            <h4>Node JS</h4>
            <small className="text">Experienced</small>
          </article>
          <article className="experience__details">
          <img src={mongo} alt="" style={{width:60}}/> 
            <h4>Mongo DB</h4>
            <small className="text">Experienced</small>
          </article>
          <article className="experience__details">
          <img src={mysql} alt="" style={{width:30}}/> 
            <h4>MySQL</h4>
            <small className="text">Experienced</small>
          </article>
          <article className="experience__details">
          <img src={java} alt="" style={{width:30}}/> 
            <h4>Java 8</h4>
            <small className="text">Experienced</small>
          </article>
        </div>
      </div>

   

    </div>
    </section>
    
  )
}

export default Skills