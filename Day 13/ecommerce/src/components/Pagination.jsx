import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { useSearchParams } from "react-router-dom";

const Pagination = ({ data }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = Number(searchParams.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(initialPage);
  const blogsPerPage = 20;
  const totalPages = Math.ceil(data.length / blogsPerPage);

  const blogsToDisplay = () => {
    const startIndex = (currentPage - 1) * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  useEffect(() => {
    setCurrentPage(initialPage);
  }, [initialPage]);

  useEffect(() => {
    setSearchParams({ page: currentPage });
  }, [currentPage, setSearchParams]);

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-between">
        {blogsToDisplay().map((blog) => (
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2" key={blog.id}>
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4 font-bold">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 mx-1 text-white bg-[#1f2937] rounded-lg ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 mx-1 rounded-lg ${currentPage === index + 1 ? "bg-[#1f2937] text-white" : "bg-gray-200 text-gray-800 hover:text-black"}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 mx-1 text-white bg-[#1f2937] rounded-lg ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
