import React from 'react'
import { Link } from 'react-router-dom'

import { ImSearch } from 'react-icons/im';

export default function Header() {
  return (
    <div className='header'>
      <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="Web Logo" />
      <div>
        <Link to="/">TV Show </Link>
        <Link to="/movies">Movies </Link>
        <Link to="/tvshow">Recently Added </Link>
        <Link to="/tvshow">My List </Link>
      </div>
      <ImSearch /> 
    </div>
  )
}
