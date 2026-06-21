//import React from 'react'

//import Container from './Container'
import ScrollVelocity from './ScrollVelocity';

const Slide = () => {
  return (
    <div className='bg-primary h-15 items-center p-5'>
    {/* <Container> */}
    <ScrollVelocity
      texts={['Latest Updates  *  New Announcements  *  Workshop Alerts  *  Live Notices  *  Event Countdown  *  Workshop Alerts  *']} 
      velocity={100}
      className="custom-scroll-text"
      numCopies={6}
      damping={50}
      stiffness={400}
    />
    {/* </Container> */}
    </div>
  )
}

export default Slide
