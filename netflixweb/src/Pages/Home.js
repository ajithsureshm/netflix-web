import React from "react";
import Row from "../Components/Row";
import requests from "../request";
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'

function Home() {
  return (
    <div>
      
      <Navbar/>

<Banner/>

      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLarge={true}
      />
      <Row title="TRENDING" fetchURL={requests.fetchTrending} />
      <Row title="TOPRATED" fetchURL={requests.fetchTopRated} />
      <Row title="ACTION" fetchURL={requests.fetchActionMovies} />
      <Row title="COMEDY" fetchURL={requests.fetchComedyMovies} />
      <Row title="HORROR" fetchURL={requests.fetchHorrorMovies} />
      <Row title="ROMANCE" fetchURL={requests.fetchRomanceMovies} />
      <Row title="DECUMENTRY" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default Home;
