import React, { useEffect, useState } from 'react';
import ShowCard from './ShowCard';

const Carousal = ({ title, buttonText, showData = [
  {
    id: 1,
    title: 'Mountain View',
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG1vdW50YWluc3xlbnwwfHx8fDE2ODQ2Nzg3MTA&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 2,
    title: 'Beach Sunset',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJlYWNofGVufDB8fHx8MTY4NDY3ODcxMA&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 3,
    title: 'City Skyline',
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGNpdHl8ZW58MHx8fHwxNjg0Njc4NzEw&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 4,
    title: 'Desert Dunes',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDZ8fGRlc2VydHxlbnwwfHx8fDE2ODQ2Nzg3MTA&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 5,
    title: 'Forest Path',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fGZvcmVzdHxlbnwwfHx8fDE2ODQ2Nzg3MTA&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 6,
    title: 'Lake Reflection',
    image: 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGxha2V8ZW58MHx8fHwxNjg0Njc4NzEw&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 7,
    title: 'Tropical Island',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHRyb3BpY2FsfGVufDB8fHx8MTY4NDY3ODcxMA&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 8,
    title: 'Snowy Mountains',
    image: 'https://images.unsplash.com/photo-1516865839142-9ad94d5949cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHNuZ3x8ZW58MHx8fHwxNjg0Njc4NzEw&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 9,
    title: 'Rainforest Canopy',
    image: 'https://images.unsplash.com/photo-1523480717986-814d59e8be86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fHJhaW5mb3Jlc3R8ZW58MHx8fHwxNjg0Njc4NzEw&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 10,
    title: 'Misty Forest',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1pc3R8ZW58MHx8fHwxNjg0Njc4NzEw&ixlib=rb-1.2.1&q=80&w=1080',
  }
] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesToShow = 5; // Number of images to display

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(showData.length / imagesToShow));
    }, 2500);

    return () => {
      clearInterval(autoplayInterval);
    };
  }, [showData.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Math.ceil(showData.length / imagesToShow) - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(showData.length / imagesToShow));
  };

  // Calculate the indices of the images to show
  const startIndex = currentIndex * imagesToShow;
  const endIndex = Math.min(startIndex + imagesToShow, showData.length);
  const imagesToDisplay = showData.slice(startIndex, endIndex);

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
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white py-2 px-4 rounded-lg z-10"
          style={{ background: 'linear-gradient(98.37deg, #f89e00 .99%, #da2f68 100%)' }}
        >
          Prev
        </button>

        <div className="flex overflow-x-auto space-x-4 pb-4 mb-8">
          {imagesToDisplay.map((image) => (
            <ShowCard key={image.id} image={image.image} />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white py-2 px-4 rounded-lg z-10"
          style={{ background: 'linear-gradient(98.37deg, #f89e00 .99%, #da2f68 100%)' }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousal;
