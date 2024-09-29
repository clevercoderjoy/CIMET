import axios from "axios";
import { getAllMovieApi, getAllTvShowsApi } from "../utils/constants";
import { Navigate, redirect } from "react-router-dom";

const fetchAllMovies = async () => {
  const response = await axios.get(getAllMovieApi);
  return response.data.results;
};

const fetchAllTvShows = async () => {
  const response = await axios.get(getAllTvShowsApi);
  return response.data.results;
};


export const ExploreLoader = async (e) => {
  let allShows = []
  const { mediaType } = e?.params;
  if (mediaType === "movies") {
    allShows = await fetchAllMovies();
  }
  else if (mediaType === "tvshows") {
    allShows = await fetchAllTvShows();
  }
  else {
    throw redirect('/error');
  }
  return { mediaType, allShows };
}