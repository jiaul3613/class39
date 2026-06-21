//import React from 'react'

import { FaLongArrowAltRight } from "react-icons/fa";

const Card = (props) => {
    const {ico,hed,bod} =props
  return (
    <div >
        <div className={"w-85.5 h-105 rounded-lg p-5 bg-[#3A385D] hover:bg-primary backdrop-blur-sm"}>
        <img className="pb-15" src={ico} alt="" />
        <p className="text-[20px] mb-2">{hed}</p>
        <p>{bod}</p>
        <hr className="mt-25 mb-2" />
        <h2 className="flex gap-2 items-center">Read More <FaLongArrowAltRight /> </h2> 
        </div>
    </div>
  )
}

export default Card

