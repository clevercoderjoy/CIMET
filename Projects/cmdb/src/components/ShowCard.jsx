import React from "react";
import { getImageUrl } from "../utils/constants";
import CircleRating from "./CircularRating";
import dayjs from '../../node_modules/dayjs/esm/index';
import Genres from "./Genres";

const ShowCard = ({ show }) => {

  const showTitle = show?.original_title || show?.original_name;

  return (
    <div className="w-[calc(50%-5px)] mb-6 cursor-pointer flex-shrink-0 md:w-[calc(25%-15px)] lg:w-[calc(20%-16px)] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl rounded-lg overflow-hidden">
      <div className="relative w-full aspect-[1/1.5] bg-cover bg-center mb-6 flex items-end justify-between p-2 transition-all duration-500 hover:opacity-80">
        <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden">
          <img
            loading="lazy"
            src={getImageUrl + (show?.backdrop_path)}
            alt={showTitle}
            className="w-full h-full object-cover object-center text-white"
          />
        </div>
        <div className="flex items-center justify-center relative top-7 w-10 h-10">
          <CircleRating rating={show?.vote_average} />
        </div>
        <div className="hidden text-white font-bold relative md:flex flex-wrap justify-end">
          <Genres genreIds={show.genre_ids} />
        </div>
      </div>
      <div className="text-white flex flex-col">
        <span className="text-lg mb-2 line-clamp-1 font-semibold">{show?.original_title ? show?.original_title : show?.original_name}</span>
        <span className="text-sm opacity-50">{dayjs(show.release_date).format("MMM D, YYYY")}</span>
      </div>
    </div>
  );
};

export default ShowCard;
