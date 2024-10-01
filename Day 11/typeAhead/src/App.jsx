import { useState } from "react";
import { UPI_HANDLES } from './UPI_HANDLES';

function App() {

  const suggestions = UPI_HANDLES;


  const [filteredSuggestions, setFilteredSuggestion] = useState(suggestions);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value.split("@")[0].length > 0) {
      setShowSuggestions(value.includes("@"));
    }
    setInputValue(value);
    handleSuggestions(value);
  }

  const handleSuggestions = (value) => {
    const [val, slug] = value.split("@");
    const filteredUpis = suggestions.filter((upi) => upi.includes(slug));
    setFilteredSuggestion(filteredUpis);
    setActiveIndex(0);
  }

  const handleSelectedSuggestion = (suggestion) => {
    const [beforeAt] = inputValue.split("@");
    setInputValue(beforeAt + "@" + suggestion);
    setShowSuggestions(false);
  }

  const handleKeyDown = (e) => {
    if (inputValue.includes("@")) {
      const [beforeAt] = inputValue.split("@");
      if (e.key === "ArrowDown") {
        setActiveIndex((prevIndex) => (prevIndex + 1) % filteredSuggestions.length);
      }
      if (e.key === "ArrowUp") {
        setActiveIndex((prevIndex) => (prevIndex - 1 + filteredSuggestions.length) % filteredSuggestions.length);
      }
      if (e.key === "Enter") {
        const selectedSuggestion = filteredSuggestions[activeIndex];
        if (selectedSuggestion) {
          handleSelectedSuggestion(selectedSuggestion);
        }
      }
    }
  };

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  }

  return (
    <>
      <div className="app-container">
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter your UPI id..."
            autoFocus
            className="input-field"
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            value={inputValue}
          />
          <input
            type="text"
            disabled
            className="input-field"
          // value={inputValue}
          />
          {
            showSuggestions && (
              <ul className={`suggestions-box`}>
                {
                  filteredSuggestions.map((suggestion, index) => <li className={`suggestion-item ${index === activeIndex ? "active" : ""}`} onClick={() => handleSelectedSuggestion(suggestion)} onMouseEnter={() => handleMouseEnter(index)} key={index}>{suggestion}</li>)
                }
              </ul>
            )
          }
        </div>
      </div >
    </>
  )
}

export default App
