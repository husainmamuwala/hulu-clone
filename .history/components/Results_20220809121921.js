import { Result } from 'postcss';
import React from 'react'
import Thumbnail from './Thumbnail';


function Results({results}) {
  return (
    <div>
        {results.map(result =>(
        <Thumbnail key={result.id} result={result}/>
        ))}

        {results.map(result =>)}
    </div>
  )
}

export default Results;