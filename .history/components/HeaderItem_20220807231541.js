import React from 'react'

function HeaderItem({Icon,title}) {
  return (
    <div>
        <Icon className="h-8 mb-1"/>
        <p className='opacity-0  tracking-widest'>{title}</p>
    </div>
  )
}

export default HeaderItem