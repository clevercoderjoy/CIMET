import axios from "axios"
import { getSearchMovie, getSearchTvShow } from "../utils/constants"

const searchShows = async (query) => {
  const movieSearchResponse = await axios.get(`${getSearchMovie}&query=${query}`);
  const tvSearchResponse = await axios.get(`${getSearchTvShow}&query=${query}`);
  const searchResults = await Promise.all([movieSearchResponse.data.results, tvSearchResponse.data.results]);
  return searchResults;
}

export const SearchLoader = async ({ request }) => {
  const url = new URL(request.url);
  const query = url.searchParams.get('query');
  const searchShowsData = await searchShows(query);
  return searchShowsData;
}