import React, { useState } from "react";
//Import Styles
import "./styles/app.scss";
//Import components
import Player from "./components/Player";
import Song from "./components/Song";
import Util from "./Util";

function App() {
  const [songs, setSongs] = useState(Util());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
}

export default App;
