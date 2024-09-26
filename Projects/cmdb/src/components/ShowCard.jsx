import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ShowCard = () => {
  const posterUrl = "";
  const rating = 10;

  return (
    <div className="w-[calc(50%-5px)] mb-6 cursor-pointer flex-shrink-0 md:w-[calc(25%-15px)] lg:w-[calc(20%-16px)] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl rounded-lg overflow-hidden">
      <div className="relative w-full aspect-[1/1.5] bg-cover bg-center mb-6 flex items-end justify-between p-2 transition-all duration-500 hover:opacity-80">
        <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden">
          <img
            src={posterUrl}
            alt="Show Poster"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="flex items-center justify-center relative top-7 w-10 h-10">
          <CircularProgressbar
            value={rating}
            maxValue={10}
            text={rating}
            styles={buildStyles({
              pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
              trailColor: "transparent",
              textColor: "black",
              textSize: "40px",
              textY: "55px",
            })}
          />
        </div>
        <div className="hidden text-white font-bold relative md:flex flex-wrap justify-end">
          <span className="bg-[#da2f68] bg-opacity-50 rounded-full px-2 py-1 text-xs mr-1">
            Action
          </span>
          <span className="bg-[#da2f68] bg-opacity-50 rounded-full px-2 py-1 text-xs">
            Drama
          </span>
        </div>
      </div>
      <div className="text-white flex flex-col">
        <span className="text-lg mb-2 line-clamp-1 font-semibold">Show Title</span>
        <span className="text-sm opacity-50">MMM D, YYYY</span>
      </div>
    </div>
  );
};

export default ShowCard;
