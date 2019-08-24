import React from 'react'
import './Contact.scss'
const Contact = () =>  (

            <div class="contact-me">
          {/* LinkedIn */}
    <a aria-label="Navigate to Linkedin " href="https://www.linkedin.com/in/jonathan-nilsson-a72356110/" rel="noopener noreferrer" target="_blank">
      <i className="fab fa-linkedin" aria-hidden="true" />
    </a>

    {/** Github */}
    <a aria-label="Navigate to Github" href= "https://github.com/joni43" rel="noopener noreferrer" target="_blank">
      <i className="fab fa-github-square" aria-hidden="true" />
    </a>

    {/** GMAIL */}
    <a href="mailto:jonathan.v.nilsson@gmail.com" rel="noopener noreferrer" target="_blank">
      <i className="fa fa-envelope" aria-hidden="true" />
    </a>
            </div>


)

export default Contact