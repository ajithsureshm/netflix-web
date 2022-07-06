
import React from 'react'

import Row from '../Components/Row'
import requests from '../request'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'


function Horror() {
  return (
    <div>
       <Navbar/>

<Banner/>

    <Row
        title="NETFLIX HORROR"
        fetchURL={requests.fetchHorrorMovies}
        isLarge={true}
      />

    </div>
  )
}

export default Horror