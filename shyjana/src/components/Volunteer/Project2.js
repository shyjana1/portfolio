import React from 'react'
import './Project2.scss'

import sharoni from '../../images/sharoni.jpg'


function Project2() {
    return  (
        <div className="project2" id='project'>
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                
                                <h1>Sharoni Bread & Spread</h1>
                                <h2>Vegan Lickin' Good</h2> 
                            </div>
                        </div>
                        <div className="right">
                        <a href="https://www.loom.com/share/871585d88067450f8579268044d865a5">
                        <img src={sharoni} alt="" ></img>
                        </a> 
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project2
