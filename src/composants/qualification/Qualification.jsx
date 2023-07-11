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
                <div className="qualification_content">
                    <div className="qualification_data">
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        <div>
                            <h3 className="qualification_title"></h3>
                            <span className="qualification_subtitle">
                                Institut Superieur d'Informatique Programmation & Analyse
                            </span>
                            <div className="qualification_calender">
                                <i className="uil uil-calender-alt"></i>
                                2021 - Présente
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