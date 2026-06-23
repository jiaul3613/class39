import Container from "./Container"
import PriceCard from "./PriceCard"
import img1 from '../assets/p1.png'
import img2 from '../assets/p2.png'
import img3 from '../assets/p3.png'

const Pricing = () => {
  return (
    <div className="mt-15">
        <Container>
            <h3 className="text-black text-center"> 
            <span className="w-2 h-2 rounded-full bg-black inline-block align-middle mr-2"></span>
            Pricing Plan
            </h3>
            <h3 className='text-black w-187.5 h-28.75 mx-auto text-center font-semibold text-[48px] mb-15'>
            Discover our flexible pricing plans for attendees
            </h3>
            <div className="mt-15 mb-20 flex gap-5">
                <PriceCard img={img1} header='Basic Package' title='Perfect for first-time attend' price='$49' />
                <PriceCard img={img2} header='Standard Pass' title='Perfect for first-time attend' price='$59' />
                <PriceCard img={img3} header='Premium Pass' title='Perfect for first-time attend' price='$69' />
            </div>
        </Container>
    </div>
  )
}

export default Pricing