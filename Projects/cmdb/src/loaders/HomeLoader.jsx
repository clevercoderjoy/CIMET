import axios from "axios";
import { getImageUrl, getTrendingApi, getUpcomingMoviesApi } from "../utils/constants";
import { generateRandomIndex } from '../utils/helperFunctions';

const fetchHeroImg = async () => {
  const response = await axios.get(getUpcomingMoviesApi);
  const data = response.data.results;
  const heroImg = data[generateRandomIndex(0, data.length)];
  return getImageUrl + heroImg.backdrop_path;
}

const fetchTrendingShows = async () => {
  const response = await axios.get(getTrendingApi);
  return response.data.results
}

export const HomeLoader = async () => {
  const heroImg = await fetchHeroImg();
  const trendingShows = await fetchTrendingShows();
  return { heroImg, trendingShows };
  // const popularShows = await fetchPopularShows();
  // const topRatedShows = await fetchTopRatedShows();
}