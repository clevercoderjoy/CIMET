const API_KEY = "fa89a24b6ec93d795380bdb4810bb735";

export const getImageUrl = "https://image.tmdb.org/t/p/original/"
// (to get images)

export const getTrendingDayApi = "https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=" + API_KEY

export const getTrendingWeekApi = "https://api.themoviedb.org/3/trending/all/week?language=en-US&api_key=" + API_KEY

export const getPopularMoviesApi = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=" + API_KEY
// (to get popular)

export const getPopularTvShowApi = "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1&api_key=" + API_KEY

export const getTopRatedMovieApi = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=" + API_KEY

export const getTopRatedTVShowApi = "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&api_key=" + API_KEY


export const getUpcomingMoviesApi = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=" + API_KEY
// (to get popular)

export const getGenreApi = "https://api.themoviedb.org/3/genre/movie/list?api_key=" + API_KEY
// (to get geners)


// demo usl :-https://movix-app-murex.vercel.app/

export const getAllTvShowsApi = "https://api.themoviedb.org/3/discover/tv?language=en-US&page=1&api_key=" + API_KEY

// with geners & sorting ()
export const getSortedTvShowsApi = "https://api.themoviedb.org/3/discover/tv?page=3&with_genres=16&sort_by=popularity.desc"

export const getAllMovieApi = "https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&api_key=" + API_KEY