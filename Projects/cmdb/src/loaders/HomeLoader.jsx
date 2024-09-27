import axios from "axios";
import { generateRandomIndex } from '../utils/helperFunctions';
import { getImageUrl, getPopularMoviesApi, getPopularTvShowApi, getTopRatedMovieApi, getTopRatedTVShowApi, getTrendingDayApi, getTrendingWeekApi, getUpcomingMoviesApi } from "../utils/constants";

const fetchHeroImg = async () => {
  const response = await axios.get(getUpcomingMoviesApi);
  const data = response.data.results;
  const heroImg = data[generateRandomIndex(0, data.length)];
  return getImageUrl + heroImg.backdrop_path;
}

const fetchTrendingDayShows = async () => {
  const response = await axios.get(getTrendingDayApi);
  return response.data.results;
}

const fetchTrendingWeekShows = async () => {
  const response = await axios.get(getTrendingWeekApi);
  return response.data.results;
}

const fetchPopularTvShows = async () => {
  const response = await axios.get(getPopularTvShowApi);
  return response.data.results;
}

const fetchPopularMovieShows = async () => {
  const response = await axios.get(getPopularMoviesApi);
  return response.data.results;
}

const fetchTopRatedTvShows = async () => {
  const response = await axios.get(getTopRatedTVShowApi);
  return response.data.results;
}

const fetchTopRatedMovieShows = async () => {
  const response = await axios.get(getTopRatedMovieApi);
  return response.data.results;
}

export const HomeLoader = async () => {
  const heroImg = await fetchHeroImg();
  const trendingDayShows = await fetchTrendingDayShows();
  const trendingWeekShows = await fetchTrendingWeekShows();
  const popularTvShows = await fetchPopularTvShows();
  const popularMovieShows = await fetchPopularMovieShows();
  const topRatedTvShows = await fetchTopRatedTvShows();
  const topRatedMovieShows = await fetchTopRatedMovieShows();
  return { heroImg, trendingDayShows, trendingWeekShows, popularTvShows, popularMovieShows, topRatedTvShows, topRatedMovieShows };
}