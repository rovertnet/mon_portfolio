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
                    <i className="uil uil- qualificatio_icon"></i>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification