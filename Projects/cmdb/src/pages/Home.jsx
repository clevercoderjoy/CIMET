import HeroBanner from '../components/Hero';
import Carousal from '../components/Carousal';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const { heroImg, trendingShows } = useLoaderData();
  return (
    <>
      <HeroBanner heroImg={heroImg} />
      <Carousal trendingShows={trendingShows} buttonText={{ day: "Day", week: "week" }} />
    </>
  )
}

export default Home
