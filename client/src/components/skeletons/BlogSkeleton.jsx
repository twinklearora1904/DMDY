import React from 'react';

/**
 * Shimmer element with smooth animated gradient
 */
export const Shimmer = ({ className = '' }) => (
  <div
    className={`bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 bg-[length:200%_100%] animate-pulse rounded-xl ${className}`}
  />
);

/**
 * Skeleton Loader for Blog Page Hero Featured Post Card
 */
export const BlogHeroSkeleton = () => (
  <div className="relative bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden flex flex-col justify-between p-1">
    {/* Top Status Bar */}
    <div className="px-6 py-4 flex items-center justify-between border-b border-slate-100 bg-slate-50/60">
      <div className="flex items-center gap-2">
        <Shimmer className="w-2.5 h-2.5 rounded-full" />
        <Shimmer className="w-20 h-4" />
      </div>
      <Shimmer className="w-24 h-5 rounded-full" />
    </div>

    {/* Featured Image Placeholder */}
    <div className="p-4 sm:p-5">
      <Shimmer className="h-56 sm:h-64 w-full rounded-2xl" />
    </div>

    {/* Card Content Placeholder */}
    <div className="p-6 sm:p-7 pt-2 flex-1 flex flex-col justify-between space-y-4">
      <div className="space-y-3">
        {/* Meta row */}
        <div className="flex items-center gap-3">
          <Shimmer className="w-24 h-3.5" />
          <span className="text-slate-300">&bull;</span>
          <Shimmer className="w-20 h-3.5" />
        </div>

        {/* Title Lines */}
        <Shimmer className="w-11/12 h-6" />
        <Shimmer className="w-3/4 h-6" />

        {/* Excerpt Lines */}
        <Shimmer className="w-full h-4 mt-2" />
        <Shimmer className="w-5/6 h-4" />
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <Shimmer className="w-28 h-4" />
        <Shimmer className="w-24 h-4" />
      </div>
    </div>
  </div>
);

/**
 * Skeleton Card for 3-Column Blog Grid
 */
export const BlogCardSkeleton = () => (
  <div className="rounded-3xl overflow-hidden border border-slate-200/80 bg-white flex flex-col justify-between shadow-sm p-4 sm:p-5 space-y-4">
    {/* Image */}
    <div className="relative">
      <Shimmer className="w-full h-52 rounded-2xl" />
      <Shimmer className="absolute top-3 left-3 w-24 h-6 rounded-full !from-slate-300 !to-slate-200" />
    </div>

    {/* Content */}
    <div className="flex-1 flex flex-col justify-between space-y-4 px-1">
      <div className="space-y-2.5">
        <div className="flex items-center gap-2">
          <Shimmer className="w-20 h-3" />
          <span className="text-slate-300">&bull;</span>
          <Shimmer className="w-16 h-3" />
        </div>
        <Shimmer className="w-11/12 h-5" />
        <Shimmer className="w-2/3 h-5" />
        <Shimmer className="w-full h-3.5 mt-2" />
        <Shimmer className="w-4/5 h-3.5" />
      </div>

      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
        <Shimmer className="w-20 h-3.5" />
        <Shimmer className="w-24 h-3.5" />
      </div>
    </div>
  </div>
);

/**
 * Complete Grid of Skeletons
 */
export const BlogGridSkeleton = ({ count = 6 }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {Array.from({ length: count }).map((_, i) => (
      <BlogCardSkeleton key={i} />
    ))}
  </div>
);
