import {HomeIcon,CollectionIcon,LightningBoltIcon,
} from "@heroicons/react/outline"
import Image from 'next/image'
import React from 'react'
import HeaderItem from './HeaderItem'

function Header() {
  return (
     <header className=''>
        <div>
            <HeaderItem title="HOME" Icon={HomeIcon}/>
            <HeaderItem title="HOME" Icon={CollectionIcon}/>
            <HeaderItem title="HOME" Icon={CollectionIcon}/>
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