import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Search = () => {

  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchInput}`);
  }

  return (
    <>
      <form onSubmit={handleSearchSubmit} className="flex items-center m-auto w-full max-w-[800px]">
        <div className="flex w-full">
          <input
            onChange={handleSearchInputChange}
            type="text"
            placeholder="Search for a movie or TV show...."
            className="w-[calc(100%-100px)] h-[50px] bg-white outline-none border-0 rounded-l-[30px] px-4 text-black text-[14px] md:w-[calc(100%-150px)] md:h-[60px] md:text-[20px] md:px-8"
          />
          <button type="submit"
            className="w-[100px] h-[50px] bg-gradient-to-r from-[#f89e00] to-[#da2f68] text-white outline-none border-0 rounded-r-[30px] text-[16px] cursor-pointer md:w-[150px] md:h-[60px] md:text-[18px]"
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
};

export default Search;
