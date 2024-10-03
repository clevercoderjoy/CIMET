import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { BlogContext } from "../context/BlogContext";

const Blogs = () => {
  const data = useLoaderData();
  const { blogList, setBlogList } = useContext(BlogContext);
  useEffect(() => {
    setBlogList(data);
  }, [data])

  return (
    <div className="bg-gray-100 py-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Blogs</h1>
      <div className="container mx-auto px-4 flex flex-wrap justify-between">
        {
          blogList.map((blog) => (
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-2" key={blog.id}>
              <BlogCard blog={blog} />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Blogs;
