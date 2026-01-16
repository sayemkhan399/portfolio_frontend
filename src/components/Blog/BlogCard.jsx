import { Calendar, Clock, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200/50 flex flex-col transition-all duration-300"
    >
      {/* Blog Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={blog.poster}
          alt={blog.title}
          className="w-full h-full object-cover object-center  p-2 rounded-2xl"
        />
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col ">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-gray-900 hover:text-green-600 transition-colors">
          <Link to={`/blog/${blog._id}`}>{blog.title}</Link>
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2 ">
          {blog.subtitle}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm text-gray-500 mt-auto pt-3 border-t border-gray-100">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(blog.createdAt)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
            </div>
          </div>
        </div>

        <Link
          to={`/blog/${blog.id}`}
          className="mt-4 inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-5 rounded-lg transition-colors text-sm text-center w-fit"
        >
          Read Full Article
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;
