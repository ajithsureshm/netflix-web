
import React from 'react'
import Row from '../Components/Row'
import requests from '../request'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'

function Trending() {
  return (
    <div>

      <Navbar/>

      <Banner/>


        <Row
        title="NETFLIX TRENDING"
        fetchURL={requests.fetchTrending}
        isLarge={true}
      />



    </div>
  )
}

export default Trending