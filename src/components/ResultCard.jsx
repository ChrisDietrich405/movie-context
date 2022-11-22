import React from 'react'

const ResultCard = ({movie}) => {
    const { title, poster_path, release_date } = movie
  return (
    <div>
        <h1>{title}</h1>
        <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="" />
        <p>{release_date.substring(0,4)}</p>
    </div>
  )
}

export default ResultCard