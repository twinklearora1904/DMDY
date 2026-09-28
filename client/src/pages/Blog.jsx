import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContactModal } from '../context/ContactModalContext';
import api from '../utils/api';
import { Sparkles, ArrowRight, Calendar, Search, Clock, X } from 'lucide-react';

const Blog = () => {
  const { openModal } = useContactModal();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  useEffect(() => {
    document.title = 'Insights & Growth Playbooks — DMDY';
    const fetchBlogs = async () => {
      try {
        const res = await api.get('/api/blogs');
        setBlogs(res.data || []);
      } catch (err) {
        console.error('Failed to fetch blogs', err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  // Sort blogs with newest first
  const sortedBlogs = [...blogs].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const latestBlog = sortedBlogs.length > 0 ? sortedBlogs[0] : null;

  // Extract all unique tags
  const allTags = ['All', ...new Set(blogs.flatMap((b) => b.tags || []))];

  // Determine if user has applied search or tag filter
  const isFiltered = searchTerm.trim() !== '' || selectedTag !== 'All';

  // Filter blogs according to search query and selected tag
  const filteredBlogs = sortedBlogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (blog.content && blog.content.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (blog.metaDescription && blog.metaDescription.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesTag = selectedTag === 'All' || (blog.tags && blog.tags.includes(selectedTag));
    return matchesSearch && matchesTag;
  });

  // When not filtered, display remaining blogs after the latest post (index 1 onwards).
  // When filtered, display all matching results.
  const displayedBlogs = isFiltered ? filteredBlogs : sortedBlogs.slice(1);

  // Helper for read time calculation
  const getReadTime = (content) => {
    if (!content) return '4 min read';
    const words = content.trim().split(/\s+/).length;
    return `${Math.max(1, Math.ceil(words / 200))} min read`;
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      
      {/* ========================================================= */}
      {/* HERO SECTION: 2 COLUMNS (Left: Text, Right: Latest Post) */}
      {/* ========================================================= */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#00AED6_0%,#E6007A_30%,transparent_70%)] opacity-5 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column (7 cols): Hero Text & Positioning */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-bold text-slate-700 uppercase tracking-widest mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#00AED6]" />
                Growth Insights & Case Teardowns
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.12]">
                Strategies from the <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">
                  Frontlines of Growth
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl mb-8">
                Forensic teardowns, proprietary frameworks, and actionable playbooks on SEO, paid performance media, conversion rate optimization, and revenue acceleration.
              </p>

              {/* Trust Indicators / Publication Features */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 border-t border-slate-100 max-w-lg">
                <div>
                  <div className="text-base sm:text-xl font-extrabold text-slate-900">100%</div>
                  <div className="text-xs text-slate-500 font-semibold">Battle-Tested</div>
                </div>
                <div>
                  <div className="text-base sm:text-xl font-extrabold text-slate-900">Zero</div>
                  <div className="text-xs text-slate-500 font-semibold">Vanity Metrics</div>
                </div>
                <div>
                  <div className="text-base sm:text-xl font-extrabold text-slate-900">Weekly</div>
                  <div className="text-xs text-slate-500 font-semibold">New Playbooks</div>
                </div>
              </div>
            </div>

            {/* Right Column (5 cols): Latest Post Spotlight */}
            <div className="lg:col-span-5">
              {loading ? (
                /* Skeleton Loader for Latest Post */
                <div className="bg-white rounded-3xl border border-slate-200 p-6 animate-pulse shadow-sm">
                  <div className="h-4 bg-slate-200 rounded w-1/3 mb-4"></div>
                  <div className="h-56 bg-slate-200 rounded-2xl mb-4"></div>
                  <div className="h-6 bg-slate-200 rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-slate-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-slate-200 rounded w-2/3"></div>
                </div>
              ) : latestBlog ? (
                /* Latest Post Featured Card */
                <div className="relative group">
                  {/* Subtle Gradient Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#00AED6]/25 via-[#E6007A]/20 to-[#F5A623]/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  <article className="relative bg-white rounded-3xl border border-slate-200/90 shadow-xl group-hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between">
                    
                    {/* Top Status Bar */}
                    <div className="px-6 py-3.5 flex items-center justify-between border-b border-slate-100 bg-slate-50/60">
                      <div className="inline-flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00AED6] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00AED6]"></span>
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                          Latest Post
                        </span>
                      </div>
                      {latestBlog.tags && latestBlog.tags.length > 0 && (
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#00AED6]/10 text-[#00AED6] border border-[#00AED6]/20">
                          {latestBlog.tags[0]}
                        </span>
                      )}
                    </div>

                    {/* Featured Image */}
                    <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-slate-900">
                      {latestBlog.image?.url || (typeof latestBlog.image === 'string' && latestBlog.image) ? (
                        <img
                          src={latestBlog.image?.url || latestBlog.image}
                          alt={latestBlog.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="eager"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-8 flex flex-col justify-between text-white">
                          <span className="text-xs font-bold uppercase tracking-widest text-[#00AED6]">
                            Featured Strategic Analysis
                          </span>
                          <div className="text-xl sm:text-2xl font-extrabold text-white/95">
                            DMDY Intelligence Brief
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Card Content */}
                    <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Meta information */}
                        <div className="flex items-center gap-3 text-xs text-slate-500 font-medium mb-3">
                          <span className="inline-flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-slate-400" />
                            {new Date(latestBlog.createdAt).toLocaleDateString(undefined, {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </span>
                          <span>&bull;</span>
                          <span className="inline-flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            {getReadTime(latestBlog.content)}
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2.5 leading-snug group-hover:text-[#00AED6] transition-colors line-clamp-2">
                          <Link to={`/blog/${latestBlog.slug}`}>
                            {latestBlog.title}
                          </Link>
                        </h2>

                        {/* Excerpt */}
                        <p className="text-sm sm:text-base text-slate-600 line-clamp-2 leading-relaxed mb-6 font-normal">
                          {latestBlog.metaDescription || (latestBlog.content ? latestBlog.content.substring(0, 130) + '...' : '')}
                        </p>
                      </div>

                      {/* Footer Link */}
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs sm:text-sm text-slate-500 font-medium">
                          By <span className="font-bold text-slate-700">{latestBlog.author?.name || 'DMDY Team'}</span>
                        </span>
                        <Link
                          to={`/blog/${latestBlog.slug}`}
                          className="inline-flex items-center gap-1 text-sm font-bold text-[#00AED6] hover:text-[#E6007A] transition-colors group-hover:translate-x-0.5"
                        >
                          Read Article <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                  </article>
                </div>
              ) : (
                /* Empty state when no blogs are in database */
                <div className="bg-white rounded-3xl border border-slate-200/90 p-8 text-center text-slate-500">
                  <Sparkles className="w-8 h-8 text-[#00AED6] mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-slate-800 mb-1">Publications Loading Soon</h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Stay tuned as our growth team compiles our upcoming teardowns.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: SEARCH, FILTER, AND REMAINING BLOGS GRID      */}
      {/* ========================================================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Row: Title & Search Bar */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200/80 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#00AED6] mb-1.5 block">
                {isFiltered ? 'Search & Category Results' : 'Growth Archive'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {isFiltered 
                  ? `Showing ${displayedBlogs.length} ${displayedBlogs.length === 1 ? 'Article' : 'Articles'}` 
                  : 'More Articles & Playbooks'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
                {isFiltered 
                  ? 'Showing articles matching your current filter criteria.' 
                  : 'Explore previous strategies, growth frameworks, and case studies.'}
              </p>
            </div>

            {/* Search Input Box */}
            <div className="w-full md:w-80 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search growth topics, SEO..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-9 py-2.5 rounded-2xl bg-white border border-slate-200/90 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#00AED6]/20 focus:border-[#00AED6] shadow-sm transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Chips */}
          {allTags.length > 1 && (
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 hidden sm:inline">
                Topic:
              </span>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`text-xs font-bold px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
                    selectedTag === tag
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-white border border-slate-200/90 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}

          {/* Grid of Remaining Blogs */}
          {loading ? (
            /* Skeleton Loading Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((n) => (
                <div key={n} className="bg-white rounded-3xl border border-slate-200 p-6 animate-pulse">
                  <div className="h-48 bg-slate-200 rounded-2xl mb-4"></div>
                  <div className="h-5 bg-slate-200 rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-slate-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-slate-200 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          ) : displayedBlogs.length === 0 ? (
            /* Empty State */
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-200/80 p-8 max-w-md mx-auto shadow-sm">
              <p className="font-bold text-slate-800 text-base sm:text-lg mb-1.5">No articles found</p>
              <p className="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">
                {isFiltered
                  ? 'No articles matched your search query or selected topic filter.'
                  : 'All caught up! Check back soon for our next published teardown.'}
              </p>
              {isFiltered && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedTag('All');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors shadow-sm"
                >
                  Reset Filters
                </button>
              )}
            </div>
          ) : (
            /* Blogs Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedBlogs.map((blog) => {
                const imageUrl = blog.image?.url || (typeof blog.image === 'string' ? blog.image : null);
                const tag = blog.tags && blog.tags.length > 0 ? blog.tags[0] : 'Growth Strategy';
                const summary = blog.metaDescription || (blog.content ? blog.content.substring(0, 130) + '...' : '');

                return (
                  <article
                    key={blog._id}
                    className="rounded-3xl overflow-hidden border border-slate-200/80 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 bg-white group"
                  >
                    <div>
                      {/* Card Image */}
                      {imageUrl ? (
                        <div className="w-full h-52 overflow-hidden relative bg-slate-100">
                          <img
                            src={imageUrl}
                            alt={blog.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm border border-slate-200/40">
                            {tag}
                          </div>
                        </div>
                      ) : (
                        <div className="w-full h-52 bg-gradient-to-br from-slate-900 to-slate-800 p-6 flex flex-col justify-between text-white relative">
                          <span className="text-xs font-bold uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full w-max">
                            {tag}
                          </span>
                          <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white/90">
                            DMDY Intelligence
                          </span>
                        </div>
                      )}

                      {/* Card Body */}
                      <div className="p-7">
                        <div className="flex items-center gap-3 text-xs text-slate-400 font-medium mb-3">
                          <span className="inline-flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            {new Date(blog.createdAt).toLocaleDateString(undefined, {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </span>
                          <span>&bull;</span>
                          <span className="inline-flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            {getReadTime(blog.content)}
                          </span>
                        </div>

                        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2.5 line-clamp-2 leading-snug group-hover:text-[#00AED6] transition-colors">
                          <Link to={`/blog/${blog.slug}`}>
                            {blog.title}
                          </Link>
                        </h3>

                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4 line-clamp-3 font-normal">
                          {summary}
                        </p>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="px-7 pb-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm text-slate-500">
                      <span className="font-semibold text-slate-700">
                        {blog.author?.name || 'DMDY Strategist'}
                      </span>
                      <Link
                        to={`/blog/${blog.slug}`}
                        className="text-[#00AED6] font-bold text-sm hover:text-[#E6007A] transition-colors flex items-center gap-1 group-hover:translate-x-0.5"
                      >
                        Read Article &rarr;
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: INBOUND CTA BANNER (Senior Developer Polish)  */}
      {/* ========================================================= */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 sm:p-12 text-white border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00AED6]/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10 max-w-xl text-left">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#00AED6] bg-white/10 px-3 py-1 rounded-full mb-4">
                <Sparkles className="w-3.5 h-3.5" /> Performance Acceleration
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 tracking-tight">
                Want these growth frameworks applied to your brand?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
                Book a confidential 30-minute forensic audit with our growth leadership team. We analyze your SEO, conversion leaks, and paid channels at zero cost.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full md:w-auto">
              <button
                type="button"
                onClick={() => openModal()}
                className="py-3.5 px-8 rounded-full font-bold text-white text-sm sm:text-base shadow-xl shadow-cyan-500/20 bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623] hover:opacity-95 text-center transition-all duration-300 cursor-pointer"
              >
                Claim Free Growth Audit &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Blog;
