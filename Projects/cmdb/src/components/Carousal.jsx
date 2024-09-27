import React, { useEffect, useState } from 'react';
import ShowCard from './ShowCard';

const Carousal = ({ title, shows, buttonText }) => {
  const [currentShow, setCurrentShow] = useState(shows[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeButton, setActiveButton] = useState(buttonText.first);
  const showsToShow = 5;

  const handleFirstFilter = () => {
    setActiveButton(buttonText.first);
    setCurrentShow(shows[0]);
  };

  const handleSecondFilter = () => {
    setActiveButton(buttonText.second);
    setCurrentShow(shows[1]);
  };


  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Math.ceil(currentShow.length / showsToShow) - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(currentShow.length / showsToShow));
  };

  const startIndex = currentIndex * showsToShow;
  const endIndex = Math.min(startIndex + showsToShow, currentShow.length);
  const showsToDisplay = currentShow.slice(startIndex, endIndex);

  console.log(startIndex, endIndex);
  

  return (
    <div className="max-w-screen-xl mx-auto p-4 m-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <div className="flex space-x-4">
          <button
            onClick={handleFirstFilter}
            className="bg-gradient-to-r from-[#f89e00] to-[#da2f68] text-white py-2 px-4 rounded-lg"
            style={{ background: activeButton === buttonText.first ? 'linear-gradient(98.37deg, #f89e00 .99%, #da2f68 100%)' : 'transparent' }}
          >
            {buttonText.first}
          </button>
          <button
            onClick={handleSecondFilter}
            className="bg-gradient-to-r from-[#f89e00] to-[#da2f68] text-white py-2 px-4 rounded-lg"
            style={{ background: activeButton === buttonText.second ? 'linear-gradient(98.37deg, #f89e00 .99%, #da2f68 100%)' : 'transparent' }}
          >
            {buttonText.second}
          </button>
        </div>
      </div>

      <div className="relative">
        <button
          onClick={handlePrev}
          className="absolute left-[-52px] top-[175px] transform -translate-y-1/2 bg-gray-800 text-white text-4xl py-2 px-4 rounded-lg z-10"
          style={{ background: 'linear-gradient(98.37deg, #f89e00 .99%, #da2f68 100%)' }}
        >
          {"<"}
        </button>

        <div className="flex overflow-x-auto space-x-4 pb-4 mb-8">
          {showsToDisplay.map((show) => <ShowCard key={show.id} show={show} />)}
        </div>

        <button
          onClick={handleNext}
          className="absolute text-4xl right-[-36px] top-[175px] transform -translate-y-1/2 bg-gray-800 text-white py-2 px-4 rounded-lg z-10"
          style={{ background: 'linear-gradient(98.37deg, #f89e00 .99%, #da2f68 100%)' }}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Carousal;
