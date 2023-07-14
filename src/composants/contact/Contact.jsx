import React from 'react';
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
          <h2 className="section_title">Contactez moi</h2>
          <span className="section_subtitle">introduction</span>

          <div className="contact_container container grid">
            <div className="contact_content">
                <h3 className="contact_title">Talke to me</h3>
                <div className="contact_info">
                    <div className="contact_card">
                        <i className="bx bx- contact_card-icon"></i>
                        <h3 className="contact_card-title"></h3>
                        <span className="contact_card-data"></span>
                        <a href="" className="contact_button">Ecrivez-moi <i className="bx bx-right-arrow-alt 
                        contact_button-icon"></i> </a>
                    </div>
                </div>
            </div>
          </div>
    </section>
  )
}

export default Contact