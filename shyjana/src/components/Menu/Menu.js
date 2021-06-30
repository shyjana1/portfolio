import React from 'react'
import './Menu.scss'

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
               <li onClick={()=> setMenuOpen(false)}><a href='#intro'>About Me</a></li> 
               <li onClick={()=> setMenuOpen(false)}><a href='#project'>My Projects</a></li> 
               <li onClick={()=> setMenuOpen(false)}><a href='#contact'>Contact Me</a></li> 
            </ul>
        </div>
    )
}
