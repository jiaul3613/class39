import { useState } from 'react';
import event from '../assets/event.jpg';
import Container from './Container';
import Event1 from './Event1';
import Event2 from './Event2';
import Event3 from './Event3'; 

const Event = () => {
  // 1. Corrected array destructuring
  const [show, setShow] = useState('day1');

  // 2. Corrected console.log placement
  console.log(show); 

  return (
    <div className='bg-cover w-full bg-no-repeat pt-10 pb-5' style={{ backgroundImage: `url(${event})` }}>
      <Container> 
        <h3 className="text-white text-center"> 
          <span className="w-2 h-2 rounded-full bg-white inline-block align-middle mr-2"></span>
          Our Event Schedule
        </h3>
        <h3 className='text-white w-187.5 h-28.75 mx-auto text-center font-semibold text-[48px] mb-15'>
          Explore the complete schedule for our event
        </h3>

        <div className='flex justify-between items-center w-125 h-20 bg-[#423C6B] mx-auto rounded-full cursor-pointer'>
          <div 
            onClick={() => setShow('day1')} 
            className={`w-35 h-15 mx-auto flex items-center justify-center hover:bg-white hover:text-black rounded-full text-[20px] ${show === 'day1' ? 'bg-white text-black' : ''}`}
          >
            Day 01
          </div>
          
          <div 
            onClick={() => setShow('day2')} 
            className={`w-35 h-15 mx-auto flex items-center justify-center hover:bg-white hover:text-black rounded-full text-[20px] ${show === 'day2' ? 'bg-white text-black' : ''}`}
          >
            Day 02
          </div>
          
          <div 
            onClick={() => setShow('day3')} 
            className={`w-35 h-15 mx-auto flex items-center justify-center hover:bg-white hover:text-black rounded-full text-[20px] ${show === 'day3' ? 'bg-white text-black' : ''}`}
          >
            Day 03
          </div>
        </div>
          {show === 'day1' && <Event1 />}
          {show === 'day2' && <Event2 />}
          {show === 'day3' && <Event3 />}
      </Container>
    </div>
  );
};

export default Event;