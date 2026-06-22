
import sp4 from '../assets/sp4.png'

const SpeakerCard = ({sp,name,title}) => {
  return (
    <> 
        <div className="mt-15 mb-25 w-117.75 h-159 bg-[#f6f6f7] rounded-xl p-4">
                <div>
                    <img src={sp} alt="" />
                </div >
                <div className=" flex justify-between items-center p-10">
                        <div>
                            <h3 className="font-bold text-xl">{name}</h3>
                            <p className="text-[16px] text-[#737681]">{title}</p>
                        </div>
                        <div >
                            <img src={sp4} alt="" />
                        </div>
                </div>
        </div> 
    </>
  )
}

export default SpeakerCard