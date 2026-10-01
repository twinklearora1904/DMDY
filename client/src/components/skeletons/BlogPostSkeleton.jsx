import React from 'react';
import { Shimmer } from './BlogSkeleton';

/**
 * Full-Page Skeleton Screen for Individual Blog Post (BlogPost.jsx)
 * Provides perceived performance boost while fetching article content from API/database.
 */
export const BlogPostSkeleton = () => (
  <div className="pt-28 sm:pt-36 pb-12 sm:pb-20 bg-slate-50 min-h-screen font-sans">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Top Navigation Row Skeleton */}
      <div className="flex items-center justify-between py-4 sm:py-6 mb-4">
        <Shimmer className="w-36 h-5" />
        <Shimmer className="w-28 h-9 rounded-xl" />
      </div>

      {/* Main Content Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Main Article Column (8 cols) */}
        <div className="lg:col-span-8 bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-sm p-5 sm:p-10 md:p-12 space-y-8">
          
          {/* Header */}
          <div className="space-y-4 pb-8 border-b border-slate-100">
            {/* Tag Pills */}
            <div className="flex gap-2">
              <Shimmer className="w-24 h-6 rounded-full" />
              <Shimmer className="w-20 h-6 rounded-full" />
            </div>

            {/* Title Lines */}
            <Shimmer className="w-full h-10 sm:h-12" />
            <Shimmer className="w-4/5 h-10 sm:h-12" />

            {/* Author / Date / Read Time */}
            <div className="flex items-center gap-4 pt-2">
              <Shimmer className="w-32 h-4" />
              <span className="text-slate-300">&bull;</span>
              <Shimmer className="w-28 h-4" />
              <span className="text-slate-300">&bull;</span>
              <Shimmer className="w-20 h-4" />
            </div>
          </div>

          {/* Hero Banner Image Placeholder */}
          <Shimmer className="w-full h-64 sm:h-96 rounded-2xl" />

          {/* Prose Content Paragraphs */}
          <div className="space-y-6 pt-2">
            <div className="space-y-2.5">
              <Shimmer className="w-full h-4" />
              <Shimmer className="w-full h-4" />
              <Shimmer className="w-11/12 h-4" />
              <Shimmer className="w-4/5 h-4" />
            </div>

            <Shimmer className="w-2/5 h-8 mt-6 mb-3 rounded-lg" />

            <div className="space-y-2.5">
              <Shimmer className="w-full h-4" />
              <Shimmer className="w-full h-4" />
              <Shimmer className="w-5/6 h-4" />
              <Shimmer className="w-3/4 h-4" />
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <Shimmer className="w-full h-4" />
              <Shimmer className="w-5/6 h-4" />
            </div>

            <div className="space-y-2.5">
              <Shimmer className="w-full h-4" />
              <Shimmer className="w-11/12 h-4" />
              <Shimmer className="w-2/3 h-4" />
            </div>
          </div>

          {/* CTA Box Placeholder */}
          <Shimmer className="w-full h-48 rounded-2xl mt-10" />
        </div>

        {/* Sidebar (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 space-y-4">
            <Shimmer className="w-28 h-5 rounded-full !from-slate-800 !to-slate-700" />
            <Shimmer className="w-full h-8 !from-slate-800 !to-slate-700" />
            <Shimmer className="w-4/5 h-8 !from-slate-800 !to-slate-700" />
            <Shimmer className="w-full h-16 !from-slate-800 !to-slate-700" />
            <Shimmer className="w-full h-12 rounded-xl !from-slate-800 !to-slate-700" />
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 space-y-3">
            <Shimmer className="w-32 h-5 mb-4" />
            <Shimmer className="w-full h-12 rounded-xl" />
            <Shimmer className="w-full h-12 rounded-xl" />
            <Shimmer className="w-full h-12 rounded-xl" />
          </div>
        </div>

      </div>

    </div>
  </div>
);

export default BlogPostSkeleton;
