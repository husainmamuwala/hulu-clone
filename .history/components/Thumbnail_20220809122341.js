import React from 'react'
import Image from "next/image"


function Thumbnail() {
  return (
    <div>
        Thumbnail
        <Image
        layout = 'responsive'
        height={1080}
        width={1928}
        />

    </div>
    
  )
}

export default Thumbnail