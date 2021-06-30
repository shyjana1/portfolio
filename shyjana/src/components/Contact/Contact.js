import React, {useState} from 'react'
import './Contact.scss'
import contactUs from '../../images/contact.jpeg'
function Contact() {
    const [message, setMessage] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setMessage(true)
    }
    return (
        <div className="contact" id='contact'>
            <div className="left">
                <img src={contactUs} alt='' />
            </div>
            <div className="right">
            <h1>Contact Me</h1>
                <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Email" />
                <textarea placeholder="Enter your message here" />
                <button type="submit">Send</button>
                {message &&  <span>Thank you! <br></br>Will get back to you ASAP :) </span>}
                </form>            
            </div>
        </div>
    )
}

export default Contact
