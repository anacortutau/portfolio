import React, { useRef, useState } from "react";
import "./contact.css";
import Phone from "../img/phone.png";
import Email from "../img/email.png";
import emailjs from "emailjs-com"


function Contact() {
  const formRef= useRef()
  const [done, setDone] = useState(false)
  const [dataEmail, setDataEmail] = useState({})

  const handleInput = (e) =>{
      e.preventDefault();

      setDataEmail({...dataEmail, [e.target.name] : e.target.value})



  }
  
  return (
    <div className="c">
      <div className="c-bg">
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title"> Contact me </h1>
          <div className="c-info">
            <div className="c-info-item">
              <img className="c-icon" src={Phone} alt="" />
              +(34)638 951 303
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              anacortutau@gmail.com
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Contact;
