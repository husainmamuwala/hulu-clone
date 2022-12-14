import { Result } from 'postcss';
import React from 'react'


function Results({results}) {
  return (
    <div>
        {results.map(result =>(
        <Thumbnail key={result.id} result={result}/>
        ))}
    </div>
  )
}

export default Results;