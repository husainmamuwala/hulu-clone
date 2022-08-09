import Image from 'next/image'
import React from 'react'

function Header() {
  return (
     <header className=''>
        <Image
        className='object-contain'
        src = "https://https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
        width={200}
        height={100}
        />
        
     </header>
  )
}

export default Header