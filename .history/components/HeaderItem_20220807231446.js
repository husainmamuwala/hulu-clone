import React from 'react'

function HeaderItem({Icon,title}) {
  return (
    <div>
        <Icon className="h-8 mb-1"/>
        <p className='opacittracking-widest'>{title}</p>
    </div>
  )
}

export default HeaderItem