import React, { useEffect, useState } from 'react'

const Row = ({data}:any) => {

    const measureIndex = (value:any)=>{
        if (0<=parseInt(value) && parseInt(value)<=50){
            setQuality((prev)=>{return {...prev,status:"Good"}})
        }
        else if (51<=parseInt(value) && parseInt(value)<=100)
        {
            setQuality((prev)=>{return {...prev,status:"Moderate"}})
        }
        else if (101<=parseInt(value) && parseInt(value)<=150)
        {
            setQuality((prev)=>{return {...prev,status:"Sensitive"}})
        }
        else if (151<=parseInt(value) && parseInt(value)<=200)
        {
            setQuality((prev)=>{return {...prev,status:"Unhealthy"}})
        }
        else if (201<=parseInt(value) && parseInt(value)<=300)
        {
            setQuality((prev)=>{return {...prev,status:"Very Unhealthy"}})
        }
        else if (301<=parseInt(value))
        {
            setQuality((prev)=>{return {...prev,status:"Hazardous"}})
        }
    }



    const [quality,setQuality] = useState({
        status:"",
        color:""
    })
    useEffect(()=>{
        
        measureIndex(data.airQuality)
        
    },[])
    
  return (
    <tr className={` text-sm hover:bg-sky-300  bg-white `}>
        <td className='p-3 '>{data.airQuality}</td>
        <td className='p-3 '>{quality.status}</td>

    </tr>
  )
}

export default Row