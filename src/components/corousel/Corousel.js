import React from 'react'
import './corousel.css'


function Corousel(props) {
  return (
    <div className='corousel'>
      <img src={props.src} />
      <div className='hangingDiv'>
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default Corousel
