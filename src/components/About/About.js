import React, {Component} from 'react'
import PropTypes from 'prop-types';

import Typist from 'react-typist';
import Tween from 'rc-tween-one';

// import TweenOne from 'rc-tween-one';
import me from  '../../assets/me.png'
import './About.scss'
import Contact from '../Contact/Contact'
import PathPlugin from 'rc-tween-one/lib/plugin/PathPlugin';
// TweenOne.plugins.push(PathPlugin);

class About extends React.Component {
  state = {
    renderMsg: false,
  }

  onHeaderTyped = () => {
    this.setState({ renderMsg: true });
  }



  render() {
    return (

        <div className="About-me" id="page0">

            <div class="image-me">
            <Tween animation={{ blur: '1px', duration: 2000 }}
        style={{ filter: 'blur(50px)' }}
      >
            <img src={me}></img></Tween>
            </div>

            <div class="text-me">
                <h2>About Me</h2>

                <p>I am a student, and study to become a a Front End Developer. I always liked being in front of a computer screen, as much as a chef loves to be in a kitchen.
                I hope one day, to become a part of a an amazing team that create websites and applications.
                My skills are Javascript, HTML, CSS, NodeJS and React which is use the most when creating, but also got experience with VUE.
                </p>


                <div class="skills">

              <Typist
                cursor={{ hideWhenDone: true }}
                avgTypingDelay={200}
                startDelay={2000}
                onTypingDone={this.onHeaderTyped}
              >
                <i className="fab fa-html5"> HTML5 </i>{" "}
                <i className="fab fa-css3-alt"> CSS3</i>{" "}
                <i className="fab fa-react"> React.js</i>
                <i className="fab fa-node"> Node.js</i>
                <i className="fab fa-vuejs">Vue.js</i>

                <Typist/>
                </Typist>



            </div>
            <Contact></Contact>
            </div>
        </div>

    );
  }
}
About.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  paused: PropTypes.bool,
};

export default About