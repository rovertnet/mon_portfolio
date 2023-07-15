import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Rovertnet</h1>
            <ul className="footer_list">
                <li>
                    <a href="#about" className="foter_link">A propos</a>
                </li>

                  <li>
                      <a href="#portfolio" className="foter_link">Services</a>
                  </li>

                  <li>
                      <a href="#competences" className="foter_link">Compétences</a>
                  </li>

            </ul>

            
        </div>
    </footer>
  )
}

export default Footer