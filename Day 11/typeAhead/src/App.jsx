import { useState } from "react";

function App() {

  const suggestions = [
    { name: "ybl" },
    { name: "oksbi" },
    { name: "okhdfc" },
    { name: "upi" },
    { name: "okaxis" },
    { name: "okicici" },
    { name: "paytm" },
    { name: "googlepay" },
    { name: "phonepe" },
  ];

  const [filteredSuggestions, setFilteredSuggestion] = useState(suggestions);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setShowSuggestions(value.includes("@"));
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
            value={inputValue}
          />
          {
            showSuggestions && (
              <div className={`suggestions-box`}>
                {
                  filteredSuggestions.map((data, index) => <div className="suggestion-item" key={index}>{data.name}</div>)
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
