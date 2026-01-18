import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch the JSON data
        const response = await fetch(`http://localhost:5001/blogs/${id}`); // Adjust path as needed
        if (!response.ok) throw new Error("Failed to fetch blog data");

        const blogsData = await response.json();
        const foundBlog = blogsData.find((b) => b.id === id);

        if (foundBlog) {
          setBlog(foundBlog);
        } else {
          setError("Blog not found");
        }
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-100">
        <div className="animate-spin h-12 w-12 border-4 border-green-500 border-t-transparent rounded-full"></div>
      </div>
    );

  if (error || !blog)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-linear-to-br from-gray-50 to-gray-100">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Oops! Something went wrong
        </h2>
        <p className="text-gray-600 mb-6 max-w-md">
          {error ||
            "The blog post you're looking for doesn't exist or couldn't be loaded."}
        </p>
        <button
          onClick={() => navigate(-1)}
          className="text-green-600 hover:text-green-700 hover:underline flex items-center gap-2 transition-colors font-medium"
        >
          <ArrowLeft size={18} /> Go Back
        </button>
      </div>
    );

  return (
    <div className="relative bg-linear-to-br from-gray-50 to-gray-100 text-gray-800 min-h-screen">
      {/* Subtle floating linear */}
      <div className="absolute inset-0 bg-[radial-linear(circle_at_top_left,rgba(16,185,129,0.1),transparent_60%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-linear(circle_at_bottom_right,rgba(99,102,241,0.08),transparent_60%)] pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto px-4 py-25">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 text-gray-600 hover:text-green-600 transition-all duration-300 hover:gap-3 group"
        >
          <ArrowLeft
            size={18}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          <span className="font-medium">Back to Articles</span>
        </motion.button>

        {/* Hero Image */}
        {blog.poster && (
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-200/50"
          >
            <img
              src={blog.poster}
              alt={blog.title}
              className="w-full h-72 md:h-96 object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        )}

        {/* Category Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center px-4 py-2 bg-linear-to-r from-green-500 to-emerald-600 text-white text-sm font-semibold rounded-full shadow-lg">
            {blog.related}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-gray-900 tracking-tight"
        >
          {blog.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 mb-8 font-light italic"
        >
          {blog.subtitle}
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-2xl md:text-3xl font-semibold mb-8 text-gray-800 border-l-4 border-green-500 pl-4"
        >
          {blog.heading}
        </motion.h2>

        {/* Short Description Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 mb-10 shadow-lg border border-gray-200/50"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            Key Insights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {Array.isArray(blog.short_description) &&
              blog.short_description.slice(0, 10).map((point, index) => (
                <p
                  key={index}
                  className="text-gray-700 text-sm flex items-start gap-2 leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                  {point}
                </p>
              ))}
          </div>
        </motion.section>

        {/* Main Content - Rendered as paragraphs */}
        <motion.article
          ref={contentRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="prose prose-lg max-w-none mb-12 prose-headings:text-gray-900 prose-headings:font-bold prose-headings:mt-10 prose-headings:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-ul:list-none prose-ul:pl-0 prose-li:mb-2 prose-li:before:content-['•'] prose-li:before:text-green-500 prose-li:before:mr-2 prose-blockquote:border-l-4 prose-blockquote:border-green-500 prose-blockquote:bg-green-50 prose-blockquote:rounded-r-lg prose-blockquote:pl-6 prose-blockquote:py-2 "
        >
          {Array.isArray(blog.full_content) ? (
            blog.full_content.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))
          ) : (
            <p className="text-gray-700 leading-relaxed">{blog.full_content}</p>
          )}
        </motion.article>

        {/* Conclusion Section */}
        {blog.conclusion && blog.conclusion.trim() !== "" && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 pt-10 pb-8 px-8 bg-linear-to-r from-green-500 to-emerald-50 rounded-3xl border border-green-200 shadow-xl"
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <span className="text-4xl">🎯</span>
              Final Thoughts
            </h3>
            <p className="text-lg leading-relaxed text-gray-800 font-medium">
              {blog.conclusion}
            </p>
          </motion.section>
        )}

        {/* Reading Progress Indicator */}
        <div className="fixed bottom-8 right-8 w-3 h-32 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full bg-linear-to-t from-green-500 to-emerald-600 rounded-full"
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
