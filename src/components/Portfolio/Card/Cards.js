import React, {Component} from 'react'
import styled from 'styled-components'

// import './Portfolio.scss'
import './Card.scss'
import { Card, Icon, Avatar } from 'antd';

export const CardProjects = styled(Card)`
margin-top:40px;
width:300px;
`
class Cards extends Component {


    render() {
        // Destructuring
        const { url, alt, head, text,tool1,tool2,tool3, button_url } = this.props;
        return (
            <CardProjects

            cover={
                <img src={url} alt={alt} />
            }



            >

          <h3>{head}</h3>
          <p className="text">{text}</p>
          <p />

          <div className="button">
            <a
              href={button_url}
              target="_blank"
              className="readmore"
              without="true"
              rel="noopener noreferrer"
            >
              View Github repo
            </a>
          </div>
          <li>
          <img src={tool1}></img>
          <img src={tool2}></img>
          <img src={tool3}></img>

                </li>
        </CardProjects>
        )
    }
}

export default Cards