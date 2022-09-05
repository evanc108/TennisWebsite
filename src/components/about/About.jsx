import React from 'react'
import "./about.css" 
import pic from "../../img/about.jpg"

const About = () => {
  return (
    <div className="a">
      <div className="a-left"></div>
        <div className="a-card bg"></div>
        <div className="a-card">
          <img 
          src= {pic}
          alt=""
          className="a-img"
          />
        </div>
      <div className="a-right">
        <h1 className=".a-title">About Me</h1>
        <p className="a-sub">
          My name is Evan and I have been playing tennis for about 5 years now. 
          I started playing at Boeing Employee Tennis 
          Club where I recieved lessons
          that enabled me to build a strong foundation of skill and technique.
          From beginners to intermediate players, I am committed to helping tennis 
          players further develop their skills. I offer private tennis lessons that
          put a deep focus on proper technique and strategy necessary to succeed at 
          a high level.
        </p>
      </div>
    </div>
  )
}

export default About
