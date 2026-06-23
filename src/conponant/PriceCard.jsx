import list from '../assets/List.png'
const PriceCard = ({ img, header, title,price }) => {
    return (
      // Changed to flex-col and removed items-end
      <div className="w-117.75 h-168.75 bg-[#f6f6f7] rounded-xl flex flex-col justify-between p-3 ">
          
          {/* This block now stays perfectly at the top */}
          <div className="flex gap-4 items-center mt-5 ml-5 mb-0 pb-0">
              <img className="w-12.5 h-12.5 object-contain" src={img} alt="" />
              <div>
                  <p className="font-semibold text-gray-800 text-lg">{header}</p>
                  <p className="text-gray-500 text-sm">{title}</p>
              </div>
          </div>
          <p className="ml-5 pt-0"><span className="font-semibold text-[48px]">{price}</span> /one-time</p>
          <div className="w-md h-112.5 bg-[#ffffff] rounded-xl flex flex-col  "> 
            <h4 className="mt-8 ml-12 text-xl font-bold">What's Included :</h4>
            <p className="ml-12 text-[#737681]">It could relate to a subscription</p>
            <img className='ml-12 mt-15' src={list} alt="" />
              <button className="mt-auto h-12.5 w-86 bg-primary text-white rounded-full transition-all hover:opacity-90 mb-4 mx-auto">
                  Get Standard Pass
              </button>
          </div>
          
      </div>
    )
  }
  
  export default PriceCard;