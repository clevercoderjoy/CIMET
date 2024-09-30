import Search from "./Search";

const HeroBanner = ({ heroImg }) => {

  // #05152e 
  return (
    <div className="w-full h-[450px] md:h-[700px] flex items-center relative" style={{ backgroundColor: '#1c4b91' }}>
      <div className="absolute top-0 left-0 w-full h-full opacity-50 overflow-hidden">
        <img loading="lazy" src={heroImg} alt="Background" className="w-full h-full object-cover" />
      </div>
      <div
        className="absolute bottom-0 left-0 w-full h-[250px]"
        style={{ background: 'linear-gradient(180deg, #04152d00, #04152d 79.17%)' }}
      ></div>
      <div className="flex flex-col items-center text-white text-center relative max-w-[800px] mx-auto z-10">
        <span className="text-[50px] font-bold mb-2 md:mb-0 md:text-[90px]">Welcome.</span>
        <span className="text-[18px] font-medium mb-10 md:text-[24px]">
          Millions of movies, TV shows and people to discover. Explore now.
        </span>
        <div className="w-full flex justify-center">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
