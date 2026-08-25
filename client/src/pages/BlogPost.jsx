import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../utils/api';
import { ArrowLeft } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await api.get(`/api/blogs/${slug}`);
        setBlog(res.data);
      } catch (err) {
        setError('Blog post not found.');
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);

  if (loading) return <div className="min-h-screen pt-24 text-center text-slate-500">Loading article...</div>;
  if (error || !blog) return <div className="min-h-screen pt-24 text-center text-red-500">{error}</div>;

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-3xl">
        <Link to="/blog" className="inline-flex items-center text-slate-500 hover:text-primary-600 mb-8 transition font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
        </Link>
        
        <div className="mb-8">
          <div className="text-sm text-primary-600 font-semibold uppercase tracking-widest mb-4">
            {blog.tags?.join(', ') || 'Marketing'}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            {blog.title}
          </h1>
          <div className="flex items-center text-slate-500 text-sm">
            <span>By <span className="font-semibold">{blog.author?.name || 'DMDY Team'}</span></span>
            <span className="mx-2">•</span>
            <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
          </div>
        </div>

        {blog.image && (
          <img src={blog.image} alt={blog.title} className="w-full h-[400px] object-cover rounded-2xl mb-12 shadow-sm border border-slate-100" />
        )}

        <div className="prose prose-lg prose-slate max-w-none">
          {/* In a real app we'd use a markdown parser or DOMpurify, keeping it simple here */}
          <div dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, '<br />') }} />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
