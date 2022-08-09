import React from 'react'
import requests from '../utils/requests'

function Nav() {
  return (
    <div className='flex px-10 sm:px-20 text-2xl whitespace-nowrap
    spa'>
        {Object.entries(requests).map(([key,{title,url}]) => 
        <h2 key={key} className="cursor-pointer transition duration-100
        hover:scale-125 hover:text-white active:text-red-500">{title}</h2>
        )}

    </div>
  )
}

export default Nav