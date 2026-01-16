// pages/BlogPage.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Calendar, User, BookOpen, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://portfolio-server-six-omega.vercel.app/blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blog data:", error));
  }, []);

  if (!blogs || blogs.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-gray-600">
        Loading...
      </div>
    );
  }

  // Filter blogs based on search term
  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (blog.short_description &&
        blog.short_description.some((desc) =>
          desc.toLowerCase().includes(searchTerm.toLowerCase())
        ))
  );

  const latestBlog = filteredBlogs[0];
  const otherBlogs = filteredBlogs.slice(1);

  return (
    <div className="min-h-screen bg-linear-to-b from-[#F8FAFC] to-[#F1F5F9] text-gray-900">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-green-600 to-emerald-600 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Tech Insights & Innovation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl opacity-90 max-w-2xl mx-auto"
          >
            Explore the latest trends in technology, from AI to quantum
            computing.
          </motion.p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-10">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-2 border border-gray-200/50 flex items-center">
          <Search className="ml-3 text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full bg-transparent px-3 py-3 outline-none text-gray-900 placeholder-gray-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Featured Blog — SAFE */}
        {latestBlog && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-16"
          >
            <div className="flex flex-col md:flex-row gap-8 bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200/60">
              <div className="md:w-1/2 md:h-78 ">
                <img
                  src={latestBlog.poster}
                  alt={latestBlog.title}
                  className="w-full h-full object-cover p-4 rounded-3xl"
                />
              </div>

              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 bg-green-100 text-yellow-600 rounded-full text-sm font-semibold">
                  <Flame className="w-4 h-4 text-yellow-600" />
                  Latest
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  {latestBlog.title}
                </h2>

                <p className="text-gray-600 mb-4">{latestBlog.subtitle}</p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>Tech Insights</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date().toLocaleDateString()}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                  </div>
                </div>

                <Link
                  to={`/blog/${latestBlog.id}`} // Using the id from your JSON
                  className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 px-6 rounded-lg transition-colors w-fit"
                >
                  Read Full Article
                </Link>
              </div>
            </div>
          </motion.section>
        )}

        {/* All Articles */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            All Articles
          </h2>

          <AnimatePresence>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} /> // Using the id from your JSON
              ))}
            </div>
          </AnimatePresence>
        </motion.section>
      </div>
    </div>
  );
};

export default BlogPage;
