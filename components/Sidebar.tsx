import React, { useState } from 'react'
import SidebarRow from './SidebarRow'
import { Bars3Icon } from '@heroicons/react/24/solid'
const Sidebar = () => {
    const [showSidebar,setShowSidebar] = useState(false)

  return (
    <div className={`relative ${showSidebar?"w-full":"w-11"} select-none overflow-hidden min-h-screen bg-primary text-black font-light col-span-2 transition-all ease-out`}>
        <Bars3Icon onClick={()=>setShowSidebar(!showSidebar)} className='cursor-pointer h-10 w-10'/>
        <div className='ml-11 col-span-10'>
            
            <SidebarRow/>
        </div>
    </div>
  )
}

export default Sidebar