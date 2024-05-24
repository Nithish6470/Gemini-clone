import { createContext, useState } from "react";
import run from "../config/Geminiapi";


export const context = createContext()

const ContextProvider = (props)=>{

    const [input,setinput] = useState("")
    const [prevprompt,setprevprompt] = useState("")
    const [recentprompt,setrecentprompt] = useState([])
    const [loading,setloading] = useState(false)
    const [showresult,setshowresult] = useState(false)
    const [resultdata,setresultdata] = useState("")

    function delaydat (i,data){
        setTimeout(() => {
            setresultdata((prev)=>prev + data)
        }, 75*i);
    }

    function newchat (){
        setloading(false)
        setshowresult(false)
    }
    
    const onSet = async(prompt)=>{

        setresultdata("")
        setloading(true)
        setshowresult(true)
        var responce ; 
        if(prompt!=undefined){
            responce = await run(prompt)
            setprevprompt(prompt)
        }
        else{
            setprevprompt(input)
            responce = await run(input)
            setrecentprompt(prev=>[...prev,input])
        }


        

        let newarray = responce.split("**")
        let newarray1 = ''; 
        for(let i=0;i<newarray.length;i++){
            if(i==0||i%2!=1){
                newarray1+=newarray[i]
            }
            else{
                newarray1+="<b>"+newarray[i]+"</b>"
            }
        }
        newarray1 = newarray1.split("*").join("<br/>")
        let newarray2 = newarray1.split(" ")
        for(let i=0;i<newarray2.length;i++){
            delaydat(i,newarray2[i]+" ")
        }
        setloading(false)
        setinput("")
    }
    
    const contextvalue = {
        input,
        setinput,
        prevprompt,
        setprevprompt,
        recentprompt,
        setrecentprompt,
        loading,
        resultdata,
        showresult,
        onSet,
        newchat
    }

    return(
        <context.Provider value={contextvalue}>
            {props.children}
        </context.Provider>
    )
}

export default ContextProvider