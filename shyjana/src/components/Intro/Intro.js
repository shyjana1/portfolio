import React from 'react'
import './Intro.scss'
import Profile from '../../images/profile.jpeg'
import down from '../../images/down.jpg'
function Intro() {
    return (
        <div className="intro" id='intro'>
        <div className="left">
        <div className="imgContainer">
            <img src={Profile} alt='' />
        </div>
        </div> 
        <div className="right">
            <div className="wrapper">
                <h2>Hi There, I'm</h2>
                <h1>Shy Jana</h1>
                <h3>Full Stack <span>Web Developer</span></h3>
            </div>
            <a href="#project">
                <img src={down} alt='' />
            </a>
        </div> 
        </div>
    )
}

export default Intro
