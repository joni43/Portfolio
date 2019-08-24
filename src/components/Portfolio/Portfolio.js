import React from 'react'

import './Portfolio.scss'
import projects from '../../Projects/Projects'
import Cards from './Card/Cards'

var ScrollAnim = require('rc-scroll-anim');
var Element = ScrollAnim.Element;
const Portfolio = ({Projects}) => (
    <div className="test"> <h1>Projects</h1>
    <section className="my-projects">

       <div className="projects-container" id="page1">

        {projects.map(project => (
          <Cards {...project} key={project.id} />
        ))}
      </div>
    </section>
    </div>

)



export default Portfolio