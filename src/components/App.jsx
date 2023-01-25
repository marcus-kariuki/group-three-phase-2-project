import "../stylesheet/App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Players from "./Players";
import Player from "./Player";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home />
      <Players /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/players" element={<Players />} />
        <Route exact path="/players/:id" element={<Player />} />
      </Routes>
    </>
  );
}

export default App;
