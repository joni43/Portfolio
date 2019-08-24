import React, {Component} from 'react'
import './NavBar.scss'
import { Drawer, Button } from 'antd';
var ScrollAnim = require('rc-scroll-anim');
var Link = ScrollAnim.Link;



const Nav = () => (

    <div className="nav-wrapper">

    <ul className="menu">

    <li><Link className="nav-list" to="page0">About</Link></li>
    <li><Link className="nav-list" to="page1">Portfolio</Link></li>
    <li><Link className="nav-list" to="page2">Resume</Link></li>


    </ul>
</div>
)

class Navbar extends Component {
    state = {

      visible: false
    }
    showDrawer = () => {
      this.setState({
        visible: true,
      });
    };
  onClose = () => {
      this.setState({
        visible: false,
      });
    };

    render() {
        return (
            <nav className="menuBar">



                <div className="rightMenu">
                    <Nav />
                </div>
                <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
                  <span className="barsBtn"></span>
                </Button>
                <Drawer
                  title="Menu"
                  placement="right"
                  closable={false}
                  onClose={this.onClose}
                  visible={this.state.visible}
                >

                  <Nav />
                </Drawer>

            </nav>
        );
      }

}

export default Navbar