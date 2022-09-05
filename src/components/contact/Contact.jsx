import React from "react";
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false);

    // const handleSubmit = (e)=>{
    //     e.preventDefault();
    //     emailjs
    //         .sendForm(
    //             "service_r1xidis",
    //             "template_rmep3q6",
    //             form.current,
    //             "QsQ2r_2g_xzM7Xz6z"
    //         )
    //         .then(
    //           (result) => {
    //             console.log(result.text);
    //             setDone(true)
    //           },
    //           (error) => {
    //             console.log(error.text);
    //           }
    //         );
    // }
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Interested? Get in contact!</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +1 425-394-6451
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              evanc108@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Puyallup, WA
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Book a Lesson</b> I am always willing to schedule a time 
            that is convenient for you                  
          </p>
          <form>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="email" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "SENT"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
