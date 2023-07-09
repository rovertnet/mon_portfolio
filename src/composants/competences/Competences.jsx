import React from 'react';
import "./competence.css";
import Frontend from './Frontend';
import Backend from './Backend';

const Competences = () => {
  return (
    <section className="skils section" id="skills">
        <h2 className="section_title">Compétences</h2>
        <span className="section_subtitle">Mes niveaux techniques</span>
        <div className="skills_container container grid">
        <Frontend />

        <Backend />
        </div>
    </section>
  )
}

export default Competences