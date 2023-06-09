import React from 'react'
import { obj } from './Body'
import Image from 'next/image'
export const CardComponent = (props:obj) => {
  return (
    <div className=''>
       <div className='relative'>
          <img src={`${props.image}`}/>
          <div className='absolute bottom-2'>{props.title}</div> 
       </div>       
    </div>
  )
}
