import React from 'react'
import './Header.scss'
import { Person, Mail} from '@material-ui/icons';

function Header({menuOpen, setMenuOpen}) {
    return (
        <div className={"header " + (menuOpen && "active")} id="header">
            <div className="wrapper">  
                <div className="left">
                    <a href='#intro' className='logo'>Shy Jana.</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+972-54-932-6312</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>ShyJana@gmail.com</span>
                    </div>
                </div> 
                  
                <div className="right">
                   <div className="mainmenu" onClick={()=>setMenuOpen(!menuOpen)}>
                       <span className='line1'></span>
                       <span className='line2'></span>
                       <span className='line3'></span>
                   </div> 
                </div> 
            </div>     
        </div>
    )
}

export default Header
