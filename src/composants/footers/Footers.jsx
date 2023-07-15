import React from 'react';
import "./footers.css";

const Footers = () => {
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

                <div className="footer_social">
                    <a href="https://www.instagram.com/" className="footer_social-link" target='blank'>
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="https://twitter.com/" className="footer_social-link" target='blank'>
                        <i className="bx bxl-twitter"></i>
                    </a>
                    <a href="https://www.facebook.com/" className="footer_social-link" target='blank'>
                        <i className="bx bxl-facebook"></i>
                    </a>
                </div>
                <span className="footer_copy">&#169; Crypticalcoder. Tous droit par RovertNet</span>
            </div>
        </footer>
    )
}

export default Footers