import React, { useEffect, useState } from 'react';
import ShowCard from './ShowCard';

const Carousal = ({ trendingShows, buttonText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const showsToShow = 5;
  console.log(trendingShows)

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(trendingShows.length / showsToShow));
    }, 2500);

    return () => {
      clearInterval(autoplayInterval);
    };
  }, [trendingShows.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Math.ceil(trendingShows.length / showsToShow) - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(trendingShows.length / showsToShow));
  };

  const startIndex = currentIndex * showsToShow;
  const endIndex = Math.min(startIndex + showsToShow, trendingShows.length);
  const showsToDisplay = trendingShows.slice(startIndex, endIndex);

  return (
    <div className="max-w-screen-xl mx-auto p-4 m-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-white">{"Trending"}</h2>
        <div className="flex space-x-4">
          <button
            className="bg-gradient-to-r from-[#f89e00] to-[#da2f68] text-white py-2 px-4 rounded-lg"
            style={{ background: 'linear-gradient(98.37deg, #f89e00 .99%, #da2f68 100%)' }}
          >
            {buttonText.day}
          </button>
          <button
            className="bg-gradient-to-r from-[#f89e00] to-[#da2f68] text-white py-2 px-4 rounded-lg"
            style={{ background: 'linear-gradient(98.37deg, #f89e00 .99%, #da2f68 100%)' }}
          >
            {buttonText.week}
          </button>
        </div>
      </div>

      <div className="relative">
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white py-2 px-4 rounded-lg z-10"
          style={{ background: 'linear-gradient(98.37deg, #f89e00 .99%, #da2f68 100%)' }}
        >
          Prev
        </button>

        <div className="flex overflow-x-auto space-x-4 pb-4 mb-8">
          {showsToDisplay.map((image) => (
            <ShowCard key={image.id} image={image.image} />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white py-2 px-4 rounded-lg z-10"
          style={{ background: 'linear-gradient(98.37deg, #f89e00 .99%, #da2f68 100%)' }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousal;
