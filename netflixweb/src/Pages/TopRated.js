
import React from 'react'

import Row from '../Components/Row'
import requests from '../request'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'


function TopRated() {
  return (
    <div> 
      
      <Navbar/>

    <Banner/>

         <Row
        title="NETFLIX TOPRATED"
        fetchURL={requests.fetchTopRated}
        isLarge={true}
      />

    </div>
  )
}

export default TopRated