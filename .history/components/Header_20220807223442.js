import Image from 'next/image'
import React from 'react'

function Header() {
  return (
     <header className=''>
        <Image
        className='object'
        src = "https://links.papareact.com/ua6"
        width={200}
        height={100}
        />
        
     </header>
  )
}

export default Header