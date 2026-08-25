import React, { useState, useEffect } from 'react';
import { Trash2, Edit, Plus, X } from 'lucide-react';
import api from '../utils/api';

const BlogManager = () => {
  const [blogs, setBlogs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    tags: '',
    isPublished: true
  });
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await api.get('/api/blogs');
      setBlogs(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const generateSlug = (title) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  };

  const handleTitleChange = (e) => {
    const title = e.target.value;
    setFormData({
      ...formData,
      title,
      slug: generateSlug(title)
    });
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = new FormData();
      data.append('title', formData.title);
      data.append('slug', formData.slug);
      data.append('content', formData.content);
      data.append('tags', formData.tags);
      data.append('isPublished', formData.isPublished);
      if (imageFile) {
        data.append('image', imageFile);
      }

      await api.post('/api/blogs', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      setIsModalOpen(false);
      setFormData({ title: '', slug: '', content: '', tags: '', isPublished: true });
      setImageFile(null);
      fetchBlogs();
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || 'Failed to create blog. Make sure Cloudinary keys are set in server/.env');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        await api.delete(`/api/blogs/${id}`);
        fetchBlogs();
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-slate-800">Manage Blogs</h2>
        <button 
          onClick={() => setIsModalOpen(true)} 
          className="btn-primary flex items-center py-2 px-4"
        >
          <Plus className="w-5 h-5 mr-1" /> New Post
        </button>
      </div>

      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-200 text-slate-700">
                <th className="p-4 font-semibold">Title</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold">Date</th>
                <th className="p-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.length === 0 ? (
                <tr>
                  <td colSpan="4" className="p-8 text-center text-slate-500">No blogs found. Start writing!</td>
                </tr>
              ) : (
                blogs.map(blog => (
                  <tr key={blog._id} className="border-b border-slate-100 hover:bg-slate-50 transition">
                    <td className="p-4">
                      <div className="font-semibold text-slate-900">{blog.title}</div>
                      <div className="text-sm text-slate-500">/{blog.slug}</div>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${blog.isPublished ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {blog.isPublished ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="p-4 text-slate-600 text-sm">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </td>
                    <td className="p-4">
                      <button onClick={() => handleDelete(blog._id)} className="text-red-500 hover:text-red-700 transition">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create Blog Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex justify-between items-center p-6 border-b border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900">Create New Blog Post</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Post Title *</label>
                <input required type="text" name="title" value={formData.title} onChange={handleTitleChange} className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2 text-slate-900 focus:outline-none focus:border-brandPrimary focus:ring-1 focus:ring-brandPrimary" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">URL Slug *</label>
                <input required type="text" name="slug" value={formData.slug} onChange={handleChange} className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2 text-slate-900 focus:outline-none focus:border-brandPrimary focus:ring-1 focus:ring-brandPrimary" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Content * (Supports Markdown/HTML formatting)</label>
                <textarea required name="content" value={formData.content} onChange={handleChange} rows="10" className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-brandPrimary focus:ring-1 focus:ring-brandPrimary font-mono text-sm"></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Tags (comma separated)</label>
                <input type="text" name="tags" value={formData.tags} onChange={handleChange} placeholder="e.g. SEO, Digital Marketing, Tips" className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2 text-slate-900 focus:outline-none focus:border-brandPrimary focus:ring-1 focus:ring-brandPrimary" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Featured Image</label>
                <input type="file" accept="image/*" onChange={handleFileChange} className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2 text-slate-900 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-brandPrimary file:text-white hover:file:bg-indigo-700" />
                <p className="text-xs text-slate-500 mt-1">Requires valid Cloudinary configuration in .env</p>
              </div>

              <div className="flex items-center space-x-2 pt-2">
                <input type="checkbox" id="isPublished" name="isPublished" checked={formData.isPublished} onChange={handleChange} className="w-4 h-4 text-brandPrimary border-slate-300 rounded focus:ring-brandPrimary" />
                <label htmlFor="isPublished" className="text-sm font-medium text-slate-700">Publish immediately</label>
              </div>

              <div className="flex justify-end pt-4 border-t border-slate-200 mt-6 space-x-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-6 py-2.5 rounded-md text-slate-700 font-medium hover:bg-slate-100 transition">Cancel</button>
                <button type="submit" disabled={loading} className="btn-primary">
                  {loading ? 'Saving...' : 'Save Post'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogManager;
