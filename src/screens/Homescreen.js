import React, { useState } from "react";
import "./Homescreen.css";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import requests from "../Requests";
import Row from "../components/Row";

function handleVideoInfo(video) {}

function Homescreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <div className="rows">
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Actions Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </div>
    </div>
  );
}

export default Homescreen;
