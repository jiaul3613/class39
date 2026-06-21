import Container from "./Container"
import Card from './Card'
import ico1 from '../assets/card1.svg'
import ico2 from '../assets/card2.png'
import ico3 from '../assets/card3.png'
import ico4 from '../assets/card4.png'
import bgPng from '../assets/bg.png'
import cont from '../assets/cont.png'

const Core = () => {
  return (
    <>
      <div className="w-full bg-cover bg-no-repeat pt-10 pb-5" style={{ backgroundImage: `url(${bgPng})` }}>
        <Container> 
          <div className="w-160 h-35 mx-auto">
              <img className="w-50 h-8.75 block mx-auto object-contain absolute"  src={cont} alt="Core Feature Title"/>
              <h3 className="text-white text-center"> <span className="w-2 h-2 rounded-full bg-white inline-block align-middle mr-2"></span>Core Feature</h3>
              <h2 className="text-white text-center  font-semibold text-[40px] pt-2 pb-2 leading-10 relative">Core features that power our exceptional services</h2>
          </div>
          <div className="grid grid-cols-4 gap-20 text-white">
            <Card hed='Event Planning Manage' bod='Deliver seamless virtual experience with high-quality streaming and interactive tools.' ico={ico1} bgColor="bg-emerald-600"/>
            <Card hed='Conference Coordination' bod='Deliver seamless virtual experience with high-quality streaming and interactive tools.' ico={ico2} bgColor="bg-primary"/>
            <Card hed='Venue Booking & Setup' bod='Deliver seamless virtual experience with high-quality streaming and interactive tools.' ico={ico3} bgColor="bg-emerald-600"/> 
            <Card hed='Post-Event Analytics' bod='Deliver seamless virtual experience with high-quality streaming and interactive tools.' ico={ico4} bgColor="bg-emerald-600"/>
          </div>
          <p className="text-center mt-15 mb-10 text-white text-[16px]">Join our team and help weave innovation, quality, and success together worldwide.</p>
        </Container>
      </div>
    </>
  )
}

export default Core