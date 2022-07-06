
import React from 'react'

import Row from '../Components/Row'
import requests from '../request'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'


function Comedy() {
  return (
    <div>

<Navbar/>

<Banner/>

         <Row
        title="NETFLIX COMEDY"
        fetchURL={requests.fetchComedyMovies}
        isLarge={true}
      />
    </div>
  )
}

export default Comedy