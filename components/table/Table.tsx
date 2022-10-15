import React from 'react'
import Col from "./Col"
import Row from "./Row"
const Table = ({col,data}:any) => {

    console.log(col)
  return (
    
    <table className="w-full bg-gray-50 ">
        <thead className=" border-b-2 border-sky-900  ">
            <tr className='select-none w-full'>
                {col.map((col:any,index:number)=>(
                    <Col key={index} col={col}/>
                ))
                }
            </tr>
        </thead>
        <tbody className=''>
            {data && data.map((data:any)=>(
                <Row data={data}/>
            ))
            }
        </tbody>
    </table>
  )
}

export default Table