//import React from 'react'
import group from '../assets/Group7.png'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import border from '../assets/Border.png'
import Container from './Container'

const Main = () => {
  return (
    <>
   
    <Container>
      <div className=' flex justify-between place-items-center mt-15'> 
          <div><img className='w-169.5 h-169' src={group} alt="" /></div>
          <div className='w-180.25'>
            <h4 className='w-20 h-4.5'>About Us</h4>
            <h2 className='w-174 h-27.5 font-semibold pt-12 text-2xl'>Behind this event</h2>
            <p className='w-165 h-18 text-[#737681]'>Discover the vision that drives this event—a commitment to bringing together innovators, leaders, and changemakers to share knowledge, spark inspiration, and create meaningful connections.</p>

            <div className='flex justify-between w-180 h-19.75 bg-[#F6F6F7] items-center mt-5 mb-5'>
                <div className='w-53.5 h-15 mx-auto flex text-center place-items-center justify-center'>Our Mission</div>
                <div  className='w-53.5 h-15 mx-auto  bg-[#FFFFFF] flex text-center place-items-center justify-center rounded-lg'>Our Vision</div>
                <div className='w-53.5 h-15 mx-auto flex text-center place-items-center justify-center'> Our Goal</div>
            </div>
            <div className='flex justify-between'>
              <img src={img1} alt="" />
              <img src={img2} alt="" />
            </div>
            <div className='flex justify-between'>
                <img className='w-180.25 h-23.5' src={border} alt="" />
            </div>

          </div>
      </div>
    </Container> 
     
    </>

  )
}

export default Main