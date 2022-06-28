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
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(formRef.current)
    emailjs.sendForm(
      'service_zcn7c2w', 
      'template_kze37kh', formRef.current, 'ZdMAxBoOpbhjImlaC')
    .then((result) => {
        console.log(result.text);
        setDone(true)
        setDataEmail({user_name: "", user_email: "", message: ""})
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
            <input type="text" placeholder="Name" name="user_name" onChange={handleInput} value={dataEmail.user_name}/>
            <br />
            <input type="text" placeholder="Email" name="user-email" onChange={handleInput} value={dataEmail.user_email}/>
            <br />
            <textarea rows="5" placeholder="Message" name="message" onChange={handleInput} value={dataEmail.message}/>
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
