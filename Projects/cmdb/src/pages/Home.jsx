import HeroBanner from '../components/Hero';
import Carousal from '../components/Carousal';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <Carousal title={"Trending"} buttonText={{ day: "Day", week: "week" }} />
    </>
  )
}

export default Home
