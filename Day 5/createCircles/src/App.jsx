import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [circles, setCircles] = useState([]);
  const [undo, setUndo] = useState([]);
  const [redo, setRedo] = useState([]);


  const generateRandomColors = () => {
    const colors = Math.floor(Math.random() * (256 - 0) + 0);
    return colors;
  }
  const handleWindowClick = (e) => {
    const newColor = `rgb(${generateRandomColors()} ${generateRandomColors()} ${generateRandomColors()})`;
    const newCircle = (<div className="circle" style={{ top: `${e.clientY - 100}px`, left: `${e.clientX - 15}px`, backgroundColor: newColor }} />)
    setCircles(prev => [...prev, newCircle])
  }
  const handleUndoClick = (e) => {
    e.stopPropagation();
    if (circles.length > 0) {
      const removedCircle = circles.pop();
      setUndo(prev => [...prev, removedCircle]);
    }
  };

  const handleResetClick = (e) => {
    e.stopPropagation();
    setCircles([]);
    setUndo([]);
    setRedo([]);
  }

  const handleRedoClick = (e) => {
    e.stopPropagation();
    const elementToRedo = undo.pop();
    setCircles(prev => [...prev, elementToRedo]);
  };

  console.log("circles", circles);
  console.log("undo", undo);
  console.log("redo", redo);


  useEffect(() => {
    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick)
    }
  }, []);

  return (
    <>
      <div className="buttonContainer">
        <button className="btn" disabled={circles.length === 0 ? true : false} onClick={handleUndoClick} style={{ cursor: (circles.length === 0) ? "not-allowed" : "pointer" }}>
          Undo
        </button>
        <button className="btn" disabled={circles.length === 0 ? true : false} onClick={handleResetClick} style={{ cursor: (circles.length === 0 ? "not-allowed" : "pointer") }}>
          Reset
        </button>
        <button className="btn" disabled={undo.length === 0 ? true : false} style={{ cursor: (undo.length === 0 ? "not-allowed" : "pointer") }} onClick={handleRedoClick}>
          Redo
        </button>
      </div>
      {
        circles?.map((circle, index) => <div key={index}>{circle}</div>)
      }
    </>
  )
}

export default App
