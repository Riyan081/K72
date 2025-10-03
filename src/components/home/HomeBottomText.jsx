import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className="flex justify-center gap-5 font-[font2] ">
      <Link className="text-[7vw] hover:border-[#D3FD50] hover:text-[#D3FD50] uppercase border-amber-50 border-4 rounded-full px-9 leading-none flex items-center justify-center pt-2">Work</Link>
     <Link className="text-[7vw]  hover:border-[#D3FD50] hover:text-[#D3FD50] uppercase border-amber-50 border-5 rounded-full px-9 leading-none flex items-center justify-center pt-2">Agency</Link>
    </div>
  )
}

export default HomeBottomText