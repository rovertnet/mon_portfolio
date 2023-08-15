import React, { useState } from 'react'
import "./Header.css"

export const Header = () => {

    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });

    const [toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home")
  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav_logo">RovertNet</a>

            <div className={toggle ? "nav_menu show-menu" : "nav_menu"}>
                <ul className="nav_list grid">
                    <li className="nav_ithem">
                        <a 
                            href="#home" 
                            onClick={() => setActiveNav('#home')} 
                              className={activeNav === "#home" ? "nav_link active-link" : "nav_link"}
                        >
                              <i className="uil uil-estate nav_icon"></i>Accueil
                        </a>
                    </li>

                      <li className="nav_ithem">
                          <a 
                            href="#about" 
                            onClick={() => setActiveNav('#about')}
                            className={activeNav === "#about" ? "nav_link active-link" : "nav_link"}
                          >
                              <i className="uil uil-user nav_icon"></i>A propos
                          </a>
                      </li>
                      {/*  
                      <li className="nav_ithem">
                          <a 
                            href="#competences" 
                              onClick={() => setActiveNav('#competences')}
                              className={activeNav === "#competences" ? "nav_link active-link" : "nav_link"}
                          >
                              <i className="uil uil-file-alt nav_icon"></i>Compétences
                          </a>
                      </li>
                      */}
                      <li className="nav_ithem">
                          <a  
                             href="#services" 
                              onClick={() => setActiveNav('#services')}
                              className={activeNav === "#services" ? "nav_link active-link" : "nav_link"}
                          >
                              <i className="uil uil-briefcase-alt nav_icon"></i>Services
                          </a>
                      </li>
                      {/*  
                      <li className="nav_ithem">
                          <a 
                            href="#portfolio" 
                              onClick={() => setActiveNav('#portfolio')}
                              className={activeNav === "#portfolio" ? "nav_link active-link" : "nav_link"}
                           >
                              <i className="uil uil-scenery nav_icon"></i>Portfolio
                          </a>
                      </li> 
                      */}
                      <li className="nav_ithem">
                          <a 
                            href="#contact" 
                              onClick={() => setActiveNav('#contact')}
                              className={activeNav === "#contact" ? "nav_link active-link" : "nav_link"}
                          >
                              <i className="uil uil-message nav_icon"></i>Contact
                          </a>
                      </li>
                </ul>

                  <i className="uil uil-times nav_close" onClick={() => showMenu(!toggle)}></i>
            </div>

            <div className="nav_toggle" onClick={() => showMenu(!toggle)}>
                <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}
