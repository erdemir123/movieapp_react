import React from 'react'
import { useLocation } from 'react-router-dom'
const MovieDetail = () => {
    const {state} = useLocation()
    console.log(state.id)
  return (
    
    <div>
        sadık
        
    </div>
  )
}

export default MovieDetail