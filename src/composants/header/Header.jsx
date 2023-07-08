import React, { useState } from 'react'
import "./Header.css"

export const Header = () => {
    const [toggle, showMenu] = useState(false);
  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav_logo">RovertNet</a>

            <div className={toggle ? "nav_menu show-menu" : "nav_menu"}>
                <ul className="nav_list grid">
                    <li className="nav_ithem">
                        <a href="#home" className="nav_link active-link">
                            <i className="uil uil-estate nav_icon"></i>Accueil
                        </a>
                    </li>

                      <li className="nav_ithem">
                          <a href="#about" className="nav_link">
                              <i className="uil uil-user nav_icon"></i>A propos
                          </a>
                      </li>

                      <li className="nav_ithem">
                          <a href="#experiences" className="nav_link">
                              <i className="uil uil-file-alt nav_icon"></i>Experiences
                          </a>
                      </li>

                      <li className="nav_ithem">
                          <a href="service" className="nav_link">
                              <i className="uil uil-briefcase-alt nav_icon"></i>Services
                          </a>
                      </li>

                      <li className="nav_ithem">
                          <a href="#portfolio" className="nav_link">
                              <i className="uil uil-scenery nav_icon"></i>Portfolio
                          </a>
                      </li>

                      <li className="nav_ithem">
                          <a href="#contact" className="nav_link">
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
