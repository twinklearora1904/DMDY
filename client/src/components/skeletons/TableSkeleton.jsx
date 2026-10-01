import React from 'react';
import { Shimmer } from './BlogSkeleton';

/**
 * Skeleton Loader for Admin CRM & Data Tables
 */
export const TableSkeleton = ({ rows = 5 }) => (
  <div className="w-full divide-y divide-slate-100 animate-pulse">
    {Array.from({ length: rows }).map((_, r) => (
      <div key={r} className="p-4 flex items-center justify-between gap-4">
        <div className="flex-1 space-y-2">
          <Shimmer className="w-40 h-4" />
          <Shimmer className="w-24 h-3" />
        </div>
        <Shimmer className="w-32 h-6 rounded-md hidden sm:block" />
        <div className="flex-1 space-y-2 hidden md:block">
          <Shimmer className="w-36 h-3" />
          <Shimmer className="w-28 h-3" />
        </div>
        <Shimmer className="w-24 h-8 rounded-lg" />
        <Shimmer className="w-8 h-8 rounded-lg" />
      </div>
    ))}
  </div>
);

export default TableSkeleton;
