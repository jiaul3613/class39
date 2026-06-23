import footer from '../assets/Footer.png'
import bell from '../assets/bell.png'
import fevenza from '../assets/fevenza.png'
import Container from './Container';

const Footer = () => {
  return (
    <div className='bg-cover w-full bg-no-repeat pt-15 border-b border-gray-200 ' style={{ backgroundImage: `url(${footer})`}}>
        <Container>
        <div className='flex justify-between items-center text-white border-b border-gray-200 pb-15 '>
            <div className='w-170 h-28.5 '>
                <p className='font-semibold text-[48px]'>Join our newsletter for event important announcement</p>
            </div>
           
            <div className='w-120 h-33'> 
                <div className='flex items-center gap-10'>
                    <img src={bell} alt="" />
                    <p>Stay informed with instant updates delivered straight to your inbox.</p>
                </div>
                
                {/* Fixed wrapper layout for input and button */}
                <div className='relative mt-5 w-120 h-20 flex items-center'>
                    <input 
                        className='w-full h-full rounded-2xl bg-[#3B385D] backdrop-blur-md pl-5 pr-18 border-0' 
                        type="text" 
                        // placeholder="Your email address..."
                    />
                    <button className='absolute right-2.5 h-15 w-15 bg-primary rounded-2xl flex items-center justify-center text-white'>
                        ??
                    </button>
                </div>
            </div>
        </div>
        <div>
            <img className='mt-15 mb-15' src={fevenza} alt="" />
        </div>

        </Container>
        <div className=' pt-6 pb-6  text-white  border-t border-gray-200'>
             <p className='text-center'>&copy; 2026 Evenza. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer;