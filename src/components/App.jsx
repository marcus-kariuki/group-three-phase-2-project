import "../stylesheet/App.css";
import Navbar from "./Navbar";
import Players from "./Players";
import Player from "./Player";
import { Routes, Route } from "react-router-dom";
import NewPlayer from "./NewPlayer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Players />} />
        <Route exact path="/players/:id" element={<Player />} />
        <Route exact path="/newplayer" element={<NewPlayer />} />
      </Routes>
    </>
  );
}

export default App;
