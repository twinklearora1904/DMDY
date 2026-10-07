import React, { useState, useEffect, useCallback } from 'react';
import { Trash2, Edit, Plus, X, Search, Eye, FileText, CheckCircle2 } from 'lucide-react';
import api from '../utils/api';
import RichBlogEditor from './RichBlogEditor';
import EmptyState from './EmptyState';
import TableSkeleton from './skeletons/TableSkeleton';
import { blogSchema } from '../utils/validation';

const initialFormData = {
  title: '',
  slug: '',
  metaDescription: '',
  content: '',
  tags: '',
  isPublished: true,
  imageUrl: '',
};

const BlogManager = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [imageMode, setImageMode] = useState('upload'); // 'upload' | 'url'
  const [removeCurrentImage, setRemoveCurrentImage] = useState(false);
  const [filePreview, setFilePreview] = useState('');
  const [loading, setLoading] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [feedback, setFeedback] = useState({ type: '', msg: '' });

  const fetchBlogs = useCallback(async () => {
    try {
      const res = await api.get('/api/blogs?all=true');
      setBlogs(res.data || []);
    } catch (err) {
      console.error('Failed to fetch blogs for admin:', err);
    }
  }, []);

  useEffect(() => {
    let isMounted = true;
    api.get('/api/blogs?all=true')
      .then((res) => {
        if (isMounted) setBlogs(res.data || []);
      })
      .catch((err) => console.error('Failed to fetch blogs for admin:', err))
      .finally(() => {
        if (isMounted) setIsInitialLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  };

  const handleOpenCreateModal = () => {
    setEditingBlog(null);
    setFormData(initialFormData);
    setImageFile(null);
    setImageMode('upload');
    setRemoveCurrentImage(false);
    setFilePreview('');
    setFeedback({ type: '', msg: '' });
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (blog) => {
    setEditingBlog(blog);
    const existingImageUrl = blog.image?.url || (typeof blog.image === 'string' ? blog.image : '');
    const isExternalUrl = existingImageUrl.startsWith('http') && !blog.image?.public_id;

    setFormData({
      title: blog.title || '',
      slug: blog.slug || '',
      metaDescription: blog.metaDescription || '',
      content: blog.content || '',
      tags: Array.isArray(blog.tags) ? blog.tags.join(', ') : (blog.tags || ''),
      isPublished: Boolean(blog.isPublished),
      imageUrl: isExternalUrl ? existingImageUrl : '',
    });
    setImageFile(null);
    setImageMode(isExternalUrl ? 'url' : 'upload');
    setRemoveCurrentImage(false);
    setFilePreview('');
    setFeedback({ type: '', msg: '' });
    setIsModalOpen(true);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleTitleChange = (e) => {
    const title = e.target.value;
    setFormData((prev) => {
      const isAutoSlug = !prev.slug || prev.slug === generateSlug(prev.title);
      return {
        ...prev,
        title,
        slug: editingBlog ? prev.slug : (isAutoSlug ? generateSlug(title) : prev.slug),
      };
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      setRemoveCurrentImage(false);
      setFilePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFeedback({ type: '', msg: '' });

    // Zod Validation
    const validationData = {
      ...formData,
      tags: formData.tags ? formData.tags.split(',').map(t => t.trim()).filter(Boolean) : [],
    };

    const result = blogSchema.safeParse(validationData);
    if (!result.success) {
      setFeedback({
        type: 'error',
        msg: result.error.issues[0].message,
      });
      return;
    }

    setLoading(true);
    try {
      const data = new FormData();
      data.append('title', formData.title);
      data.append('slug', formData.slug);
      data.append('metaDescription', formData.metaDescription);
      data.append('content', formData.content);
      data.append('tags', formData.tags);
      data.append('isPublished', String(formData.isPublished));

      if (removeCurrentImage) {
        data.append('removeImage', 'true');
      } else if (imageMode === 'url' && formData.imageUrl.trim()) {
        data.append('imageUrl', formData.imageUrl.trim());
      } else if (imageMode === 'upload' && imageFile) {
        data.append('image', imageFile);
      }

      if (editingBlog) {
        await api.put(`/api/blogs/${editingBlog._id}`, data, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      } else {
        await api.post('/api/blogs', data, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      }

      setIsModalOpen(false);
      setEditingBlog(null);
      setFormData(initialFormData);
      setImageFile(null);
      setFilePreview('');
      fetchBlogs();
    } catch (err) {
      console.error(err);
      setFeedback({
        type: 'error',
        msg: err.response?.data?.message || 'Operation failed. Please verify form fields.',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id, title) => {
    if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
      try {
        await api.delete(`/api/blogs/${id}`);
        fetchBlogs();
      } catch (err) {
        console.error('Failed to delete blog:', err);
        alert(err.response?.data?.message || 'Failed to delete blog.');
      }
    }
  };

  const filteredBlogs = blogs.filter((b) => {
    const query = searchQuery.toLowerCase();
    const titleMatch = b.title?.toLowerCase().includes(query);
    const tagMatch = Array.isArray(b.tags) && b.tags.some((t) => t.toLowerCase().includes(query));
    return titleMatch || tagMatch;
  });

  return (
    <div>
      {/* Top Header & Search Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search blogs by title or tag..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brandPrimary focus:ring-1 focus:ring-brandPrimary shadow-sm"
          />
        </div>

        <button
          onClick={handleOpenCreateModal}
          className="btn-primary w-full sm:w-auto flex items-center justify-center py-2.5 px-5 text-xs sm:text-sm font-bold shadow-md shadow-brandPrimary/20 hover:shadow-lg cursor-pointer"
        >
          <Plus className="w-4 h-4 mr-1.5" /> New Blog Post
        </button>
      </div>

      {/* Blogs Table Card */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 text-xs uppercase tracking-wider font-bold">
                <th className="p-4">Post Info</th>
                <th className="p-4">Tags</th>
                <th className="p-4">Status</th>
                <th className="p-4">Date</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {isInitialLoading ? (
                <tr>
                  <td colSpan="5" className="p-4">
                    <TableSkeleton rows={4} />
                  </td>
                </tr>
              ) : filteredBlogs.length === 0 ? (
                <tr>
                  <td colSpan="5" className="p-8">
                    <EmptyState
                      variant="minimal"
                      icon={FileText}
                      badge="Publication CMS"
                      title={searchQuery ? 'No Articles Matched Query' : 'No Blog Posts Published Yet'}
                      description={
                        searchQuery
                          ? 'No articles matched your search query. Try typing a different topic or tag.'
                          : 'Ready to share growth playbooks with your audience? Click "New Blog Post" to draft and publish your first article.'
                      }
                      actionText={searchQuery ? 'Clear Search' : 'Create First Article'}
                      onAction={searchQuery ? () => setSearchQuery('') : handleOpenCreateModal}
                    />
                  </td>
                </tr>
              ) : (
                filteredBlogs.map((blog) => (
                  <tr key={blog._id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 max-w-xs">
                      <div className="font-bold text-slate-900 line-clamp-1">{blog.title}</div>
                      <div className="text-xs text-slate-400 flex items-center gap-1 mt-0.5 font-mono">
                        /{blog.slug}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-wrap gap-1 max-w-[180px]">
                        {blog.tags && blog.tags.length > 0 ? (
                          blog.tags.slice(0, 2).map((t, i) => (
                            <span
                              key={i}
                              className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200"
                            >
                              {t}
                            </span>
                          ))
                        ) : (
                          <span className="text-xs text-slate-400">-</span>
                        )}
                        {blog.tags && blog.tags.length > 2 && (
                          <span className="text-[11px] font-semibold text-slate-400">+{blog.tags.length - 2}</span>
                        )}
                      </div>
                    </td>
                    <td className="p-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full ${
                          blog.isPublished
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-amber-50 text-amber-700 border border-amber-200'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            blog.isPublished ? 'bg-emerald-500' : 'bg-amber-500'
                          }`}
                        ></span>
                        {blog.isPublished ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="p-4 text-slate-500 text-xs whitespace-nowrap">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </td>
                    <td className="p-4 text-right whitespace-nowrap">
                      <div className="inline-flex items-center gap-1">
                        <a
                          href={`/blog/${blog.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Preview Post"
                          className="text-slate-500 hover:text-brandPrimary p-1.5 rounded-lg hover:bg-slate-100 transition"
                        >
                          <Eye className="w-4 h-4" />
                        </a>
                        <button
                          onClick={() => handleOpenEditModal(blog)}
                          title="Edit Post"
                          className="text-slate-600 hover:text-brandPrimary p-1.5 rounded-lg hover:bg-slate-100 transition"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(blog._id, blog.title)}
                          title="Delete Post"
                          className="text-slate-400 hover:text-red-600 p-1.5 rounded-lg hover:bg-red-50 transition"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create / Edit Blog Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-2 sm:p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl sm:rounded-3xl w-full max-w-5xl xl:max-w-6xl max-h-[94vh] overflow-y-auto shadow-2xl border border-slate-100">
            <div className="flex justify-between items-center p-4 sm:p-6 border-b border-slate-100 sticky top-0 bg-white/95 backdrop-blur-sm z-30">
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                  {editingBlog ? 'Edit Blog Post' : 'Create New Blog Post'}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {editingBlog ? 'Modify existing article details and publish status.' : 'Compose a high-ranking article with rich formatting, media, and SEO previews.'}
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-100 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {feedback.msg && (
              <div className="mx-4 sm:mx-6 mt-4 sm:mt-6 p-4 rounded-xl text-xs sm:text-sm font-medium bg-red-50 text-red-700 border border-red-200">
                {feedback.msg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">Article Title *</label>
                  <input
                    required
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleTitleChange}
                    placeholder="e.g. 10 Proven Strategies to Scale Organic Traffic in 2026"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-brandPrimary focus:ring-1 focus:ring-brandPrimary transition"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">URL Slug *</label>
                  <div className="flex items-center bg-slate-50 border border-slate-200 rounded-xl overflow-hidden focus-within:border-brandPrimary focus-within:ring-1 focus-within:ring-brandPrimary">
                    <span className="px-3.5 text-xs text-slate-400 font-mono select-none">/blog/</span>
                    <input
                      required
                      type="text"
                      name="slug"
                      value={formData.slug}
                      onChange={handleChange}
                      className="w-full bg-transparent py-2.5 pr-4 text-slate-900 text-xs sm:text-sm font-mono focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                  Meta Description / Excerpt (SEO Summary)
                </label>
                <textarea
                  name="metaDescription"
                  value={formData.metaDescription}
                  onChange={handleChange}
                  rows="2"
                  placeholder="Brief 1-2 sentence preview that appears in search engines and blog preview cards..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-brandPrimary focus:ring-1 focus:ring-brandPrimary transition"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5 flex items-center justify-between">
                  <span>Article Content *</span>
                  <span className="text-xs font-normal text-slate-500">Rich Formatting, Media & Live Preview</span>
                </label>
                <RichBlogEditor
                  value={formData.content}
                  onChange={(newContent) =>
                    setFormData((prev) => ({ ...prev, content: newContent }))
                  }
                  placeholder="Compose your article here. Use the toolbar for Headings, Bold, Lists, Tables, Callout Boxes, Images, Links, or pick a ready-made template above..."
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5">Tags (comma-separated)</label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  placeholder="e.g. SEO, Growth, Marketing, AI"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-900 text-sm focus:outline-none focus:border-brandPrimary focus:ring-1 focus:ring-brandPrimary transition"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs sm:text-sm font-bold text-slate-700">
                    Featured Header Image
                  </label>
                  <div className="inline-flex rounded-lg border border-slate-200 bg-slate-100 p-0.5 text-xs font-semibold">
                    <button
                      type="button"
                      onClick={() => setImageMode('upload')}
                      className={`px-3 py-1 rounded-md transition ${imageMode === 'upload' ? 'bg-white shadow-xs text-slate-900 font-bold' : 'text-slate-500 hover:text-slate-900'}`}
                    >
                      Upload File
                    </button>
                    <button
                      type="button"
                      onClick={() => setImageMode('url')}
                      className={`px-3 py-1 rounded-md transition ${imageMode === 'url' ? 'bg-white shadow-xs text-slate-900 font-bold' : 'text-slate-500 hover:text-slate-900'}`}
                    >
                      Image URL
                    </button>
                  </div>
                </div>

                {imageMode === 'upload' ? (
                  <div>
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      onChange={handleFileChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-slate-900 text-xs sm:text-sm file:mr-4 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:bg-slate-900 file:text-white file:font-semibold hover:file:opacity-90 cursor-pointer"
                    />
                    {filePreview && (
                      <div className="mt-2.5 flex items-center gap-3 p-2 bg-slate-50 rounded-xl border border-slate-200">
                        <img src={filePreview} alt="Upload preview" className="w-14 h-14 rounded-lg object-cover" />
                        <div className="flex-1 min-w-0">
                          <span className="text-xs font-semibold text-slate-700 block truncate">{imageFile?.name}</span>
                          <span className="text-[11px] text-emerald-600 font-medium">Ready to upload</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => { setImageFile(null); setFilePreview(''); }}
                          className="text-xs text-red-600 hover:underline px-2"
                        >
                          Clear
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div>
                    <input
                      type="url"
                      name="imageUrl"
                      value={formData.imageUrl}
                      onChange={handleChange}
                      placeholder="https://images.unsplash.com/... or direct image URL"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-brandPrimary focus:ring-1 focus:ring-brandPrimary transition"
                    />
                    {formData.imageUrl && (
                      <div className="mt-2.5 flex items-center gap-3 p-2 bg-slate-50 rounded-xl border border-slate-200">
                        <img
                          src={formData.imageUrl}
                          alt="URL preview"
                          onError={(e) => { e.currentTarget.style.display = 'none'; }}
                          className="w-14 h-14 rounded-lg object-cover"
                        />
                        <span className="text-xs text-slate-600 truncate flex-1">{formData.imageUrl}</span>
                      </div>
                    )}
                  </div>
                )}

                {editingBlog?.image?.url && !filePreview && !removeCurrentImage && (
                  <div className="mt-2.5 flex items-center justify-between p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-3">
                      <img
                        src={editingBlog.image.url}
                        alt="Current"
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <span className="text-xs font-bold text-slate-800 block">Existing Featured Image</span>
                        <span className="text-[11px] text-slate-500">Active on published post</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setRemoveCurrentImage(true)}
                      className="text-xs text-red-600 hover:text-red-700 font-semibold px-2 py-1 rounded hover:bg-red-50 transition"
                    >
                      Remove Image
                    </button>
                  </div>
                )}

                {removeCurrentImage && (
                  <div className="mt-2.5 p-2.5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-800 flex items-center justify-between">
                    <span>Image marked for removal upon saving.</span>
                    <button
                      type="button"
                      onClick={() => setRemoveCurrentImage(false)}
                      className="font-bold underline text-amber-900 hover:text-amber-950"
                    >
                      Undo
                    </button>
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-3 pt-2">
                <input
                  type="checkbox"
                  id="isPublished"
                  name="isPublished"
                  checked={formData.isPublished}
                  onChange={handleChange}
                  className="w-4 h-4 text-brandPrimary border-slate-300 rounded focus:ring-brandPrimary"
                />
                <label htmlFor="isPublished" className="text-sm font-semibold text-slate-700 cursor-pointer flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Publish immediately (Visible on website)
                </label>
              </div>

              <div className="flex justify-end pt-5 border-t border-slate-100 mt-6 space-x-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl text-slate-600 font-semibold hover:bg-slate-100 transition text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary text-sm font-bold px-6 py-2.5 shadow-md shadow-brandPrimary/20 disabled:opacity-60 flex items-center gap-2"
                >
                  {loading && <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>}
                  {editingBlog ? (loading ? 'Updating...' : 'Update Post') : (loading ? 'Publishing...' : 'Save Post')}
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
