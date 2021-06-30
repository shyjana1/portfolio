import React from 'react'
import './Project.scss'
import Mobile from '../../images/mobile.png'
import Misfits from '../../images/misfits.png'
import Arrow from '../../images/arrow.png'
function Project() {
    return  (
        <div className="project" id='project'>
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                
                                <h1>Film Quiz</h1>
                                <h2>An awesome Quiz of our favourite films ever.</h2> 
                            </div>
                        </div>
                        <div className="right">
                        <a href="https://www.instagram.com/p/COfKqZhj16E/">
                        <img src={Misfits} alt="" ></img>
                        </a> 
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
