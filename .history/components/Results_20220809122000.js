import { Result } from 'postcss';
import React from 'react'
import Thumbnail from './Thumbnail';
import Nav from './Nav';


function Results({results}) {
  return (
    <div>
        {results.map(result =>(
        <Thumbnail key={result.id} result={result}/>
        ))}

        {results.map(result =>(
            <Nav key={result.id} result={result}/>
        ))}
    </div>
  )
}

export default Results;