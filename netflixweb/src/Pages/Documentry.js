import React from "react";
import Row from "../Components/Row";
import requests from "../request";
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'


function Documentry() {
  return (
    <div>

<Navbar/>

<Banner/>

      <Row
        title="NETFLIX DECUMENTRY"
        fetchURL={requests.fetchDocumentaries}
        isLarge={true}
      />
    </div>
  );
}

export default Documentry;
