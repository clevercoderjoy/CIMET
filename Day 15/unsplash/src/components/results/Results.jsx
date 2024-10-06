import React from 'react'
import { useLocation } from 'react-router-dom'

const Results = () => {
  const location = useLocation();
  const { images } = location.state;
  console.log(images);
  return (
    <div>
      Results
    </div>
  )
}

export default Results
