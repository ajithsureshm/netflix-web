import React from "react";

import Row from "../Components/Row";
import requests from "../request";
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'


function Action() {
  return (

    <div>

<Navbar/>

<Banner/>

      <Row
        title="NETFLIX ACTION"
        fetchURL={requests.fetchActionMovies}
        isLarge={true}
      />
    </div>
  );
}

export default Action;
