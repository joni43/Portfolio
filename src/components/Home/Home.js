import React from 'react'
import styled from 'styled-components'

import Tween from 'rc-tween-one';

import './home.scss'
import About from '../About/About'

import Navbar from '../Navbar/Navbar'
export const HomeDiv = styled.div`
  background-color: lightcoral;
`

const Home = () => (
  <HomeDiv id='home'>

    <div className='container'>

      <div class='item left'>
        <p>TEST</p>
      </div>

      <div class='item middle'>

          <Logo></Logo>

        <Navbar></Navbar>
    <About></About>

      </div>
      <div class='item right'>
        <p>TEST</p>
      </div>
    </div>
  </HomeDiv>
)



function Logo() {
  return (
    <div style={{  color:'red'}}>
      <Tween
        animation={[
          { x: 400, y: '+=1300', blur: '10px', type: 'from', duration: 500 },
          { x: 10, y: 0 },
        ]}
        style={{ opacity: 1, width: 100, transform: 'translateY(100px)' }}
      >
          <div class='logo'>
        Jonathan<span>Lahti</span>
        </div>
      </Tween></div>);
}

export default Home
