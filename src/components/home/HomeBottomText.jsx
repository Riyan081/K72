import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className="flex justify-center lg:gap-5 gap-2 font-[font2] ">
      <Link className="lg:text-[7vw] text-[8vw] hover:border-[#D3FD50] hover:text-[#D3FD50] uppercase border-amber-50 lg:border-4 border-2 rounded-full px-9 leading-none flex items-center justify-center pt-2">Work</Link>
     <Link className="lg:text-[7vw] text-[8vw] hover:border-[#D3FD50] hover:text-[#D3FD50] uppercase border-amber-50 lg:border-5 border-2 rounded-full px-9 leading-none flex items-center justify-center pt-2">Agency</Link>
    </div>
  )
}

export default HomeBottomText