import React from 'react';
import "../css/contact.css"



const Contact = () => {
    return (
        <div className = "contact-div"> 
           <h4 className = "title is-4 has-text-white"> Send me a Message!</h4>
           <input className = "input" type = "text" placeholder = "name" id = "name"></input>
           <input className = "input" type = "text" placeholder = "email" id = "email"></input>
           <textarea class="textarea" placeholder="your message here" id ="message"></textarea>
                <div className = "button-div">
                     <button class="button is-normal"> <h7 className = "title is-4 has-text-white" id = "sendBtn "> SEND </h7> </button>
                </div>
        </div>

    

    )

}

export default Contact;