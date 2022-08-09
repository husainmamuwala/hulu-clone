import React from 'react'

function HeaderItem({Icon,title}) {
  return (
    <div>
        <Icon className="h-8 mb"/>
        <p>{title}</p>
    </div>
  )
}

export default HeaderItem