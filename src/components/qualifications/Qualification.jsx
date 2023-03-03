import React, {useState} from 'react'
import './Qualification.css'

const Qualification = () => {
  const[toggleState, setToggleState] = useState(1)
  
  const toggleTab = (index) => {
      setToggleState(index)
  }
  
  return (
    <div className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div className="qualification__button qualification__active button--flex" onClick={ () => toggleTab(1) } >
                <i className="uil uil-graduation-cap qualification__icon"></i> Education
            </div>      
            <div className="qualification__button button--flex" onClick={ () => toggleTab(2) } >
                <i className="uil uil-briefcase-alt qualification__icon"></i> {" "} Experience
            </div>      
          </div>

          <div className="qualification__sections">
            <div className={ toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content" } >

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Web API Dev</h3>
                  <span className="qualification__subtitle">
                    XP
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2021 - 2022
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">Scrum Master</h3>
                  <span className="qualification__subtitle">
                    Udemy
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2022
                  </div>
                </div>
              </div>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">UX Expert</h3>
                  <span className="qualification__subtitle">
                    Udacity
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2023
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">Scrum Master</h3>
                  <span className="qualification__subtitle">
                    Udemy
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2022
                  </div>
                </div>
              </div>
            </div>

            <div className={ toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content" } >

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Product Designer</h3>
                  <span className="qualification__subtitle">
                    Udemy
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2021
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">UX Designer</h3>
                  <span className="qualification__subtitle">
                    Udemy
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2022
                  </div>
                </div>
              </div>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Web Designer</h3>
                  <span className="qualification__subtitle">
                    Figma
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2021
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">UX Designer</h3>
                  <span className="qualification__subtitle">
                    Udemy
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2022
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Qualification