import React from 'react'
import './project.css'

function Project({name, img,link}) {
  return (
    <dv className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>

      </div>
      {/* <a href={link} target="_blank" rel="noreferrer"><strong>{name}</strong></a> */}
      <img src={img} alt="" className="p-img" />
      <a href={link} target="_blank" rel="noreferrer"><strong>{name}</strong></a>
      
      
     
      
      
      </dv>
  )
}

export default Project