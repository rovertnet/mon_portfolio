import React from 'react';
import "./qualification.css";

const Qualification = () => {
  return (
    <section className="qualification section">
        <h2 className="section_title">Qualification</h2>
        <span className="section_subtitle">mon introduction</span>

        <div className="qualification_container container">
            <div className="qualification_tabs">
                <div className="qualification_button button--flex">
                    <i className="uil uil-graduation-cap qualificatio_icon"></i>{""}
                    Education
                </div>

                <div className="qualification_button qualification_active button--flex">
                      <i className="uil uil-briefcase qualificatio_icon"></i>{""}
                      Expériences
                </div>
            </div>

            <div className="qualification_sections">
                <div className="qualification_content qualification_content-active">
                    <div className="qualification_data">
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        <div>
                            <h3 className="qualification_title">Génie Logiciel</h3>
                            <span className="qualification_subtitle">
                                Institut Superieur d'Informatique Programmation & Analyse
                            </span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i>
                                2022 - Licence
                            </div>
                        </div>
                    </div>
                    
                      <div className="qualification_data">
                          <div>
                              <span className="qualification_rounder"></span>
                              <span className="qualification_line"></span>
                          </div>
                          <div>
                              <h3 className="qualification_title">Développement web</h3>
                              <span className="qualification_subtitle">
                                  Open classRoom - à distance
                              </span>
                              <div className="qualification_calender">
                                  <i className="uil uil-calendar-alt"></i>
                                  2021 - Certificat
                              </div>
                          </div>
                      </div>

                      <div className="qualification_data">
                          <div>
                              <span className="qualification_rounder"></span>
                              <span className="qualification_line"></span>
                          </div>
                          <div>
                              <h3 className="qualification_title">Informatique de gestion</h3>
                              <span className="qualification_subtitle">
                                  Institut Superieur d'Informatique Programmation & Analyse
                              </span>
                              <div className="qualification_calender">
                                  <i className="uil uil-calendar-alt"></i>
                                  2020 - Graduat
                              </div>
                          </div>
                      </div>

                      <div className="qualification_data">
                          <div>
                              <span className="qualification_rounder"></span>
                              <span className="qualification_line"></span>
                          </div>
                          <div>
                              <h3 className="qualification_title">Développement de logiciels</h3>
                              <span className="qualification_subtitle">
                                  Centre de formation - CECONTEC/Kinshasa
                              </span>
                              <div className="qualification_calender">
                                  <i className="uil uil-calendar-alt"></i>
                                  2018 - Certificat
                              </div>
                          </div>
                      </div>
                </div>

                <div className="qualification_content">
                      <div className="qualification_data">
                          <div>
                              <span className="qualification_rounder"></span>
                              <span className="qualification_line"></span>
                          </div>
                          <div>
                              <h3 className="qualification_title">Développeur Web | Web Master</h3>
                              <span className="qualification_subtitle">
                                  Mans Consulting
                              </span>
                              <div className="qualification_calender">
                                  <i className="uil uil-calendar-alt"></i>
                                  2023
                              </div>
                          </div>
                      </div>

                      <div className="qualification_data">
                          <div>
                              <span className="qualification_rounder"></span>
                              <span className="qualification_line"></span>
                          </div>
                          <div>
                              <h3 className="qualification_title">Développement web</h3>
                              <span className="qualification_subtitle">
                                  MAFRICOM
                              </span>
                              <div className="qualification_calender">
                                  <i className="uil uil-calendar-alt"></i>
                                  2022
                              </div>
                          </div>
                      </div>

                      <div className="qualification_data">
                          <div>
                              <span className="qualification_rounder"></span>
                              <span className="qualification_line"></span>
                          </div>
                          <div>
                              <h3 className="qualification_title">Développeur Web</h3>
                              <span className="qualification_subtitle">
                                  La Colomb Transfert
                              </span>
                              <div className="qualification_calender">
                                  <i className="uil uil-calendar-alt"></i>
                                  2022 
                              </div>
                          </div>
                      </div>

                      <div className="qualification_data">
                          <div>
                              <span className="qualification_rounder"></span>
                              <span className="qualification_line"></span>
                          </div>
                          <div>
                              <h3 className="qualification_title">Développeur Web</h3>
                              <span className="qualification_subtitle">
                                  Bestech Consult
                              </span>
                              <div className="qualification_calender">
                                  <i className="uil uil-calendar-alt"></i>
                                  2020 - 2023
                              </div>
                          </div>
                      </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification