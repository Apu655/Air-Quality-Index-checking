import React, { useState } from 'react'
import Table from './table/Table'

const col = [
    {title:"Air Quality Index"},
    {title:"Quality"},
]

const data = [
    {
        airQuality:250,
        quality:"Poor"
    }
]

const Feed = () => {


    const [isSubmit, setIsSubmit] = useState(false)

    const [airQuality,setAirQuality] = useState({
        index:""
    })
    
    const [formData,setFormData] = useState(
        {
            country: "",
            city: "",
        }
        )


    const handleSubmit = (e:any)=>{
        e.preventDefault()
        setIsSubmit(true)
        setAirQuality({index:"200"})
    }
  return (
    <div className='m-5 col-span-10 flex flex-col items-center justify-center'>
        <form className='flex flex-col space-y-10 bg-primary rounded-sm bg-opacity-50 p-20'>
            <div className='text-lg font-bold'>Check Air Quality Index today and stay <span className='text-green-600 '>Healthy</span>!</div>
            <div className='flex justify-between space-x-2'>
                <label className='font-semibold'>Longitude:</label>
                <input className='border rounded border-primary' type="text"></input>
            </div>
            <div className='flex justify-between space-x-2'>
                <label className='font-semibold'>Latitude:</label>
                <input className='border rounded border-primary' type="text"></input>
            </div>
            <div className="flex justify-center font-bold">or </div>
            <hr className='h-2 w-full bg-slate-600 '/>

            <div className='flex justify-between'>
            <p className='font-semibold'>Enter a city:</p>
            <select defaultValue={'Default'} className='border rounded p-2' name="likelihood">
                <option value="Default"disabled>Select a city</option>
                <option value="London">London</option>
                <option value="Likely" >Likely</option>
                <option value="Moderately Likely">Moderately Likely</option>
                <option value="Unlikely">Unlikely</option>
                <option value="Very Unlikely">Very Unlikely</option>
            </select>
            </div>


            <div className='flex justify-end'>
            <button onClick={handleSubmit} className="relative block text-center cursor-pointer">
                <div className="absolute inset-x-0 bottom-1  bg-sky-700 border border-gray-500 rounded-lg" />
                <div className={`relative bottom-1 text-xl font-bold leading-none tracking-wider py-4 px-10 bg-sky-500 border border-gray-500 rounded-lg transform active:translate-y-1 transition duration-200 ease-in-out`}>
                    Submit
                </div>
            </button>
            </div>
            <div>
                <div>
            {airQuality.index?(<div className='flex justify-end font-bold h-20'>Air Quality Index : {data[0].airQuality}</div>):(<div></div>)
                // <div>
                //     Air quality Index is : {airquality}
                // </div>
            }
        </div>
        </div>
        </form>

        {isSubmit && 
        <div className='p-4 w-full'>
            <p className='py-2 font-bold'>Quality of the air Table view</p>
            <Table col={col} data={data}/>
        </div>
        }
        
    </div>
  )
}

export default Feed