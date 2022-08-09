import { Result } from 'postcss';
import React from 'react'


function Results({resultas}) {
  return (
    <div>
        {requests.map(result =>(
        <Thumbnail key={result.id} result={result}/>
        ))}
    </div>
  )
}

export default Results;