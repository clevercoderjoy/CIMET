import { useEffect, useMemo, useState } from "react";
import { getGenreApi } from "../utils/constants"
import axios from "axios";

function Genres({ genreIds }) {

  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    const fetchGenreData = async () => {
      try {
        const { data } = await axios.get(getGenreApi);
        setGenreList(data.genres);
      }
      catch (e) {
        console.log(e);
      }
    }
    fetchGenreData();
  }, []);

  const firstTwoGenres = useMemo(() => genreList.filter((genre) => genreIds.includes(genre.id)).slice(0, 2), [genreIds, genreList]);

  return (
    <>
      {
        firstTwoGenres?.map((genre) => <span key={genre.id} className="bg-[#da2f68] bg-opacity-50 rounded-full px-2 py-1 text-xs mr-1">
          {genre.name}
        </span>)
      }
    </>
  )
}

export default Genres
