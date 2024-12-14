import React from 'react'
import loading from './loading.gif';

export default function Spinner() {
  return (
    <div>
        <img src={loading} width="300" loading='lazy'/>
        {/* <div className='spinner'></div> */}
    </div>
  )
}
