import "../stylesheet/App.css";
import Navbar from "./Navbar";
import Players from "./Players";
import Player from "./Player";
import { Routes, Route } from "react-router-dom";
import NewPlayer from "./NewPlayer";
import About from "./About";
import React, { useState } from 'react';

function App() {

  const [aboutData, setAboutData] = useState({});

  const handleAboutData = (data) => {
    setAboutData(data);
  }
  return (
    <>
      <Navbar onAboutData={handleAboutData} />
      <Routes>
        <Route exact path="/" element={<Players />} />
        <Route exact path="/players/:id" element={<Player />} />
        <Route exact path = "/newplayer" element= {<NewPlayer />} />
        <Route exact path = "/about" element = {<About aboutData={aboutData}/>}/>
       
      </Routes>
    </>
  );
}

export default App;
