import React from 'react'

import './Portfolio.scss'
import projects from '../../Projects/Projects'
import Cards from './Cards'
const Portfolio = ({Projects}) => (
    <div className="test"> <h1>Projects</h1>
    <section className="my-projects">

       <div className="projects-container">

        {projects.map(project => (
          <Cards {...project} key={project.id} />
        ))}
      </div>
    </section>
    </div>

)



export default Portfolio