import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContactModal } from '../context/ContactModalContext';
import api from '../utils/api';
import { Sparkles, ArrowRight, Calendar, Search, Clock, X, Eye, SlidersHorizontal, Tag as TagIcon } from 'lucide-react';
import { getOptimizedImage, getResponsiveSrcSet } from '../utils/cloudinary';
import SEO from '../components/SEO';
import { BlogHeroSkeleton, BlogGridSkeleton } from '../components/skeletons/BlogSkeleton';
import EmptyState from '../components/EmptyState';

const Blog = () => {
  const { openModal } = useContactModal();
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [sortBy, setSortBy] = useState('newest'); // 'relevance', 'newest', 'popular'
  
  // Live autocomplete search suggestions state
  const [suggestions, setSuggestions] = useState({ suggestions: [], tags: [] });
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const searchContainerRef = useRef(null);

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

  // Handle clicking outside suggestions container to dismiss
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Debounced Live Suggestions Fetcher
  useEffect(() => {
    const trimmed = searchTerm.trim();
    if (trimmed.length < 2) {
      const clearTimer = setTimeout(() => {
        setSuggestions({ suggestions: [], tags: [] });
        setShowSuggestions(false);
      }, 0);
      return () => clearTimeout(clearTimer);
    }

    const timer = setTimeout(async () => {
      setIsSearching(true);
      try {
        const res = await api.get(`/api/blogs/search/suggest?q=${encodeURIComponent(trimmed)}`);
        setSuggestions(res.data || { suggestions: [], tags: [] });
        setShowSuggestions(true);
      } catch (err) {
        console.error('Failed to fetch search suggestions:', err);
      } finally {
        setIsSearching(false);
      }
    }, 220);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Extract all unique tags
  const allTags = ['All', ...new Set(blogs.flatMap((b) => b.tags || []))];

  // Determine if user has applied search or tag filter
  const isFiltered = searchTerm.trim() !== '' || selectedTag !== 'All';

  // Advanced Sorting & Matching Logic
  const processedBlogs = blogs.filter((blog) => {
    const query = searchTerm.toLowerCase().trim();
    const matchesSearch =
      !query ||
      blog.title.toLowerCase().includes(query) ||
      (blog.content && blog.content.toLowerCase().includes(query)) ||
      (blog.metaDescription && blog.metaDescription.toLowerCase().includes(query)) ||
      (blog.tags && blog.tags.some((t) => t.toLowerCase().includes(query)));

    const matchesTag = selectedTag === 'All' || (blog.tags && blog.tags.includes(selectedTag));
    return matchesSearch && matchesTag;
  });

  // Apply Sort
  const sortedBlogs = [...processedBlogs].sort((a, b) => {
    if (sortBy === 'popular') {
      return (b.views || 0) - (a.views || 0);
    }
    if (sortBy === 'relevance' && searchTerm.trim()) {
      const q = searchTerm.toLowerCase().trim();
      const aTitle = a.title.toLowerCase().includes(q) ? 3 : 0;
      const bTitle = b.title.toLowerCase().includes(q) ? 3 : 0;
      const aTag = a.tags && a.tags.some(t => t.toLowerCase().includes(q)) ? 2 : 0;
      const bTag = b.tags && b.tags.some(t => t.toLowerCase().includes(q)) ? 2 : 0;
      const aScore = aTitle + aTag;
      const bScore = bTitle + bTag;
      if (bScore !== aScore) return bScore - aScore;
    }
    // Default newest
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  const latestBlog = blogs.length > 0
    ? [...blogs].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0]
    : null;

  // When not filtered, display remaining blogs after latest post (index 1 onwards).
  // When filtered, display all matching results.
  const displayedBlogs = isFiltered ? sortedBlogs : sortedBlogs.slice(1);

  // Helper for read time calculation
  const getReadTime = (content) => {
    if (!content) return '4 min read';
    const words = content.trim().split(/\s+/).length;
    return `${Math.max(1, Math.ceil(words / 200))} min read`;
  };


  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <SEO
        title="Insights & Growth Playbooks"
        description="Explore DMDY's proven frameworks, performance marketing teardowns, and actionable digital growth strategies."
        url="https://www.digimedigiyou.com/blog"
      />

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
                <BlogHeroSkeleton />
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
                          src={getOptimizedImage(latestBlog.image?.url || latestBlog.image, { width: 800, quality: 'auto:good' })}
                          srcSet={getResponsiveSrcSet(latestBlog.image?.url || latestBlog.image, [360, 640, 800, 1024])}
                          sizes="(max-width: 1024px) 100vw, 500px"
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
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-200/80 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00AED6]">
                  {isFiltered ? 'Search & Filter Results' : 'Growth Archive'}
                </span>
                {isFiltered && (
                  <span className="px-2 py-0.5 rounded-md bg-[#00AED6]/10 text-[#00AED6] text-[11px] font-bold">
                    {displayedBlogs.length} {displayedBlogs.length === 1 ? 'Match' : 'Matches'}
                  </span>
                )}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {isFiltered
                  ? `Showing ${displayedBlogs.length} ${displayedBlogs.length === 1 ? 'Article' : 'Articles'}`
                  : 'More Articles & Playbooks'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
                {isFiltered
                  ? `Filtering results for query "${searchTerm || 'All'}" in ${selectedTag} topic.`
                  : 'Explore previous strategies, growth frameworks, and case studies.'}
              </p>
            </div>

            {/* Advanced Search & Sort Control Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              
              {/* Sort By Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full sm:w-auto px-3.5 py-2.5 rounded-2xl bg-white border border-slate-200/90 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#00AED6]/20 focus:border-[#00AED6] shadow-sm appearance-none pr-8 cursor-pointer"
                >
                  {searchTerm.trim() && <option value="relevance">Sort: AI Relevance</option>}
                  <option value="newest">Sort: Newest First</option>
                  <option value="popular">Sort: Most Popular (Views)</option>
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Search Input Box with Live Suggestions Dropdown */}
              <div ref={searchContainerRef} className="w-full sm:w-80 md:w-96 relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search playbooks, SEO, paid media..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => {
                    if (suggestions.suggestions.length > 0 || suggestions.tags.length > 0) {
                      setShowSuggestions(true);
                    }
                  }}
                  className="w-full pl-11 pr-10 py-2.5 rounded-2xl bg-white border border-slate-200/90 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#00AED6]/20 focus:border-[#00AED6] shadow-sm transition-all"
                />
                
                {isSearching ? (
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2">
                    <div className="w-3.5 h-3.5 border-2 border-[#00AED6] border-t-transparent rounded-full animate-spin"></div>
                  </div>
                ) : searchTerm ? (
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setShowSuggestions(false);
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                    title="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                ) : null}

                {/* Floating Autocomplete / Live Search Suggestions Card */}
                {showSuggestions && (suggestions.suggestions.length > 0 || suggestions.tags.length > 0) && (
                  <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-150">
                    
                    {/* Matching Tags / Categories Pill Row */}
                    {suggestions.tags && suggestions.tags.length > 0 && (
                      <div className="p-3 bg-slate-50 border-b border-slate-100">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <TagIcon className="w-3 h-3 text-[#00AED6]" />
                          <span>Matching Topics</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {suggestions.tags.map((tag) => (
                            <button
                              key={tag}
                              type="button"
                              onClick={() => {
                                setSelectedTag(tag);
                                setShowSuggestions(false);
                              }}
                              className="text-xs px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#00AED6] hover:text-[#00AED6] transition-colors font-medium cursor-pointer"
                            >
                              #{tag}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Matching Articles List */}
                    {suggestions.suggestions.length > 0 && (
                      <div className="p-2 divide-y divide-slate-50 max-h-72 overflow-y-auto">
                        <div className="px-2 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          Top Matching Playbooks
                        </div>
                        {suggestions.suggestions.map((item) => (
                          <div
                            key={item._id}
                            onClick={() => {
                              setShowSuggestions(false);
                              navigate(`/blog/${item.slug}`);
                            }}
                            className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer flex items-center justify-between gap-3 text-left"
                          >
                            <div className="min-w-0 flex-1">
                              <h4 className="text-xs sm:text-sm font-bold text-slate-800 hover:text-[#00AED6] truncate">
                                {item.title}
                              </h4>
                              <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-0.5">
                                {item.tags && item.tags[0] && (
                                  <span className="text-[#00AED6] font-semibold">{item.tags[0]}</span>
                                )}
                                <span>&bull;</span>
                                <span className="flex items-center gap-1">
                                  <Eye className="w-3 h-3" /> {(item.views || 0).toLocaleString()}
                                </span>
                              </div>
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="p-2.5 bg-slate-50 border-t border-slate-100 text-center">
                      <button
                        type="button"
                        onClick={() => setShowSuggestions(false)}
                        className="text-xs font-bold text-[#00AED6] hover:underline"
                      >
                        View all results &rarr;
                      </button>
                    </div>

                  </div>
                )}

              </div>
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
                  className={`text-xs font-bold px-4 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer ${selectedTag === tag
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-white border border-slate-200/90 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                >
                  {tag}
                </button>
              ))}
              {isFiltered && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedTag('All');
                    setSortBy('newest');
                  }}
                  className="text-xs font-bold px-3 py-2 rounded-xl text-rose-600 hover:bg-rose-50 transition-colors ml-auto cursor-pointer shrink-0"
                >
                  Reset All Filters
                </button>
              )}
            </div>
          )}

          {/* Grid of Remaining Blogs */}
          {loading ? (
            <BlogGridSkeleton count={6} />
          ) : displayedBlogs.length === 0 ? (
            <EmptyState
              icon={Search}
              badge={isFiltered ? "Filtered Results" : "Growth Archive"}
              title={isFiltered ? "No Strategic Articles Found" : "Publications Loading Soon"}
              description={
                isFiltered
                  ? `No articles matched your search query "${searchTerm}" or the selected topic filter. Try broadening your criteria.`
                  : "Our performance strategists are preparing upcoming deep dives and growth teardowns. Check back soon!"
              }
              actionText={isFiltered ? "Reset Search & Filters" : "Request Custom Case Study"}
              onAction={
                isFiltered
                  ? () => {
                      setSearchTerm('');
                      setSelectedTag('All');
                    }
                  : () => openModal()
              }
              secondaryActionText={isFiltered ? "Talk to a Strategist" : undefined}
              onSecondaryAction={isFiltered ? () => openModal() : undefined}
            />
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
                    className="rounded-3xl overflow-hidden border border-slate-200/80 flex flex-col justify-between transition-all duration-300 hover:shadow-xl bg-white group"
                  >
                    <div>
                      {/* Card Image */}
                      {imageUrl ? (
                        <div className="w-full h-52 overflow-hidden relative bg-slate-100">
                          <img
                            src={getOptimizedImage(imageUrl, { width: 600, quality: 'auto:good' })}
                            srcSet={getResponsiveSrcSet(imageUrl, [360, 480, 600, 768])}
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-medium mb-3">
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
                          <span>&bull;</span>
                          <span className="inline-flex items-center gap-1.5 text-slate-500 font-semibold">
                            <Eye className="w-3.5 h-3.5 text-[#00AED6]" />
                            {(blog.views || 0).toLocaleString()} reads
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
                className="btn-primary"
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
