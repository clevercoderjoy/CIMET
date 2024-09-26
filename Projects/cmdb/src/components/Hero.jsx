const HeroBanner = ({ heroImg }) => {

  // #05152e 
  return (
    <div className="w-full h-[450px] md:h-[700px] flex items-center relative" style={{ backgroundColor: '#1c4b91' }}>
      <div className="absolute top-0 left-0 w-full h-full opacity-50 overflow-hidden">
        <img src={heroImg} alt="Background" className="w-full h-full object-cover" />
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
        <div className="flex items-center w-full">
          <input
            type="text"
            placeholder="Search for a movie or TV show...."
            className="w-[calc(100%-100px)] h-[50px] bg-white outline-none border-0 rounded-[30px_0_0_30px] px-4 text-[14px] md:w-[calc(100%-150px)] md:h-[60px] md:text-[20px] md:px-8"
          />
          <button
            className="w-[100px] h-[50px] bg-gradient-to-r from-[#f89e00] to-[#da2f68] text-white outline-none border-0 rounded-[0_30px_30px_0] text-[16px] cursor-pointer md:w-[150px] md:h-[60px] md:text-[18px]"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
