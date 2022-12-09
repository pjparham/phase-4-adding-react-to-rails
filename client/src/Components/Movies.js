import React from 'react'
import Movie from './Movie'

export default function Movies({movies}) {
    let displayMovies = movies.map((movie) => {
        return <Movie movie={movie}/>
    })
  return (
    <div className="pages">
        <h1 >Movies</h1>
        <div>{displayMovies}</div>
    </div>
  )
}
