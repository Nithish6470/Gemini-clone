import React, { useContext, useRef, useState } from 'react'
import { assets } from '../../assets/assets'
import { context } from '../../context/context'

function Inputbox() {
  const {setinput,input,onSet} = useContext(context)


  return (
    <div className=' flex px-2 lg:px-5 ml-5 py-2 items-center rounded-3xl mr-10 bg-slate-100 mt-10 '>
        <input  onChange={(e)=>{setinput(e.target.value)}} value={input} className='border-none outline-none bg-transparent w-full' placeholder='Enter a promt here' type="text" />
        <img className='w-6 lg:mx-1' src={assets.gallery_icon} alt="" />
        <img className='w-6 lg:mx-1' src={assets.mic_icon} alt="" />
        {input?<img className='w-6 lg:mx-1' onClick={()=>onSet()} src={assets.send_icon} alt="" />:null}
    </div>
  )
}

export default Inputbox
