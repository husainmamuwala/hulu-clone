import React from 'react'
import requests from '../utils/requests'

function Nav() {
  return (
    <div className=''>
    {Object.entries(requests).map(([key,{title,url}]) => 
    <h2 key={key}>{title}</h2>
    )}

    </div>
  )
}

export default Nav