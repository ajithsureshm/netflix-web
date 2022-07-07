
import React, {useEffect, useState} from 'react'
import instance from '../axios'
import './Row.css'
import YouTube from 'react-youtube';
import axios from 'axios'

const API_KEY = "47de2b9e8b2462b53975d18185ac40bf";


const base_url="https://image.tmdb.org/t/p/original/"  


const Row = ({title,fetchURL,isLarge}) => {

  const [urlID, setUrlID] = useState('')
 
    const [movies, setMovies] = useState([])

    useEffect(() => {
     
        async function fetchData () {
            const request = await instance.get(fetchURL)

            setMovies(request.data.results)
        }

        fetchData()

    }, [])

    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }}

      const handleMovie = (id) => {
        instance.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {

          if (response.data.results.length!==0) {
            setUrlID(response.data.results[0])
          }else{
            console.log("Trailer not available");
          }
        })
      }
    
    console.log("movies is ",movies);

  return (
    <div className='row'>

      <h2>{title}</h2>

        <div className="row_posters">

          {movies.map((movie) => (

            <img onClick={()=> {handleMovie(movie.id)} } key={movie.id} 
            className={`row_poster ${isLarge && "row_posterLarge"}`}
            alt={movie.name} 
            src={`${base_url}${isLarge ? movie.poster_path : movie.backdrop_path}`} />
          ) )}
        </div>

       { urlID && <YouTube videoId={urlID.key} opts={opts} />}

    </div>
  )
}

export default Row
