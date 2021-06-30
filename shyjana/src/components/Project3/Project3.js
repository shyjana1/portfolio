import React from 'react'
import './Project3.scss'

import Misfits from '../../images/misfits.png'
import ShyMDb from '../../images/Shymdb.jpg'
export default function Project3() {
    return (
        <div className="project3" id='project'>
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                
                                <h1>ShyMDb</h1>
                                <h2>Online database of information with films, TV series etc.</h2> 
                            </div>
                        </div>
                        <div className="right">
                        <a href="https://www.loom.com/share/909350f48c234de7b374de8741f90d99">
                        <img src={ShyMDb} alt="" ></img>
                        </a> 
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
