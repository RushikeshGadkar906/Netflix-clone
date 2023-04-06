import React from 'react'

export default function Card({img}) {
  return (
    <div className='card'>
        <img src={img} alt="card img"/>
    </div>
  )
}
