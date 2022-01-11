import "../css/home.css"
import icon from "../../images/icon.jpeg";


const Home = () => {
    return (
        <div className = "intro-page">
            {/* <div className = "nav">
                 <h1 className="title is-2"> Griselda Mendieta's Portfolio </h1>   
            </div> */}

            <div className = "link-div"> 
                        {/* <h2 className = "title is-4"> My Projects</h2>
                        <h2 className = "title is-4"> Socials </h2>
                        <h2 className = "title is-4"> Contact </h2> */}
                    </div>

                         {/* About Me - Icon and Information  */}
        <div className = "ab-div"> 
            <div className = "box">
                 <div className = "image">
                    <img src = {icon} alt = "" className = "icon"></img>
             </div>
            

                <div className = "about">   
                     <h3 className="title is-4 has-text-white">
                          Welcome! My name is Griselda, I am 21 years old and I am currently studying
                         web development at SMU. I have knowledge in the following languages: 
                     </h3>
                </div>

                <div className = "languages">
                    <p className = "item"> HTML</p>
                    <p className = "item"> CSS </p>
                    <p className = "item"> JavaScript</p>
                    <p className = "item"> Node and Express.JS</p>
                    <p className = "item"> React </p>
                </div>
        </div>


     

            </div>

        </div> // END
    )

}

export default Home;