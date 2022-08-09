import { Result } from 'postcss';
import React from 'react'


function Results({requests}) {
  return (
    <div>
        {requests.map(result =>(
        <Thumbnail key={results/>
        ))}
    </div>
  )
}

export default Results;