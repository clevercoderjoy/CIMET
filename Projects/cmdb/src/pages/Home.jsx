import HeroBanner from '../components/Hero';
import Carousal from '../components/Carousal';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

  const { heroImg, trendingDayShows, trendingWeekShows, popularTvShows, popularMovieShows, topRatedTvShows, topRatedMovieShows } = useLoaderData();

  return (
    <>
      <HeroBanner heroImg={heroImg} />
      <Carousal title={"Trending"} shows={[trendingDayShows, trendingWeekShows]} buttonText={{ first: "Day", second: "week" }} />
      <Carousal title={"What's Popular"} shows={[popularTvShows, popularMovieShows]} buttonText={{ first: "movies", second: "tv" }} />
      <Carousal title={"Top Rated"} shows={[topRatedTvShows, topRatedMovieShows]} buttonText={{ first: "movies", second: "tv" }} />
    </>
  )
}

export default Home
