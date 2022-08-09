import {HomeIcon,CollectionIcon,LightningBoltIcon,
SearchIcon,UserIcon,BadgeCheckIcon} from "@heroicons/react/outline"
import Image from 'next/image'
import React from 'react'
import HeaderItem from './HeaderItem'

function Header() {
  return (
     <header className=''>
        <div>
            <HeaderItem title="HOME" Icon={HomeIcon}/>
            <HeaderItem title="TRENDING" Icon={CollectionIcon}/>
            <HeaderItem title="" Icon={BadgeCheckIcon}/>
            <HeaderItem title="HOME" Icon={LightningBoltIcon}/>
            <HeaderItem title="HOME" Icon={SearchIcon}/>
            <HeaderItem title="HOME" Icon={UserIcon}/>
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