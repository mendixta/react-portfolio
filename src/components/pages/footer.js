import React from 'react';
import "../css/footer.css"

const Footer = () => {
    return (
    <div className = "footer-div"> 
         <h1 className="title is-5 has-text-white"> Made by Griselda Mendieta with <i class="fas fa-heart"></i> </h1>

        <div className="socials">
        <button className = "button"> 
             <a href="https://github.com/mendixta">
                 <h7 className = "title is-5 has-text-white"> GitHub</h7>  </a>
        </button>
        
        <button className = "button"> 
             <a href="https://www.linkedin.com/in/griselda-i-mendieta/">
                 <h7 className = "title is-5 has-text-white"> LinkedIn</h7>  </a>
        </button>

        <button className = "button"> 
             <a href="https://drive.google.com/file/d/18LRUy0nWDRAYbff5ciCp5qYPHGTe2G8q/view?usp=sharing">
                 <h7 className = "title is-5 has-text-white"> Resume </h7>  </a>
        </button>



        </div>
     </div>

        


    )

}

export default Footer;