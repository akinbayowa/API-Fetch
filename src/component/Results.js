import React from 'react'

function Results({details, loading}) {
  if (loading){
    return(
      <h1>loading.......</h1>
    )
}  

  
    
  
  return (
    <div className='listRes'>
        <ul>
            <li>Name: {details.name}</li>
            <li>Language: {details.language}</li>
            <li>Stars: {details.stargazers_count}</li>
            <li>Description: {details.description}</li>
            <li>I.D: {details.id}</li>
            <li>Created: {details.created_at}</li>
        </ul>
    </div>
  )
}

export default Results