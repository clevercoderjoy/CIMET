import { Outlet, useLoaderData } from "react-router-dom"
import ShowCard from "../components/ShowCard";

function Explore() {

  const { mediaType, allShows } = useLoaderData();
  const mediaTypeHeading = mediaType === "movies" ? "Movies" : "TV Shows";

  return (
    <>
      <div className="container pt-24 w-[85%] mx-auto">
        <div className="exploreHeader flex items-center justify-between mb-8">
          <h2 className="exploreHeading text-lg">Explore {mediaTypeHeading}</h2>
          <div className="filterButtons flex items-center justify-between gap-5">
            <div>Select Genre</div>
            <div>sort by</div>
          </div>
        </div>
        <div className="showsContainer flex flex-wrap items-center justify-evenly gap-3 ">
          {
            allShows?.map((show) => <ShowCard key={show.id} show={show} />)
          }
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Explore
