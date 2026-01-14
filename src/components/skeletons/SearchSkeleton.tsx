/**
 * @file        src/components/skeletons/SearchSkeleton.tsx
 * @author      David @dvhsh (https://dvh.sh)
 * @description Skeleton loader component for the search results page
 */
import React from 'react';

export const SearchSkeleton = () => {
  return (
    <div className="w-full space-y-4 animate-pulse mt-8">
      {/* Header Skeleton */}
      <div className="flex justify-between items-center border-b border-white/5 pb-2 mb-6">
        <div className="h-4 w-32 bg-neutral-800 rounded"></div>
        <div className="h-4 w-24 bg-neutral-800 rounded"></div>
      </div>

      {/* Card Skeletons */}
      {[1, 2, 3].map((i) => (
        <div 
          key={i} 
          className="border border-white/5 bg-[#0a0a0a] rounded overflow-hidden w-full"
        >
          <div className="flex items-center justify-between p-3 bg-neutral-900/30 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-neutral-800 rounded"></div>
              <div className="h-4 w-24 bg-neutral-800 rounded"></div>
            </div>
            <div className="w-4 h-4 bg-neutral-800 rounded"></div>
          </div>
          {/* Content hint */}
          <div className="p-4 space-y-2">
            <div className="flex justify-between">
              <div className="h-3 w-16 bg-neutral-800/50 rounded"></div>
              <div className="h-3 w-32 bg-neutral-800/50 rounded"></div>
            </div>
            <div className="flex justify-between">
              <div className="h-3 w-20 bg-neutral-800/50 rounded"></div>
              <div className="h-3 w-24 bg-neutral-800/50 rounded"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
