import { showElipses } from "../utils/showElipses";
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  const { title, body, id } = blog;

  return (
    <>
      <Link className="cursor-pointer" to={`/blogs/${id}`}>
        <div className="p-4 border-[2px] border-black h-[175px] my-4 bg-white shadow-md rounded-lg flex flex-col justify-between">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {title.split(" ").length > 4 ? showElipses(title, 3) + "..." : title}
          </h3>
          <p className="text-gray-600 text-sm flex-grow overflow-hidden line-clamp-3">{body.split(" ").length > 25 ? showElipses(body, 20) + "..." : body}</p>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
