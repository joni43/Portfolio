import React from 'react'
import styled from 'styled-components'

import './home.scss'

import Navbar from '../Navbar/Navbar'
export const HomeDiv = styled.div`
  background-color: lightcoral;
`

const Home = () => (
  <HomeDiv id='home'>
    <div class='container'>
      <div class='item left'>
        <p>TEST</p>
      </div>
      <div class='item middle'>
        <div class='logo'>
          Jonathan<span>Lahti</span>
        </div>
        <Navbar></Navbar>
      </div>
      <div class='item right'>
        <p>TEST</p>
      </div>
    </div>
  </HomeDiv>
)

export default Home
