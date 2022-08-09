import React from 'react'
import Image from "next/image"


function Thumbnail({}) {
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div>
        Thumbnail
        <Image
        layout = 'responsive'
        src={
            `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
            `${BASE_URL}${result.poster_path}`
        }   
        height={1080}
        width={1928}
        
        />

    </div>
    
  )
}

export default Thumbnail