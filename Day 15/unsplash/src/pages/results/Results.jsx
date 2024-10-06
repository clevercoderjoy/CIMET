import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FcNext, FcPrevious } from "react-icons/fc";
import "./results.css";

const Results = () => {
  const location = useLocation();
  const { images } = location.state || { images: [] };
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const handlePrev = () => {
    setCurrentIndex(currentIndex => currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    resetInterval();
  }

  const handleNext = () => {
    setCurrentIndex(currentIndex => currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    resetInterval();
  }

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex(currentIndex => currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    }, 3000);
  }

  useEffect(() => {
    resetInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  if (images.length === 0) {
    return <div className="no-images-message">No Images Found!</div>;
  }

  return (
    <div className="carousel-container">
      <div className="carousel">
        <button className="carousel-button prev" onClick={handlePrev}>
          <FcPrevious size={100} />
        </button>
        <div className="images-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div className="image-wrapper" key={image.id}>
              <img
                src={image.urls.regular}
                alt={image.id}
                loading="lazy"
              />
              <div className="image-number">
                Image Number: {index + 1}
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-button next" onClick={handleNext}>
          <FcNext size={100} />
        </button>
      </div>
    </div>
  );
}

export default Results;