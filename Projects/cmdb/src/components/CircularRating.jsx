import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircleRating = ({ rating }) => {
  const ratingValue = rating.toFixed(1);
  return (
    <div className="bg-black rounded-full p-1">
      <CircularProgressbar
        value={ratingValue}
        maxValue={10}
        text={ratingValue}
        styles={buildStyles({
          pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
          textSize: '34px',
          textColor: '#fff',
          fontWeight: 'bold',
          trailColor: 'transparent',
        })}
      />
    </div>
  );
};

export default CircleRating;
