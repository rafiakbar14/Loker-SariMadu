import React from 'react';
import { MapPin, GraduationCap, ArrowUpRight } from 'lucide-react';
import { JobPosition } from '../types';

interface JobCardProps {
  position: JobPosition;
}

export default function JobCard({ position }: JobCardProps) {
  return (
    <a
      href={position.talentaLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between p-4 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
    >
      <div className="flex-1 min-w-0 pr-4">
        <div className="flex flex-wrap items-center gap-2 mb-1.5">
          <h3 className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">
            {position.title}
          </h3>
          <span className="text-[11px] px-1.5 py-0.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 rounded">
            {position.type}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400 dark:text-neutral-500">
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3 flex-shrink-0" />
            {position.department}
          </span>
          <span className="flex items-center gap-1">
            <GraduationCap className="w-3 h-3 flex-shrink-0" />
            {position.education}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-1 text-neutral-400 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors flex-shrink-0">
        <span className="text-xs font-medium">Lamar Sekarang</span>
        <ArrowUpRight className="w-3.5 h-3.5" />
      </div>
    </a>
  );
}
