import React from 'react'
import './skills.css'
import Frontend from './frontend'
import Backend from './backend'
import Devops from './devops'
import Database from './database'

function Skills() {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container container grid">
            <Frontend>

            </Frontend>
            <Backend> 

            </Backend>
            <Devops>

            </Devops>
            <Database>
                
            </Database>
        </div>
    </section>
  )
}

export default Skills