import React from 'react'
import { Link } from 'react-router-dom';
import "./footer.css";
import link from "../img/linkedin.png"
import contact from "../img/contact.png"

function Footer() {
  return (
    <div className="footer">
       
       
            <h6 className="footer-social"><strong>Contact Me</strong></h6>
           <p className="footer-social-media"><Link to={"/contact"}><img src={contact} alt="" style={{width:60}}/></Link></p> 
       
          <p className="footer-social-media"><a href="https://www.linkedin.com/in/anacorbalan/" target="_blank" rel="noreferrer"><img src={link} alt="" style={{width:60}}/></a></p>  
           
        
        
        </div>
  )
}

export default Footer