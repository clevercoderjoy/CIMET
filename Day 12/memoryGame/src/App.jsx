import React, { useState } from "react";
import "./index.css";

const Tile = ({ id, gridId, image, onClick }) => (
  <div className="puzzle-item" onClick={() => onClick(id, gridId)}>
    <img src={`/api/placeholder/${40}/${40}`} alt={`img-${id}`} />
  </div>
);

function App() {
  const [matrixDimension, setMatrixDimension] = useState("");
  const [showError, setShowError] = useState("");
  const [puzzleArr, setPuzzleArr] = useState({ arr1: [], arr2: [] });

  const handleInputChange = (e) => {
    const value = Number(e.target.value);

    if (value < 2) {
      setShowError("Dimensions should be between 2 and 9. Try Again!");
      setMatrixDimension("");
      setPuzzleArr({ arr1: [], arr2: [] });
      document.documentElement.style.removeProperty('--grid-dimension');
    } else {
      setMatrixDimension(value);
      setShowError("");
      const totalTiles = value * value;
      setPuzzleArr({
        arr1: Array.from({ length: totalTiles }, (_, i) => ({ id: i, image: `image-${i}` })),
        arr2: Array.from({ length: totalTiles }, (_, i) => ({ id: i + totalTiles, image: `image-${i + totalTiles}` })),
      });
      document.documentElement.style.setProperty('--grid-dimension', value);
    }
  };

  const handleTileClick = (tileId, gridId) => {
    console.log(`Clicked tile ${tileId} in grid ${gridId}`);
  };

  return (
    <>
      <div className="inputContainer">
        <input
          type="number"
          value={matrixDimension}
          onChange={handleInputChange}
          disabled={matrixDimension > 0}
          autoFocus
          placeholder="Enter dimensions (4-10)..."
        />
      </div>
      {showError && <p style={{ color: "red" }}>{showError}</p>}

      <div className="puzzleContainer">
        <div className="arr1">
          {puzzleArr.arr1.map((tile) => (
            <Tile
              key={tile.id}
              id={tile.id}
              gridId="arr1"
              image={tile.image}
              onClick={handleTileClick}
            />
          ))}
        </div>
        <div className="arr2">
          {puzzleArr.arr2.map((tile) => (
            <Tile
              key={tile.id}
              id={tile.id}
              gridId="arr2"
              image={tile.image}
              onClick={handleTileClick}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;