import React, { useState } from 'react';
import "./service.css";

const Service = () => {
    const [Toggle, setToggle] = useState(0)
    const ToggleTab = (index) => {
        setToggle(index)
    }
  return (
    
    <div className="services section" id="services">
          <h2 className="section_title">Services</h2>
          <span className="section_subtitle">introduction</span>

        <div className="services_container container grid">
            <div className="services_content">
                <div>
                    <i className="uil uil-arrow services_icon"></i>
                    <h3 className="services_title">UI/UX <br /> Designer </h3>
                </div>
                  <span className="services_button" onClick={() => ToggleTab(1)}>
                    plus{""} <i className="uil uil-arrow-right services_button-icon"></i>
                </span>
                <div className={Toggle === 1 ? "services_modal active-modal" : "services_modal"}>
                    <div className="services_modal-content">
                          <i onClick={() => ToggleTab(0)} className="uil uil-times services_modal-close"></i>
                        <h3 className="services_modal-title">UI/UX 
                        Designer</h3>
                        <p className="services_modal-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        </p>
                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">Je développe les interfaces utilisateurs (UI)</p>
                            </li>

                              <li className="services_modal-service">
                                  <i className="uil uil-check-circle services_modal-icon"></i>
                                  <p className="services_modal-info">Développement des pages web</p>
                              </li>

                              <li className="services_modal-service">
                                  <i className="uil uil-check-circle services_modal-icon"></i>
                                  <p className="services_modal-info">Création des sites web & application web</p>
                              </li>

                              <li className="services_modal-service">
                                  <i className="uil uil-check-circle services_modal-icon"></i>
                                  <p className="services_modal-info">Création des sites WordPress</p>
                              </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services_content">
                  <div>
                      <i className="uil uil-arrow services_icon"></i>
                      <h3 className="services_title">Conception API<br /> Rest/Rest Full </h3>
                  </div>
                  <span className="services_button">
                      plus{""} <i className="uil uil-arrow-right"></i>
                  </span>
                  <div className="services_modal">
                      <div className="services_modal-content">
                          <i className="uil uil-times services_modal-close"></i>
                          <h3 className="services_modal-title">Conception API 
                          Rest & Rest full</h3>
                          <p className="services_modal-description">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          </p>
                          <ul className="services_modal-services grid">
                              <li className="services_modal-service">
                                  <i className="uil uil-check-circle services_modal-icon"></i>
                                  <p className="services_modal-info">Je développe les interfaces utilisateurs (UI)</p>
                              </li>

                              <li className="services_modal-service">
                                  <i className="uil uil-check-circle services_modal-icon"></i>
                                  <p className="services_modal-info">Développement des pages web</p>
                              </li>

                              <li className="services_modal-service">
                                  <i className="uil uil-check-circle services_modal-icon"></i>
                                  <p className="services_modal-info">Création des sites web & application web</p>
                              </li>

                              <li className="services_modal-service">
                                  <i className="uil uil-check-circle services_modal-icon"></i>
                                  <p className="services_modal-info">Création des sites WordPress</p>
                              </li>
                          </ul>
                      </div>
                  </div>
            </div>

            <div className="services_content">
                  <div>
                      <i className="uil uil-arrow services_icon"></i>
                      <h3 className="services_title">UI/UX <br /> Designer </h3>
                  </div>
                  <span className="services_button">
                      plus{""} <i className="uil uil-arrow-right"></i>
                  </span>
                  <div className="services_modal">
                      <div className="services_modal-content">
                          <i className="uil uil-times services_modal-close"></i>
                          <h3 className="services_modal-title">UI/UX 
                          Designer</h3>
                          <p className="services_modal-description">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          </p>
                          <ul className="services_modal-services grid">
                              <li className="services_modal-service">
                                  <i className="uil uil-check-circle services_modal-icon"></i>
                                  <p className="services_modal-info">Je développe les interfaces utilisateurs (UI)</p>
                              </li>

                              <li className="services_modal-service">
                                  <i className="uil uil-check-circle services_modal-icon"></i>
                                  <p className="services_modal-info">Développement des pages web</p>
                              </li>

                              <li className="services_modal-service">
                                  <i className="uil uil-check-circle services_modal-icon"></i>
                                  <p className="services_modal-info">Création des sites web & application web</p>
                              </li>

                              <li className="services_modal-service">
                                  <i className="uil uil-check-circle services_modal-icon"></i>
                                  <p className="services_modal-info">Création des sites WordPress</p>
                              </li>
                          </ul>
                      </div>
                  </div>
            </div>

            <div className="services_content">
                  <div>
                      <i className="uil uil-arrow services_icon"></i>
                      <h3 className="services_title">Référencement <br /> SEO </h3>
                  </div>
                  <span className="services_button">
                      plus{""} <i className="uil uil-arrow-right"></i>
                  </span>
                  <div className="services_modal">
                      <div className="services_modal-content">
                          <i className="uil uil-times services_modal-close"></i>
                          <h3 className="services_modal-title">Réferencement 
                          SEO</h3>
                          <p className="services_modal-description">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          </p>
                          <ul className="services_modal-services grid">
                              <li className="services_modal-service">
                                  <i className="uil uil-check-circle services_modal-icon"></i>
                                  <p className="services_modal-info">Je développe les interfaces utilisateurs (UI)</p>
                              </li>

                              <li className="services_modal-service">
                                  <i className="uil uil-check-circle services_modal-icon"></i>
                                  <p className="services_modal-info">Développement des pages web</p>
                              </li>

                              <li className="services_modal-service">
                                  <i className="uil uil-check-circle services_modal-icon"></i>
                                  <p className="services_modal-info">Création des sites web & application web</p>
                              </li>

                              <li className="services_modal-service">
                                  <i className="uil uil-check-circle services_modal-icon"></i>
                                  <p className="services_modal-info">Création des sites WordPress</p>
                              </li>
                          </ul>
                      </div>
                  </div>
            </div>

        </div>
    </div>
  )
}

export default Service