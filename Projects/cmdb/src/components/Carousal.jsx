import React from 'react';
import ShowCard from './ShowCard';

const Carousal = ({ title, buttonText }) => {
  return (
    <div className="max-w-screen-xl mx-auto p-4 m-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <div className="flex space-x-4">
          <button
            className="bg-gradient-to-r from-[#f89e00] to-[#da2f68] text-white py-2 px-4 rounded-lg"
            style={{ background: 'linear-gradient(98.37deg, #f89e00 .99%, #da2f68 100%)' }}
          >
            {buttonText.day}
          </button>
          <button
            className="bg-gradient-to-r from-[#f89e00] to-[#da2f68] text-white py-2 px-4 rounded-lg"
            style={{ background: 'linear-gradient(98.37deg, #f89e00 .99%, #da2f68 100%)' }}
          >
            {buttonText.week}
          </button>
        </div>
      </div>

      <div className="relative">
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white py-2 px-4 rounded-lg z-10" style={{ background: 'linear-gradient(98.37deg, #f89e00 .99%, #da2f68 100%)' }}>
          Prev
        </button>

        <div className="flex overflow-x-auto space-x-4 pb-4 mb-8">
          {[...Array(5)].map((_, index) => (
            <ShowCard key={index} />
          ))}
        </div>

        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white py-2 px-4 rounded-lg z-10" style={{ background: 'linear-gradient(98.37deg, #f89e00 .99%, #da2f68 100%)' }}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousal;
