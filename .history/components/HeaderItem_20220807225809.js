import React from 'react'

function HeaderItem({Icon,title}) {
  return (
    <div>
        <Icon className="h-2"/>
        <p>{title}</p>
    </div>
  )
}

export default HeaderItem