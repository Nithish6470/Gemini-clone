import React, { useContext, useState } from 'react'
import {assets} from '../../assets/assets'
import { context } from '../../context/context'

function Side() {

    const {onSet,recentprompt,setprevprompt,newchat} = useContext(context)

    const [menu,setmenu] = useState(false)
    function menubar (){
        if(menu){
            setmenu(false)
        }
        else{
            setmenu(true)
        }
    }
    function loadrecent(prompt){
        setprevprompt(prompt)
        onSet(prompt)
    }
  return (
    <div className={`bg-gray-200 hidden lg:block`}>
        <div className={`m-2 inline-flex flex-col justify-between  min-h-[100vh] ${menu?'w-40 ':""} py-4 `} >
          <div className='w-full'>
            <img className='w-8 cursor-pointer' src={assets.menu_icon} alt=""  onClick={menubar}/>
            <div className={` mt-4 flex bg-slate-300 ${menu?'':""}   rounded-3xl cursor-pointer`} onClick={()=>newchat()}>
                <img className='w-5 mx-2' src={assets.plus_icon} alt="" />
                {menu?<p>New chat</p>:null}
            </div>
            {menu?<div className='mt-4 animate-fadein'>
                <p className={`text-2xl  ${menu?" ":" "} duration-500`}>Recent</p>
                {
                    recentprompt.map((v,i)=>{
                        return(
                            <div key={i} onClick={()=>{loadrecent(v)}} className='flex items-center mt-2 bg-slate-200 hover:bg-slate-300 rounded-3xl cursor-pointer'>
                                <img className='w-8' src={assets.message_icon} alt="" />
                                <p>{v.slice(0,14)}...</p>
                            </div>
                        )
                    })
                }
                
            </div>:null}
          </div>
          <div className='w-full '>
            <div className=' my-2 flex items-center hover:bg-slate-300 rounded-3xl cursor-pointer '>
                <img className='w-8' src={assets.question_icon} alt="" />
                {menu?<p className='ml-2'>Help</p>:null}
            </div>
            <div className='my-2 flex items-center hover:bg-slate-300 rounded-3xl cursor-pointer'>
                <img className='w-8' src={assets.history_icon} alt="" />
                {menu?<p className='ml-2'>Activity</p>:null} 
            </div>
            <div className='my-2 flex items-center hover:bg-slate-300 rounded-3xl cursor-pointer'>
                <img className='w-8 ' src={assets.setting_icon} alt="" />
                {menu?<p className='ml-2'>Settings</p>:null}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Side
