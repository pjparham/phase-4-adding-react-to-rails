import React from 'react'

export default function Movie({movie}) {
  return (
    <div className="movie-card">
        <h1>{movie.title}</h1>
        <div className="image-container">
            <img className="movie-image" src={movie.poster_url} alt='Movie poster'/>
        </div>
        <p>{movie.descriptoin}</p>
        <br/>
        <p>{movie.director} | {movie.year} | {movie.length} minutes | {movie.category}</p>
    </div>
  )
}
