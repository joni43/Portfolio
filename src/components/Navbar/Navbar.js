import React, {Component} from 'react'
import styled from 'styled-components'
import './NavBar.scss'
import { Drawer, Button } from 'antd';

const NavDrawer = styled(Drawer)`
@media (min-width: 767px) {
    display:none;
}
`
// const NavMenu = styled(Menu)`
//  flex-direction: row;
//     display: flex;
//     justify-content: flex-end;
//     list-style: none;
//     color: #fff;
//     margin: 1.6rem;
// `
const Nav = () => (

    <div className="nav-wrapper">

    <ul className="menu">

    <li><a href="#">About</a></li>
<li><a href="#">Portfolio</a></li>
<li><a href="#">Blog</a></li>
<li><a href="#">Contact</a></li>

    </ul>
</div>
)

class Navbar extends Component {
    state = {
      current: 'mail',
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
                <NavDrawer
                  title="Menu"
                  placement="right"
                  closable={false}
                  onClose={this.onClose}
                  visible={this.state.visible}
                >

                  <Nav />
                </NavDrawer>

            </nav>
        );
      }

}

export default Navbar