//import React from 'react'
import Ast from '../assets/asterisk.png'
import Container from './Container'

const Slide = () => {
  return (
    <div className='bg-primary h-15 items-center p-5'>
    <Container>
    <div className='flex gap-5 text-white'>
      <h2>Workshop Alerts</h2>
      <img src={Ast} alt="" />
      <h2>Event Countdown</h2>

      
    </div>
    </Container>
    </div>
  )
}

export default Slide
