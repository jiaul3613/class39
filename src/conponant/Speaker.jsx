//import React from 'react'
import Container from "./Container"
import SpeakerCard from "./SpeakerCard"
import sp1 from '../assets/sp1.png'
import sp2 from '../assets/sp2.png'
import sp3 from '../assets/sp3.png'


const Speaker = () => {
  return (
    <div className="mt-15">
        <Container>
            <h3 className="text-black text-center"> <span className="w-2 h-2 rounded-full bg-black inline-block align-middle mr-2"></span>Our Speakers</h3>
            <h2 className="text-black text-center  font-semibold text-[40px] pt-2 pb-2 leading-10 relative">Introducing the expert speakers</h2>

            <div className="flex gap-10">
                <SpeakerCard sp={sp1} name='Sophia Rodrigues' title='Global Marketing Director'/>
                <SpeakerCard sp={sp2} name='Sophia Rodrigues' title='Global Marketing Director'/>
                <SpeakerCard sp={sp3} name='Sophia Rodrigues' title='Global Marketing Director'/>
            </div>

        </Container>
    </div>
  )
}

export default Speaker