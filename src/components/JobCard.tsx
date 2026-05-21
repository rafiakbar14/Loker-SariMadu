import React from 'react';
import { Truck, Boxes, FileText, MapPin, ExternalLink, GraduationCap } from 'lucide-react';
import { JobPosition } from '../types';

interface JobCardProps {
  key?: string;
  position: JobPosition;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Truck: Truck,
  Boxes: Boxes,
  FileText: FileText,
};

export default function JobCard({ position }: JobCardProps) {
  const IconComponent = iconMap[position.iconName] || Boxes;

  // Design accents per position
  const designAccents: Record<string, { bg: string, text: string, border: string, badgeBg: string }> = {
    admin_distribusi: {
      bg: 'bg-indigo-50 dark:bg-indigo-950/20',
      text: 'text-indigo-600 dark:text-indigo-400',
      border: 'hover:border-indigo-500/55 dark:hover:border-indigo-400/55',
      badgeBg: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-300',
    },
    admin_logistik_proyek: {
      bg: 'bg-emerald-50 dark:bg-emerald-950/20',
      text: 'text-emerald-600 dark:text-emerald-400',
      border: 'hover:border-emerald-500/55 dark:hover:border-emerald-400/55',
      badgeBg: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
    },
    admin_umum: {
      bg: 'bg-sky-50 dark:bg-sky-950/20',
      text: 'text-sky-600 dark:text-sky-400',
      border: 'hover:border-sky-500/55 dark:hover:border-sky-400/55',
      badgeBg: 'bg-sky-500/10 text-sky-700 dark:text-sky-300',
    },
  };

  const accent = designAccents[position.id] || {
    bg: 'bg-slate-50 dark:bg-slate-900',
    text: 'text-slate-600 dark:text-slate-400',
    border: 'hover:border-slate-500/55',
    badgeBg: 'bg-slate-500/10 text-slate-700 dark:text-slate-300',
  };

  return (
    <a
      href={position.talentaLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-white dark:bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-200/75 dark:border-slate-800/80 shadow-xs hover:shadow-md ${accent.border} transition-all duration-200 cursor-pointer block`}
    >
      {/* Decorative Left Boundary Strip */}
      <div className={`absolute left-0 top-4 bottom-4 w-1 rounded-r-md bg-linear-to-b transition-all duration-200 ${
        position.id === 'admin_distribusi' ? 'from-indigo-500 to-violet-500' :
        position.id === 'admin_logistik_proyek' ? 'from-emerald-500 to-teal-500' :
        'from-sky-500 to-blue-500'
      }`} />

      {/* Primary Details Block */}
      <div className="flex items-start gap-4 flex-1">
        <div className={`flex-shrink-0 p-3 rounded-xl ${accent.bg} ${accent.text} group-hover:scale-105 transition-transform duration-200`}>
          <IconComponent className="w-5.5 h-5.5 stroke-[1.8]" />
        </div>
        
        <div className="space-y-1 flex-1 pr-2">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-display font-bold text-base md:text-lg text-slate-800 dark:text-slate-100 leading-snug group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
              {position.title}
            </h3>
            <span className={`inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded-md ${accent.badgeBg}`}>
              {position.type}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] font-medium text-slate-400 dark:text-slate-500">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              Samarinda, Kaltim
            </span>
            <span className="flex items-center gap-1">
              <GraduationCap className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
              {position.education}
            </span>
          </div>
        </div>
      </div>

      {/* Action Button Indicator */}
      <div className="flex items-center justify-end gap-2 mt-4 sm:mt-0 pt-4 sm:pt-0 border-t sm:border-t-0 border-slate-100 dark:border-slate-800/60 sm:pl-4">
        <span className="flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl text-xs font-semibold bg-linear-to-r from-slate-900 to-slate-800 dark:from-slate-150 dark:to-slate-100 text-white dark:text-slate-950 group-hover:from-amber-600 group-hover:to-amber-500 dark:group-hover:from-amber-500 dark:group-hover:to-amber-400 group-hover:text-white dark:group-hover:text-slate-950 transition-all duration-200 font-display">
          Lamar Sekarang
          <ExternalLink className="w-3.5 h-3.5 stroke-[2.3]" />
        </span>
      </div>
    </a>
  );
}
