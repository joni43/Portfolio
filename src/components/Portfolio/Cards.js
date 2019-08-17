import React, {Component} from 'react'

import './Portfolio.scss'
import { Card, Icon, Avatar } from 'antd';
class Cards extends Component {


    render() {
        // Destructuring
        const { url, alt, head, text, button_url } = this.props;
        return (
            <Card
            style={{width:300}}
            cover={
                <img src={url} alt={alt} />
            }>

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
        </Card>
        )
    }
}

export default Cards