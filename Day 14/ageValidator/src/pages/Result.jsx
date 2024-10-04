import { Link, useLocation } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const age = location.state.finalAge;

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gray-100 py-4">
        <div className="result text-xl font-semibold text-gray-700 mb-4">
          Result
        </div>
        <p className="text-gray-500 mb-6">{age >= 18 ? "You are over 18, which means you are eligible." : "You are under 18, which means you are not eligible."}</p>
        <Link
          to="/"
          className="inline-block px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md"
        >
          Go Back
        </Link>
      </div>
    </>
  )
}

export default Result;
