import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../utils/api';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await api.get('/api/blogs');
        setBlogs(res.data);
      } catch (err) {
        console.error('Failed to fetch blogs', err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Our <span className="text-primary-600">Blog</span></h1>
          <p className="text-lg text-slate-600">Insights, strategies, and industry news from our marketing experts.</p>
        </div>

        {loading ? (
          <div className="text-center text-slate-500 py-12">Loading articles...</div>
        ) : blogs.length === 0 ? (
          <div className="text-center text-slate-500 py-12">No blog posts found. Check back later!</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div key={blog._id} className="glass rounded-2xl overflow-hidden border border-slate-200 flex flex-col transition hover:shadow-lg hover:-translate-y-1 bg-white">
                {blog.image ? (
                  <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                ) : (
                  <div className="w-full h-48 bg-slate-200 flex items-center justify-center text-slate-400">No Image</div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-xs text-primary-600 font-semibold uppercase tracking-wider mb-2">
                    {blog.tags && blog.tags[0] ? blog.tags[0] : 'Marketing'}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{blog.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 flex-grow">
                    {blog.metaDescription || blog.content.substring(0, 100) + '...'}
                  </p>
                  <Link to={`/blog/${blog.slug}`} className="text-primary-600 font-semibold hover:text-primary-700">
                    Read Article →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
