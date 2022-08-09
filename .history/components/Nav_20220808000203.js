import React from 'react'
import requests from '../utils/requests'

function Nav() {
  return (
    <div>
    {Object.entries(requests).map(([key,{title,url}]) => 
    <h2 key>{title}</h2>
    )}

    </div>
  )
}

export default Nav