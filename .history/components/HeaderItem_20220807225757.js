import React from 'react'

function HeaderItem({Icon,title}) {
  return (
    <div>
        <Icon classname="h-2"/>
        <p>{title}</p>
    </div>
  )
}

export default HeaderItem