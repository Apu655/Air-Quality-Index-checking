import React from 'react'
import { GlobeAsiaAustraliaIcon, InformationCircleIcon } from '@heroicons/react/24/solid' 

const rows = [
    {
        title:"Air Index Quality",
        Icon:<GlobeAsiaAustraliaIcon/>
    },
    {
        title:"AQI Basics",
        Icon:<InformationCircleIcon/>
    }
]


const SidebarRow = () => {
  return (
    <div className="flex flex-col space-y-4 whitespace-nowrap">{rows.map((row,index)=>
        (<div key={index} className='max-w-fit flex items-center font-bold shrink-0 hover:text-white cursor-pointer'> 
            <div className=' h-5 w-5 whitespace-nowrap'>{row.Icon}</div> 
            <div>{row.title}</div>
        </div>)
        )}</div>
  )
}

export default SidebarRow