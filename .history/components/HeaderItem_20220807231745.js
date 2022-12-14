import React from 'react'

function HeaderItem({Icon,title}) {
  return (
    <div className='flex flex-col group'>
        <Icon className="h-8 mb-1"/>
        <p className='opacity-50 group-hover:opacity-100 tracking-widest'>{title}</p>
    </div>
  )
}

export default HeaderItem