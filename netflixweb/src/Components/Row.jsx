
import React, {useEffect, useState} from 'react'
import instance from '../axios'
import './Row.css'

const base_url="https://image.tmdb.org/t/p/original/"  


const Row = ({title,fetchURL,isLarge}) => {
 
    const [movies, setMovies] = useState([])

    useEffect(() => {
     
        async function fetchData () {
            const request = await instance.get(fetchURL)

            setMovies(request.data.results)
        }

        fetchData()

    }, [])
    
    console.log("movies is ",movies);

  return (
    <div className='row'>

      <h2>{title}</h2>

        <div className="row_posters">

          {movies.map((movie) => (

            <img key={movie.id} 
            className={`row_poster ${isLarge && "row_posterLarge"}`}
            alt={movie.name} 
            src={`${base_url}${isLarge ? movie.poster_path : movie.backdrop_path}`} />
          ) )}
        </div>
    </div>
  )
}

export default Row
