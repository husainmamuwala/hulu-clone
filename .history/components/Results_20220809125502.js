import { Result } from 'postcss';
import React from 'react'
import Thumbnail from './Thumbnail';



function Results({results}) {
  return (
    <div className=''>
        {results.map(result =>(
        <Thumbnail key={result.id} result={result}/>
        ))}

    </div>
  )
}

export default Results;