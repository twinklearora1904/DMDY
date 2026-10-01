import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

/**
 * High-End Empty State Component
 * Provides a polished, conversion-oriented feel when zero search results,
 * no articles in a category, or empty data tables occur.
 */
const EmptyState = ({
  icon: Icon = Sparkles,
  badge = 'DMDY Intelligence',
  title = 'No Results Found',
  description = 'We couldn’t find any matches for your current criteria. Try adjusting your search or explore our other growth resources.',
  actionText,
  onAction,
  secondaryActionText,
  onSecondaryAction,
  variant = 'card',
  className = '',
}) => {
  return (
    <div
      className={`relative overflow-hidden text-center transition-all ${
        variant === 'card'
          ? 'bg-white rounded-3xl border border-slate-200/90 shadow-sm p-8 sm:p-12 max-w-xl mx-auto'
          : variant === 'minimal'
          ? 'py-12 px-4 max-w-md mx-auto'
          : 'bg-slate-50/50 rounded-2xl border border-dashed border-slate-300 p-8 sm:p-10'
      } ${className}`}
    >
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-tr from-[#00AED6]/10 to-[#E6007A]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Icon Badge */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-slate-100 to-slate-50 border border-slate-200/80 shadow-inner flex items-center justify-center text-[#00AED6] mb-5">
          <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
        </div>

        {/* Eyebrow Badge */}
        {badge && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold uppercase tracking-wider mb-3 border border-slate-200/60">
            <Sparkles className="w-3 h-3 text-[#E6007A]" />
            {badge}
          </span>
        )}

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-2.5">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 text-xs sm:text-sm max-w-md mb-6 leading-relaxed font-normal">
          {description}
        </p>

        {/* Actions */}
        {(actionText || secondaryActionText) && (
          <div className="flex flex-wrap items-center justify-center gap-3">
            {actionText && (
              <button
                type="button"
                onClick={onAction}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs sm:text-sm font-bold shadow-md hover:bg-slate-800 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{actionText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}

            {secondaryActionText && (
              <button
                type="button"
                onClick={onSecondaryAction}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm font-bold hover:bg-slate-50 transition-all"
              >
                <span>{secondaryActionText}</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default EmptyState;
