import React from 'react'
import './Resume.scss'

var ScrollAnim = require('rc-scroll-anim');
var Element = ScrollAnim.Element;

const Resume = () => (
  <section className='resume-row'>
    <div class='resume-columns' id="page2">
      <h1 class='heading'>Work Experience</h1>
      <h2 class='title'>Wise IT</h2>
      <h3 class='subtitle'>Technical support</h3>
      <h4>2016 - 2017 </h4>
      <p>
        Arbetade hos Handelsbanken inom deras IT support avdelning. Hjälpte
        användare i Windows miljön. System - och program jag använde och gav
        support till. Active Directory,Service manager för loggning av ärenden
        efter varje samtal. Intranät och Wlan. Officepaket,Lotus Notes,
        Mobila applikationer som Handelsbankens anställda använder sig av.
      </p>
      <h2 class='title'>GlobeTech Ltd</h2>
      <h3 class='subtitle'>Data Analyst´s</h3>
      <h4>2016</h4>
      <p>
      </p>
      <h2 class='title'>Hewlett-Packard</h2>
      <h3 class='subtitle'>Technical support</h3>
      <h4>2014 - 2016 </h4>
      <p>
      Hanterade klienter via telefon och mail för teknisk support, dessa samtal och ärenden bevakades noggrant så att man uppfyllde produktivitet och kvalitetsmål.
      </p>
    </div>

    <div class='resume-skills'>
      <h1 class='heading'>Skills</h1>
      <h2 class='title'>Backend</h2>
      <h3 class='subtitle'>PostgreSQL</h3>
      <p> PostgreSQL | Hanterat databaser i postgreSQL med hjälp av Postico och knexjs</p>

      <h3 class="subtitle">API</h3>
      <p>Efarenhet av att hämta och hantera API med hjälp av  Koa.js, Express och postman</p>

      <h1 class="heading">Education</h1>
      <h2 class="title"> KYH - Front-end developer </h2>
      <h4>Aug. 2018 - May. 2020 </h4>



    </div>
  </section>
)

export default Resume
