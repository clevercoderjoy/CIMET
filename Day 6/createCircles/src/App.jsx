import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [mousePosition, setMousePosition] = useState({ mouseX: 0, mouseY: 0 });
  const [circleData, setCircleData] = useState({ circles: [], undo: [], redo: [] });


  const generateRandomColors = () => {
    return colors = Math.floor(Math.random() * (256 - 0) + 0);
  }
  const handleWindowClick = (e) => {
    setMousePosition({ mouseX: `${e.clientY - 23}px`, mouseY: `${e.clientX - 10}px` })
  }

  useEffect(() => {
    window.addEventListener("click", handleWindowClick);
    console.log(mousePosition)

    return () => {
      window.removeEventListener("click", handleWindowClick)
    }
  }, [mousePosition]);

  return (
    <>
      <div className="buttonContainer">
        <button className="btn">
          Undo
        </button>
        <button className="btn">
          Reset
        </button>
        <button className="btn">
          Redo
        </button>
      </div>
    </>
  )
}

export default App
