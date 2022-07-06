import React from "react";

import Row from "../Components/Row";
import requests from "../request";
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'


function Romance() {
  return (
    <div>

<Navbar/>

<Banner/>

      <Row
        title="NETFLIX ROMANCE"
        fetchURL={requests.fetchRomanceMovies}
        isLarge={true}
      />
    </div>
  );
}

export default Romance;
