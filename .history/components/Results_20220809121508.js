import { Result } from 'postcss';
import React from 'react'


function Results({requests}) {
  return (
    <div>
        {requests.map(Result)
    </div>
  )
}

export default Results;