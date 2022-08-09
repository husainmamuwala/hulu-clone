import Image from 'next/image'
import React from 'react'

function Header() {
  return (
     <header className=''>
        <div>
            
        </div>
        <Image
        className='object-contain'
        src = "https://links.papareact.com/ua6"
        width={200}
        height={100}
        />
        
     </header>
  )
}

export default Header