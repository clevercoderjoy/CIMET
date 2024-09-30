import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowCard from '../components/ShowCard';

function SearchResults() {
  const searchShowsData = useLoaderData();
  const searchResults = [...searchShowsData[0], ...searchShowsData[1]];

  return (
    <>
      <div className="container pt-24 w-[85%] mx-auto">
        {searchResults.length === 0 ? (
          <div className="text-center text-lg font-semibold text-gray-400 mt-20">
            Oops!!! Nothing to see here...
          </div>
        ) : (
          <>
            <div className="exploreHeader flex items-center justify-between mb-8">
              <h2 className="exploreHeading text-lg">Search Results</h2>
              <div className="filterButtons flex items-center justify-between gap-5">
                <div>Select Genre</div>
                <div>Sort by</div>
              </div>
            </div>

            <div className="showsContainer flex flex-wrap items-center justify-evenly gap-3">
              {searchResults.map((show) => (
                <ShowCard key={show.id} show={show} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default SearchResults;
