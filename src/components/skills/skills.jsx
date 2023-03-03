import React from 'react'
import './Skills.css'
import Frontend from './Frontend'
import Backend from './Backend'
import Devops from './Devops'
import Database from './Database'
import Version from './version'
import Mobile from './mobile'

function Skills() {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container container grid">
            <Frontend />
            <Backend />
            <Mobile />

            <Database />  
            <Version />
            <Devops />
        </div>
    </section>
  )
}

export default Skills