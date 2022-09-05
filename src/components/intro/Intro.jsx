import React from 'react'
import "./intro.css"
import Tennis from "../../img/tennis.jpg"

const Intro = () => {
  return (
    <div  className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
            <h2 className="i-intro">Evan Chang</h2>
            <h1 className="i-name">Private Tennis Lessons</h1>
            <div className="i-title">
                <div className="i-title-wrapper">
                    <div className="i-title-item">Play on your time</div>
                    <div className="i-title-item">Play on a court near you</div>
                    <div className="i-title-item">Develop your game</div>
                    <div className="i-title-item">Learn technique and strategy</div>
                    <div className="i-title-item">Have fun!</div>
                </div>
            </div>
            <p className="i-desc"> Get in contact with me for private tennis lessons!
            </p>
        </div>
      </div>
      <div className="i-right">
        <div className='i-bg'></div>
        {/*<img src={Tennis} alt="" className="i-img" />*/}
      </div>
    </div>
  )
}

export default Intro
