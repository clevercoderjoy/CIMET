import { useRef, useState } from "react";
import { UPI_HANDLES } from './UPI_HANDLES';

function App() {

  const suggestions = UPI_HANDLES.map((upi) => upi.toLowerCase());
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState(suggestions);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionsRef = useRef(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    const [prefix, suffix] = value.split("@");
    setShowSuggestions(prefix.length > 0 && value.includes("@"));
    filteredSuggestionsList(suffix);
  }

  const filteredSuggestionsList = (suffix) => {
    setFilteredSuggestions(suggestions.filter((upi) => upi.startsWith(suffix)));
    setActiveIndex(0);
  }

  const handleSelectedSuggestion = (suggestion) => {
    const [prefix] = inputValue.split("@");
    setInputValue(prefix + "@" + suggestion);
    setShowSuggestions(false);
    setActiveIndex(0);
  }

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
    scrollToActive(index);
  }

  const scrollToActive = (index) => {
    const activeItem = suggestionsRef.current.children[index];
    if (activeItem) {
      activeItem.scrollIntoView({ block: "nearest", behavior: "smooth" })
    }
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 38) {
      e.preventDefault();
      setActiveIndex(prevIndex => {
        const newIndex = prevIndex === 0 ? filteredSuggestions.length - 1 : prevIndex - 1;
        scrollToActive(newIndex);
        return newIndex;
      });
    } else if (e.keyCode === 40) {
      e.preventDefault();
      setActiveIndex(prevIndex => {
        const newIndex = prevIndex === filteredSuggestions.length - 1 ? 0 : prevIndex + 1;
        scrollToActive(newIndex);
        return newIndex;
      });
    } else if (e.keyCode === 13) {
      if (filteredSuggestions[activeIndex]) {
        handleSelectedSuggestion(filteredSuggestions[activeIndex]);
      }
    }
  }


  return (
    <>
      <div className="inputContainer">
        <input type="text" onChange={handleInputChange} value={inputValue} autoFocus onKeyDown={(e) => handleKeyDown(e)} />
        <ul className="suggestionsContainer" style={{ display: showSuggestions ? "block" : "none" }} ref={suggestionsRef}>
          {
            filteredSuggestions.map((upi, index) => <li className={`upi ${index === activeIndex ? "active" : ""}`} key={index} onMouseEnter={() => handleMouseEnter(index)} onClick={() => handleSelectedSuggestion(upi)}>{upi}</li>)
          }
        </ul>
      </div>
    </>
  )
}

export default App;
