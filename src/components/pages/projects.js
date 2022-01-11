import React from 'react';

import "../../components/css/projects.css"
import imageOne from "../../images/project-1.png"
import imageTwo from "../../images/project-2.png"
import imageThree from "../../images/project-3.png"
import imageFour from "../../images/project-4.png"
import imageFive from "../../images/project-5.png"

const Projects = () => {
    return (
<div className = "project-container"> 
 {/* Title / Navigation  */}
    <div className = "top">
        <h1 className = "title is-2 has-text-white"> MY PROJECTS </h1>
</div>

    {/* Project 1 - Task.mp4 */}
<div className = "project-1">
    <div className = "box">
        {/* TITLE */}
        <div className = "title-1">
             <h2 className = "title is-3 has-text-white"> Task.Mp4</h2>
        </div>
        {/* IMAGE */}
        <div className = "1-image">
             <img src = {imageOne} alt = "" className = "one"></img>
        </div>
        {/* LINKS */}
        <div className = "1-link">
        <button className = "button is-fullwidth"> 
            <a href="https://github.com/alexdmacon/task-mp3"> <h7 className = "title is-4 has-text-white"> GitHub Repository</h7>  </a>
        </button>
        <button className = "button is-fullwidth"> 
             <a href="https://alexdmacon.github.io/task-mp3/"><h7 className = "title is-4 has-text-white"> Deployed Application</h7>  </a>
        </button>
    </div>
    </div>
</div>

        {/* Project 2 - S.E.C.C */}
<div className = "project-2">
    <div className = "box">
        {/* TITLE */}
        <div className = "title-2">
             <h2 className = "title is-3 has-text-white"> S.E.C.C</h2>
        </div>
        {/* IMAGE */}
        <div className = "2-image">
             <img src = {imageTwo} alt = "" className = "two"></img>
        </div>
        {/* LINKS */}
        <div className = "1-link">
        <button className = "button is-fullwidth"> 
            <a href="https://github.com/mendixta/S.E.C.C"> <h7 className = "title is-4 has-text-white"> GitHub Repository</h7> </a>
        </button>
        <button className = "button is-fullwidth"> 
             <a href="https://s-e-c-c.herokuapp.com/"> <h7 className = "title is-4 has-text-white"> Deployed Application</h7>  </a>
        </button>
    </div>
    </div>
</div>

        {/* Project 3 - Workday Planner */}
<div className = "project-3">
    <div className = "box">
        {/* TITLE */}
        <div className = "title-3">
             <h2 className = "title is-3 has-text-white"> Workday Planner </h2>
        </div>
        {/* IMAGE */}
        <div className = "3-image">
             <img src = {imageThree} alt = "" className = "three"></img>
        </div>
        {/* LINKS */}
        <div className = "1-link">
        <button className = "button is-fullwidth"> 
            <a href="https://github.com/mendixta/workday-scheduler"> <h7 className = "title is-4 has-text-white"> GitHub Repository</h7> </a>
        </button>
        <button className = "button is-fullwidth"> 
             <a href="https://mendixta.github.io/workday-scheduler/"> <h7 className = "title is-4 has-text-white"> Deployed Application </h7> </a>
        </button>
    </div>
    </div>
</div>


    {/* Project 4 - Password Generator  */}
<div className = "project-4">
    <div className = "box">
        {/* TITLE */}
        <div className = "title-4">
             <h2 className = "title is-3 has-text-white"> Password Generator </h2>
        </div>
        {/* IMAGE */}
        <div className = "3-image">
             <img src = {imageFour} alt = "" className = "four"></img>
        </div>
        {/* LINKS */}
        <div className = "1-link">
        <button className = "button is-fullwidth"> 
            <a href="https://github.com/mendixta/Password-Generator"> <h7 className = "title is-4 has-text-white"> GitHub Repository</h7> </a>
        </button>
        <button className = "button is-fullwidth"> 
             <a href="https://mendixta.github.io/Password-Generator/"> <h7 className = "title is-4 has-text-white">  Deployed Application </h7>  </a>
        </button>
    </div>
    </div>
</div>



    {/* Project 5 - Fitness Tracker  */}
<div className = "project-5">
    <div className = "box">
        {/* TITLE */}
        <div className = "title-5">
             <h2 className = "title is-3 has-text-white"> Fitness Tracker </h2>
        </div>
        {/* IMAGE */}
        <div className = "3-image">
             <img src = {imageFive} alt = "" className = "four"></img>
        </div>
        {/* LINKS */}
        <div className = "1-link">
        <button className = "button is-fullwidth"> 
            <a href="https://github.com/mendixta/get-fit"> <h7 className = "title is-4 has-text-white"> GitHub Repository</h7> </a>
        </button>
        <button className = "button is-fullwidth"> 
             <a href="https://track-the-fit.herokuapp.com"> <h7 className = "title is-4 has-text-white"> Deployed Application </h7> </a>
        </button>
    </div>
    </div>
</div>

</div>

 )
}
export default Projects;