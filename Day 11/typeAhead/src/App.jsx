import { useState } from "react";

function App() {

  const suggestions = ["ybl", "oksbi", "okhdfc", "upi", "okaxis", "okicici", "paytm", "googlepay", "phonepe"];


  const [filteredSuggestions, setFilteredSuggestion] = useState(suggestions);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.length > 1) {
      setShowSuggestions(value.includes("@"));
    }
    handleSuggestions(value);
  }

  const handleSuggestions = (value) => {
    const [val, slug] = value.split("@");
    const filteredUpis = suggestions.filter((upi) => upi.includes(slug));
    setFilteredSuggestion(filteredUpis);
  }

  const handleSelectedSuggestion = (suggestion) => {
    const [beforeAt] = inputValue.split("@");
    setInputValue(beforeAt + "@" + suggestion);
    setShowSuggestions(false);
  }

  const handleKeyDown = (e) => {
    if (inputValue.includes("@")) {
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
            placeholder="Start typing..."
            autoFocus
            className="input-field"
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            value={inputValue}
          />
          {
            showSuggestions && (
              <div className={`suggestions-box`}>
                {
                  filteredSuggestions.map((suggestion, index) => <div className={`suggestion-item ${index === activeIndex ? "active" : ""}`} onClick={() => handleSelectedSuggestion(suggestion)} onMouseEnter={() => handleMouseEnter(index)} key={index}>{suggestion}</div>)
                }
              </div>
            )
          }
        </div>
      </div >
    </>
  )
}

export default App
