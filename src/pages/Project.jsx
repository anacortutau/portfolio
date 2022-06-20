import React from 'react'
import { Link } from 'react-router-dom'
import './project.css'

function Project({name, img,link}) {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>

      </div>
      <Link to={link}><strong>{name}</strong></Link>
      <img src={img} alt="" className="p-img" />
      
      
     
      
      
      </div>
  )
}

export default Project