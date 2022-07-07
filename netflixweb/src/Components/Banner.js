
import React,{useState, useEffect} from 'react'
import instance from '../axios'
import requests from '../request'
import './Banner.css'
import YouTube from 'react-youtube';



const API_KEY = "47de2b9e8b2462b53975d18185ac40bf";


const Banner = () => {

    const [movie, setMovie] = useState([])

    const [urlID, setUrlID] = useState('')

    const [discription, setDiscription] = useState(false)



    useEffect(() => {
      
        async function fetchData() {

            const request = await instance.get(requests.fetchNetflixOriginals)

            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length -1)
            ])
        }

        fetchData()

    }, [])

    console.log("random is",movie );

    const handleMovie = (id) => {
        instance.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {

            console.log(response.data.results);
          if (response.data.results.length!==0) {
            setUrlID(response.data.results[0])
          }else{
            console.log("Trailer not available");
          }
        })
      }

      const handleDiscription = () => {
        setDiscription(!discription)
      }

      const opts = {
        height: '100',
        width: '25%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        }}
    
    // function truncate(str,n) {
    //     return str?.length > n ? str.substr(0,n-1) + "....." : str;
    // }

  return (

    <header
         className='banner'
         style={{
             backgroundSize:"cover",
             backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
             backgroundPosition:"center center"
         }}
    >

        <div className="banner_contents">
            <h1 className="banner_title">
                {movie.title || movie.name || movie.original_name }
            </h1>
            <div className="banner_buttons">
                <button className="banner_button" onClick={()=> {handleMovie(movie.id)} } key={movie.id}  >play</button>
                <button className=" banner_button" onClick={()=> {handleDiscription(movie.overview)} } key={movie.overview} >Info</button>
            </div>

            { discription && <h1 className="banner_description">
                {movie.overview}
            </h1>
            }

            { urlID && <YouTube videoId={urlID.key} opts={opts} />}
        </div>

        <div className='banner_fadeBottom' />

        
    </header>
  )
}

export default Banner