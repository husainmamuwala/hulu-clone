import React from 'react'

function Nav() {
  return (
    <div>
{Object.entries(requests).map(([key,{title,url}]) => 
    <h2>{title}</h2>
    )}

    </div>
  )
}

export default Nav