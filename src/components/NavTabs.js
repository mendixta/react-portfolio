import React from 'react';
import "../components/css/navTabs.css"

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#Home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
         <h1 class = "title is-3 has-text-white"> HOME   </h1> 
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#projects"
          onClick={() => handlePageChange('Projects')}
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
        >
          <h1 class = "title is-3 has-text-white"> PROJECTS </h1>
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('contact')}
          className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'}
        >
          <h1 class = "title is-3 has-text-white"> CONTACT </h1>
        </a>
      </li>
      
    </ul>
  );
}

export default NavTabs;


