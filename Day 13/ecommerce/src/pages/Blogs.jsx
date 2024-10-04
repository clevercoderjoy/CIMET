import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { BlogContext } from "../context/BlogContext";
import Pagination from "../components/Pagination";

const Blogs = () => {
  const data = useLoaderData();
  const { blogList, setBlogList } = useContext(BlogContext);
  useEffect(() => {
    setBlogList(data);
  }, [data])

  return (
    <div className="bg-gray-100 py-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Blogs</h1>
      <Pagination data={blogList} />
    </div>
  );
};

export default Blogs;
