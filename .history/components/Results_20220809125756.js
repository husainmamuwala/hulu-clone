import { Result } from 'postcss';
import React from 'react'
import Thumbnail from './Thumbnail';



function Results({results}) {
  return (
    <div className='px-5 my-10 sm:grid md:grid-c'>
        {results.map(result =>(
        <Thumbnail key={result.id} result={result}/>
        ))}

    </div>
  )
}

export default Results;