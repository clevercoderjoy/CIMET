import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';

const Blog = () => {
  const { blogId } = useParams();
  const [currentBlog, setCurrentBlog] = useState();
  const { blogList } = useContext(BlogContext);

  const findCurrentBlog = () => {
    setCurrentBlog(
      blogList.find((blog) => blog.id === Number(blogId))
    );
  }

  useEffect(() => {
    findCurrentBlog();
  }, [blogId, blogList]);

  const { title, body } = currentBlog || { title: '', body: '' };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
          <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">{title}</h3>
          <p className="text-gray-600">{body}</p>
        </div>
      </div>
    </>
  );
}

export default Blog;
