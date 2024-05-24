import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import Inputbox from './Inputbox'
import { context } from '../../context/context'

function Mainbar() {
    const {showresult,resultdata,loading,prevprompt} = useContext(context)
  return (
    <div className='w-full min-h-[100vh] relative'>
      <div className='flex justify-between p-5'>
        <h1 className='text-3xl'>Gemini</h1>
        <img className='w-12 h-12 rounded-full' src={assets.user_icon} alt="" />
      </div>
      <div className=' lg:w-[900px]  mx-auto'>
        {
            !showresult?
            <div>
                <div className='mt-14 ml-5'>
                    <h1 className=' text-6xl font-semibold bg-clip-text text-transparent mb-1 bg-gradient-to-r from-[#558df5] to-[#ea5b5b]'>Hello, Dev.</h1>
                    <h1 className=' text-5xl font-semibold text-neutral-400'>How can I help you today?</h1>
                </div>
        <div className='mt-8 hidden lg:flex'>
            <div className=' w-1/4 mr-5 pr-5 '>
                <div className='h-56 bg-slate-100 hover:bg-slate-200 p-5 rounded-2xl inline-flex flex-col justify-between cursor-pointer'>
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <div className='flex justify-end' >
                        <img className='rounded-full bg-white w-8' src={assets.compass_icon} alt="" />
                    </div>
                </div>
            </div>
            <div className=' w-1/4 mr-5 pr-5 '>
                <div className='h-56 bg-slate-100 hover:bg-slate-200 p-5 rounded-2xl inline-flex flex-col justify-between cursor-pointer'>
                    <p>Briefly summarize this concept: urban planning</p>
                    <div className='flex justify-end' >
                        <img className='rounded-full bg-white w-8' src={assets.bulb_icon} alt="" />
                    </div>
                </div>
            </div>
            <div className=' w-1/4 mr-5 pr-5 '>
                <div className='h-56 bg-slate-100 hover:bg-slate-200 p-5 rounded-2xl inline-flex flex-col justify-between cursor-pointer'>
                    <p>Brainstorm team bonding activities for our work retreat</p>
                    <div className='flex justify-end' >
                        <img className='rounded-full bg-white w-8' src={assets.message_icon} alt="" />
                    </div>
                </div>
            </div>
            <div className=' w-1/4 mr-5 pr-5 '>
                <div className='h-56 bg-slate-100 hover:bg-slate-200 p-5 rounded-2xl inline-flex flex-col justify-between cursor-pointer'>
                    <p>Tell me about React js and React native</p>
                    <div className='flex justify-end' >
                        <img className='rounded-full bg-white w-8' src={assets.code_icon} alt="" />
                    </div>
                </div>
            </div>
        </div>
            </div>
            :
            <div className='mt-10 overflow-y-scroll h-[65vh] [&::-webkit-scrollbar]:hidden'>
                <div className='flex  mb-10 px-5 '>
                    <img className='w-10 h-10 rounded-full lg:mr-10 mr-5 ' src={assets.user_icon} alt="" />
                    <p className='mt-1'>{prevprompt}</p>
                </div>
                    <div className='flex px-5'>
                        <img className=' bg-slate-300 w-10 h-10 rounded-full lg:mr-10 mr-5' src={assets.gemini_icon} alt="" />
                            {
                                loading?
                                <div className='w-full'>
                                    <div className=' bg-gradient-to-r from-cyan-500 via-violet-50 to-cyan-500 h-5 m-5 rounded-md animate-lines'></div>
                                    <div className=' bg-gradient-to-r from-cyan-500 via-violet-50 to-cyan-500 h-5 m-5 rounded-md animate-lines'></div>
                                    <div className=' bg-gradient-to-r from-cyan-500 via-violet-50 to-cyan-500 h-5 m-5 rounded-md animate-lines'></div>
                                </div>
                                :<p className='mt-2 mr-5 leading-loose' dangerouslySetInnerHTML={{__html:resultdata}}></p>
                            }
                </div>
            </div>
        }
        <div className='absolute w-full md:mt-4 lg:max-w-[900px] bottom-4 lg:bottom-1'>
        <Inputbox/>
        <p className='text-center text-xs flex justify-center mt-2'>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
        <p className='text-center text-xs flex justify-center mt-2'>This Gemini AI colne is created by Nithish Kumar</p>
        </div>
      </div>
    </div>
  )
}

export default Mainbar
