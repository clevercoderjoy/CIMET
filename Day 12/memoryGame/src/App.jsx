import React, { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [dimension, setDimension] = useState(0);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [gameReady, setGameReady] = useState(false);
  const [shuffledImages1, setShuffledImages1] = useState([]);
  const [shuffledImages2, setShuffledImages2] = useState([]);
  const [playerInfo, setPlayerInfo] = useState({ score: 0, clicks: 0 });
  const [flippedTiles, setFlippedTiles] = useState({ grid1: null, grid2: null });
  const [matchedPairs, setMatchedPairs] = useState([]);

  const handleInputChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 2 && value <= 9) {
      setDimension(value);
      setMsg("");
      setGameReady(false);
      setPlayerInfo({ score: 0, clicks: 0 });
      setMatchedPairs([]);
      setFlippedTiles({ grid1: null, grid2: null });
      document.documentElement.style.setProperty('--grid-dimension', value);
    } else {
      setDimension(0);
      setMsg("Dimensions should be between 2 and 9.");
      setGameReady(false);
      document.documentElement.style.removeProperty('--grid-dimension');
    }
  };

  const fetchPics = async (numImages) => {
    setLoading(true);
    setMsg("Loading Game... Please Wait...");
    const apiKey = 'live_xRvY0oHs4uWryi63RJxhlHK20mqhXn3dnxo2ecgbSpOCu4bCzMZJeRTRK7JgIJPU';
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${numImages}&api_key=${apiKey}`);
    const data = await response.json();
    return data.map((img) => img.url);
  }

  function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  useEffect(() => {
    if (dimension > 0) {
      setLoading(true);
      const numImages = dimension * dimension;
      fetchPics(numImages)
        .then(fetchedImgs => {
          setShuffledImages1(shuffleArray(fetchedImgs));
          setShuffledImages2(shuffleArray(fetchedImgs));
          setLoading(false);
          setGameReady(true);
          setMsg("");
        })
        .catch(() => {
          setMsg("Error loading images. Please try again.");
          setLoading(false);
        });
    }
  }, [dimension]);

  const handleTileClick = (index, grid) => {
    if (matchedPairs.some(pair => pair.includes(index))) return;
    if (flippedTiles[grid] === index) return;

    setFlippedTiles(prev => ({ ...prev, [grid]: index }));

    setPlayerInfo(prev => ({ ...prev, clicks: prev.clicks + 1 }));

    if (flippedTiles.grid1 !== null && grid === 'grid2' || flippedTiles.grid2 !== null && grid === 'grid1') {
      const otherGrid = grid === 'grid1' ? 'grid2' : 'grid1';
      const otherIndex = flippedTiles[otherGrid];

      if (shuffledImages1[index] === shuffledImages2[otherIndex]) {
        setPlayerInfo(prev => ({ ...prev, score: prev.score + 1 }));
        setMatchedPairs(prev => [...prev, [index, otherIndex]]);
        setMsg("You found a match!");
        setFlippedTiles({ grid1: null, grid2: null });
      } else {
        setMsg("No match, try again.");
        setTimeout(() => {
          setFlippedTiles({ grid1: null, grid2: null });
        }, 1000);
      }
    }
  };

  const tiles = gameReady ? Array.from({ length: dimension * dimension }, (_, i) => i) : [];
  const totalPairs = (dimension * dimension);
  const gameOver = matchedPairs.length === totalPairs;

  return (
    <div className="app">
      <div className="input-container">
        <input
          type="number"
          value={dimension || ""}
          onChange={handleInputChange}
          placeholder="Enter dimensions (2-9)"
          disabled={loading}
          autoFocus
          min="2"
          max="9"
        />
        <div className="playerInfo">
          <div className="clicks">
            <span>Clicks</span>
            <span>{playerInfo.clicks}</span>
          </div>
          <div className="scores">
            <span>Score</span>
            <span>{playerInfo.score}</span>
          </div>
        </div>
      </div>
      {msg && <p className="message">{msg}</p>}
      {gameOver && <p className="message">Game Over! You found all the matches!</p>}
      {gameReady && !gameOver && (
        <div className="puzzle-container">
          <div className="grid">
            {tiles.map((id) => (
              <div
                className={`puzzle-item ${matchedPairs.some(pair => pair[0] === id) ? "matched" : ""} ${flippedTiles.grid1 === id ? "flipped" : ""}`}
                key={id}
                onClick={() => handleTileClick(id, "grid1")}
              >
                {(matchedPairs.some(pair => pair[0] === id) || flippedTiles.grid1 === id) ? (
                  <img loading="lazy" src={shuffledImages1[id]} alt={`Tile ${id}`} />
                ) : (
                  <div className="placeholder"></div>
                )}
              </div>
            ))}
          </div>
          <div className="grid">
            {tiles.map((id) => (
              <div
                className={`puzzle-item ${matchedPairs.some(pair => pair[1] === id) ? "matched" : ""} ${flippedTiles.grid2 === id ? "flipped" : ""}`}
                key={id}
                onClick={() => handleTileClick(id, "grid2")}
              >
                {(matchedPairs.some(pair => pair[1] === id) || flippedTiles.grid2 === id) ? (
                  <img loading="lazy" src={shuffledImages2[id]} alt={`Tile ${id}`} />
                ) : (
                  <div className="placeholder"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;