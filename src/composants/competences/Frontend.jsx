import React from 'react';
import "./competence.css";

const Frontend = () => {
  return (
    <div className="skills_content">
        <h3 className="skills_title">Développeur Front-end</h3>
        <div className="skills_box">
            <div className="skills_group">
                <div className="skills_data">
                    <i className="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills_name">HTML</h3>
                        <span className="skills_level">Basic</span>
                    </div>
                </div>

                <div className="skills_data">
                    <i className="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills_name">CSS</h3>
                        <span className="skills_level"></span>
                      </div>
                </div>

                  <div className="skills_data">
                      <i className="bx bx-badge-check"></i>

                      <div>
                          <h3 className="skills_name">Bootstrap</h3>
                          <span className="skills_level">Intermediaire</span>
                      </div>
                  </div>
                
                  <div className="skills_data">
                      <i className="bx bx-badge-check"></i>

                      <div>
                          <h3 className="skills_name">Sass</h3>
                          <span className="skills_level">Basic</span>
                      </div>
                  </div>

                  <div className="skills_data">
                      <i className="bx bx-badge-check"></i>

                      <div>
                          <h3 className="skills_name">React js</h3>
                          <span className="skills_level">Intermediaire</span>
                      </div>
                  </div>

                  <div className="skills_data">
                      <i className="bx bx-badge-check"></i>

                      <div>
                          <h3 className="skills_name">Vue js</h3>
                          <span className="skills_level">Basic</span>
                      </div>
                  </div>

                  <div className="skills_data">
                      <i className="bx bx-badge-check"></i>

                      <div>
                          <h3 className="skills_name">WordPress</h3>
                          <span className="skills_level">Intermediaire</span>
                      </div>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Frontend