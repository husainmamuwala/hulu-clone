import {HomeIcon,CollectionIcon,LightningBoltIcon,
SearchIcon,UserIcon,BadgeCheckIcon} from "@heroicons/react/outline"
import Image from 'next/image'
import React from 'react'
import HeaderItem from './HeaderItem'

function Header() {
  return (
     <header className=''>
        <div className="flex flex-grow justify-evenly max-w- ">
            <HeaderItem title="HOME" Icon={HomeIcon}/>
            <HeaderItem title="TRENDING" Icon={CollectionIcon}/>
            <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon}/>
            <HeaderItem title="COLLECTIONS" Icon={LightningBoltIcon}/>
            <HeaderItem title="SEARCH" Icon={SearchIcon}/>
            <HeaderItem title="ACCOUNT" Icon={UserIcon}/>
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