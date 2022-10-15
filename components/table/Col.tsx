import React from 'react'

const Col = ({col}:any) => {

    console.log("Col from col" ,col)
  return (
    <th className="w-36 hover:bg-gray-200 p-3 text-sm text-black font-semibold tracking-wide text-left">{col.title} </th>
  )
}

export default Col