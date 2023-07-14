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
                        <i className="bx bx-mail-send contact_card-icon"></i>
                        <h3 className="contact_card-title">E-mail</h3>
                        <span className="contact_card-data">matundukabamba@gmail.com</span>
                        <a href="mailto:matundukabamba@gmail.com.com" className="contact_button">Ecrivez-moi 
                        <i className="bx bx-right-arrow-alt 
                        contact_button-icon"></i> </a>
                  </div>

                  <div className="contact_card">
                    <i className="bx bxl-whatsapp contact_card-icon"></i>
                    <h3 className="contact_card-title">WhatsApp</h3>
                    <span className="contact_card-data">0823444705</span>
                    <a href="https://api.whatsapp.com/send?phone=0823444705&text=Salut, more information!" className="contact_button">Ecrivez-moi <i className="bx bx-right-arrow-alt 
                              contact_button-icon"></i> </a>
                  </div>

                  <div className="contact_card">
                      <i className="bx bxl-messenger contact_card-icon"></i>
                      <h3 className="contact_card-title">Messenger</h3>
                      <span className="contact_card-data">IL Robert Kabamba</span>
                      <a href="" className="contact_button">Ecrivez-moi <i className="bx bx-right-arrow-alt 
                                contact_button-icon"></i> </a>
                  </div>
                </div>
            </div>

           <div className="contact_content">
              <h3 className="contact_title">Faites moi part de votre projet</h3>
              <form className="contact_form">
                <div className="contact_form-div">
                  <label className="contact_form-tag">Nom</label>
                  <input 
                    type="text" 
                    name='name' 
                    className="contact_form-input" 
                    placeholder='tapez votre nome!'
                  />
                </div>
              </form>
           </div>
      </div>
    </section>
  )
}

export default Contact