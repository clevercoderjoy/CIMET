import React, { useState } from "react";
import "./index.css";

function App() {
  const [dimension, setDimension] = useState(0);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 2 && value <= 9) {
      setDimension(value);
      setError("");
      document.documentElement.style.setProperty('--grid-dimension', value);
    } else {
      setDimension(0);
      setError("Dimensions should be between 2 and 9.");
      document.documentElement.style.removeProperty('--grid-dimension');
    }
  };

  const handleTileClick = (tileId) => {
    console.log(`Clicked tile ${tileId}`);
  };

  const tiles1 = dimension ? Array.from({ length: dimension * dimension }, (_, i) => i) : [];
  const tiles2 = dimension ? Array.from({ length: dimension * dimension }, (_, i) => i) : [];

  return (
    <div className="app">
      <div className="input-container">
        <input
          type="number"
          value={dimension || ""}
          onChange={handleInputChange}
          placeholder="Enter dimensions (2-9)"
          disabled={dimension > 1}
          autoFocus
          min="2"
          max="9"
        />
      </div>
      {error && <p className="error">{error}</p>}
      <div className="puzzle-container">
        <div className="grid">
          {tiles1.map(id => (
            <div className="puzzle-item" key={id} onClick={() => handleTileClick(id)}>
              <img src={`/api/placeholder/40/40`} alt={`Tile ${id}`} />
            </div>
          ))}
        </div>
        <div className="grid">
          {tiles2.map((id, index) => (
            <div className="puzzle-item" key={index} onClick={() => handleTileClick(index)}>
              <img src={`/api/placeholder/40/40`} alt={`Tile ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
