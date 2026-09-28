import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useContactModal } from '../context/ContactModalContext';
import api from '../utils/api';
import { ArrowLeft, Calendar, User, Tag, Sparkles, Share2, Check, Clock } from 'lucide-react';

const BlogPost = () => {
  const { openModal } = useContactModal();
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await api.get(`/api/blogs/${slug}`);
        setBlog(res.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Blog post not found.');
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);

  useEffect(() => {
    if (blog?.title) {
      document.title = `${blog.title} — DMDY Intelligence`;
    }
    return () => {
      document.title = 'DMDY — 360° Digital Growth Partner & Performance Marketing Agency';
    };
  }, [blog]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Helper for reading time calculation
  const getReadTime = (content) => {
    if (!content) return '4 min read';
    const words = content.trim().split(/\s+/).length;
    return `${Math.max(1, Math.ceil(words / 200))} min read`;
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-28 sm:pt-36 pb-12 sm:pb-20 flex flex-col items-center justify-center text-slate-500 gap-3 bg-slate-50 font-sans">
        <div className="w-8 h-8 border-3 border-[#00AED6] border-t-transparent rounded-full animate-spin"></div>
        <p className="font-semibold text-xs sm:text-sm text-slate-600">Loading article...</p>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen pt-28 sm:pt-36 pb-12 sm:pb-20 flex flex-col items-center justify-center text-center px-4 bg-slate-50 font-sans">
        <div className="bg-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-xl max-w-md w-full">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">Article Not Found</h2>
          <p className="text-slate-500 text-xs sm:text-sm mb-6">{error || 'The requested article could not be loaded.'}</p>
          <Link 
            to="/blog" 
            className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-slate-900 text-white font-bold text-xs sm:text-sm hover:bg-slate-800 transition-colors shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  const imageUrl = blog.image?.url || (typeof blog.image === 'string' ? blog.image : null);

  const formatInline = (text) => {
    if (!text) return null;
    const regex = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|`[^`]+`|\*[^*]+\*)/g;
    const parts = text.split(regex);
    return parts.map((part, index) => {
      if (!part) return null;
      if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
        const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (match) {
          return (
            <a
              key={index}
              href={match[2]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00AED6] hover:underline font-semibold"
            >
              {match[1]}
            </a>
          );
        }
      }
      if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
        return (
          <strong key={index} className="font-extrabold text-slate-900">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith('`') && part.endsWith('`') && part.length >= 2) {
        return (
          <code key={index} className="px-1.5 py-0.5 rounded bg-slate-100 text-[#E6007A] text-xs font-mono border border-slate-200">
            {part.slice(1, -1)}
          </code>
        );
      }
      if (part.startsWith('*') && part.endsWith('*') && part.length >= 2) {
        return (
          <em key={index} className="italic text-slate-800">
            {part.slice(1, -1)}
          </em>
        );
      }
      return part;
    });
  };

  const renderFormattedContent = (content) => {
    if (!content) return null;
    const rawLines = content.split('\n');
    const blocks = [];
    let currentList = null;

    rawLines.forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed) {
        if (currentList) {
          blocks.push(currentList);
          currentList = null;
        }
        return;
      }

      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        const itemContent = trimmed.replace(/^[-*]\s+/, '');
        if (!currentList || currentList.type !== 'ul') {
          if (currentList) blocks.push(currentList);
          currentList = { type: 'ul', items: [itemContent] };
        } else {
          currentList.items.push(itemContent);
        }
        return;
      }

      if (/^\d+\.\s+/.test(trimmed)) {
        const itemContent = trimmed.replace(/^\d+\.\s+/, '');
        if (!currentList || currentList.type !== 'ol') {
          if (currentList) blocks.push(currentList);
          currentList = { type: 'ol', items: [itemContent] };
        } else {
          currentList.items.push(itemContent);
        }
        return;
      }

      if (currentList) {
        blocks.push(currentList);
        currentList = null;
      }

      if (trimmed.startsWith('### ')) {
        blocks.push({ type: 'h3', content: trimmed.replace(/^###\s+/, '') });
      } else if (trimmed.startsWith('## ')) {
        blocks.push({ type: 'h2', content: trimmed.replace(/^##\s+/, '') });
      } else if (trimmed.startsWith('# ')) {
        blocks.push({ type: 'h1', content: trimmed.replace(/^#\s+/, '') });
      } else if (trimmed.startsWith('> ')) {
        blocks.push({ type: 'blockquote', content: trimmed.replace(/^>\s+/, '') });
      } else {
        blocks.push({ type: 'p', content: trimmed });
      }
    });

    if (currentList) {
      blocks.push(currentList);
    }

    return blocks.map((block, idx) => {
      switch (block.type) {
        case 'h1':
          return (
            <h1 key={idx} className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-10 mb-4 tracking-tight leading-tight">
              {formatInline(block.content)}
            </h1>
          );
        case 'h2':
          return (
            <h2 key={idx} className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mt-8 mb-3.5 border-b border-slate-100 pb-2.5 tracking-tight leading-snug">
              {formatInline(block.content)}
            </h2>
          );
        case 'h3':
          return (
            <h3 key={idx} className="text-lg sm:text-xl font-extrabold text-slate-900 mt-6 mb-2.5 leading-snug">
              {formatInline(block.content)}
            </h3>
          );
        case 'blockquote':
          return (
            <blockquote key={idx} className="border-l-4 border-[#00AED6] bg-cyan-50/50 pl-4 pr-3 py-2.5 my-4 rounded-r-xl text-slate-700 italic text-sm sm:text-base">
              {formatInline(block.content)}
            </blockquote>
          );
        case 'ul':
          return (
            <ul key={idx} className="my-4 ml-6 list-disc space-y-2 text-slate-700">
              {block.items.map((item, itemIdx) => (
                <li key={itemIdx} className="leading-relaxed text-sm sm:text-base font-normal">
                  {formatInline(item)}
                </li>
              ))}
            </ul>
          );
        case 'ol':
          return (
            <ol key={idx} className="my-4 ml-6 list-decimal space-y-2 text-slate-700">
              {block.items.map((item, itemIdx) => (
                <li key={itemIdx} className="leading-relaxed text-sm sm:text-base font-normal">
                  {formatInline(item)}
                </li>
              ))}
            </ol>
          );
        default:
          return (
            <p key={idx} className="text-slate-600 leading-relaxed text-sm sm:text-base font-normal my-4">
              {formatInline(block.content)}
            </p>
          );
      }
    });
  };

  return (
    <div className="pt-28 sm:pt-36 pb-12 sm:pb-20 bg-slate-50 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Navigation Row */}
        <div className="flex items-center justify-between py-4 sm:py-6 mb-4">
          <Link
            to="/blog"
            className="inline-flex items-center text-slate-600 hover:text-slate-900 transition font-semibold text-xs sm:text-sm group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to all articles
          </Link>
          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors shadow-sm cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
            {copied ? 'Link Copied!' : 'Share Article'}
          </button>
        </div>

        {/* Main Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Article Column (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-sm p-5 sm:p-10 md:p-12">
            
            <header className="mb-10 pb-8 border-b border-slate-100">
              {blog.tags && blog.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00AED6] bg-[#00AED6]/10 px-3.5 py-1 rounded-full uppercase tracking-wider border border-[#00AED6]/20 shadow-sm"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* H1 Article Title (Matched exactly with SeoService.jsx Hero H1) */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.12]">
                {blog.title}
              </h1>

              {/* Article Meta Data */}
              <div className="flex flex-wrap items-center text-slate-500 text-xs sm:text-sm gap-4">
                <span className="inline-flex items-center gap-1.5 font-semibold text-slate-800">
                  <User className="w-4 h-4 text-[#00AED6]" />
                  {blog.author?.name || 'DMDY Growth Strategists'}
                </span>
                <span>&bull;</span>
                <span className="inline-flex items-center gap-1.5 font-medium text-slate-500">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  {new Date(blog.createdAt).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
                <span>&bull;</span>
                <span className="inline-flex items-center gap-1.5 font-medium text-slate-500">
                  <Clock className="w-4 h-4 text-slate-400" />
                  {getReadTime(blog.content)}
                </span>
              </div>
            </header>

            {imageUrl && (
              <div className="mb-10 overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
                <img
                  src={imageUrl}
                  alt={blog.title}
                  className="w-full max-h-[500px] object-cover"
                />
              </div>
            )}

            <article className="prose prose-slate max-w-none text-slate-800">
              {renderFormattedContent(blog.content)}
            </article>

            {/* Article Footer CTA for Inbound Leads */}
            <div className="mt-16 p-8 md:p-10 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white text-center border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00AED6]/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="relative z-10">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#00AED6] bg-white/10 px-3.5 py-1.5 rounded-full mb-4">
                  <Sparkles className="w-3.5 h-3.5" /> Direct Consultation
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 tracking-tight">
                  Want to deploy this strategy for your brand?
                </h3>
                <p className="text-slate-300 text-sm sm:text-base font-normal max-w-lg mx-auto mb-6 leading-relaxed">
                  Book a confidential 30-minute growth session with our performance marketing leadership team.
                </p>
                <button 
                  type="button"
                  onClick={() => openModal()}
                  className="btn-primary"
                >
                  Request Strategy Session &rarr;
                </button>
              </div>
            </div>

          </div>

          {/* Sticky Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            {/* Lead Gen Card */}
            <div className="bg-slate-950 text-white rounded-3xl p-8 border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#00AED6]/20 rounded-full blur-2xl pointer-events-none"></div>
              <div className="relative z-10">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#00AED6] bg-white/10 px-3 py-1 rounded-full mb-4">
                  Growth Partner
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2 tracking-tight">
                  Scale Your Business Faster
                </h3>
                <p className="text-slate-400 text-sm sm:text-base font-normal leading-relaxed mb-6">
                  Get a comprehensive forensic audit of your paid ads, SEO, and conversion funnel from DMDY strategists.
                </p>
                <button
                  type="button"
                  onClick={() => openModal()}
                  className="w-full btn-primary"
                >
                  Book Free Audit
                </button>
              </div>
            </div>

            {/* Quick Links Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3.5">
                Core Capabilities
              </h4>
              <ul className="space-y-2.5 text-sm sm:text-base">
                <li><Link to="/services/seo" className="text-slate-600 hover:text-[#00AED6] transition-colors font-medium flex items-center justify-between py-1">Search Engine Optimization <span>&rarr;</span></Link></li>
                <li><Link to="/services" className="text-slate-600 hover:text-[#E6007A] transition-colors font-medium flex items-center justify-between py-1">Paid Media & Ads <span>&rarr;</span></Link></li>
                <li><Link to="/services" className="text-slate-600 hover:text-[#F5A623] transition-colors font-medium flex items-center justify-between py-1">Web Development <span>&rarr;</span></Link></li>
                <li><Link to="/pricing" className="text-slate-600 hover:text-[#00C48C] transition-colors font-medium flex items-center justify-between py-1">Investment Plans <span>&rarr;</span></Link></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BlogPost;
