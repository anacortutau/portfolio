import React, { useRef, useState } from "react";
import "./contact.css";
import Phone from "../img/phone.png";
import Email from "../img/email.png";
import emailjs from "emailjs-com"


function Contact() {
  const formRef= useRef()
  const [done, setDone] = useState(false)
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    emailjs.sendForm(
      'service_zhof2sv', 
      'service_zhof2sv', formRef.current, 'YOUR_PUBLIC_KEY')
    .then((result) => {
        console.log(result.text);
        setDone(true)
    }, (error) => {
        console.log(error.text);
    });

  }
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title"> Contact with me </h1>
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
          <form  ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name"/>
            <br />
            <input type="text" placeholder="Email" name="user-email"/>
            <br />
            <textarea rows="5" placeholder="Message" name="message"/>
            <br />
            <button>Submit</button>
            {done && "Thank you"}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
