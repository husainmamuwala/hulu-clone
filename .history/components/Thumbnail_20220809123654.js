import React from 'react'
import Image from "next/image"
import Results from './Results';


function Thumbnail({result}) {
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div>
        
        <Image
        layout = 'responsive'
        src={
            `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
            `${BASE_URL}${result.poster_path}`
        }   
        height={1080}
        width={1928}
        
        />
        <div className='p-2'>
            <p className='truncate max-w-md'>{result.overview}</p>
            <h2>
                {result.title || result}
            </h2>
        </div>

    </div>
    
  )
}

export default Thumbnail