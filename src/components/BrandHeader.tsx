import React from 'react';
import { motion } from 'motion/react';
import { Building2, MapPin, CheckCircle2, ChevronRight, Briefcase } from 'lucide-react';

interface BrandHeaderProps {
  totalJobs: number;
}

export default function BrandHeader({ totalJobs }: BrandHeaderProps) {
  // Simple copy share link of the page
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Tautan halaman berhasil disalin!');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="text-center pt-8 pb-4"
    >
      {/* Brand Identity */}
      <div className="flex items-center justify-center gap-1.5 mb-1.5">
        <h1 className="font-display font-extrabold text-2xl tracking-tight text-slate-900 dark:text-slate-50">
          Sari Madu Recruitment
        </h1>
        <CheckCircle2 className="w-5.5 h-5.5 text-blue-500 fill-blue-500/10" />
      </div>

      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 max-w-sm mx-auto px-6 mb-4 leading-relaxed">
        Penyedia bakery berkualitas tinggi. Cari karir impian Anda di unit dapur pusat Central Kitchen SS & unit khusus Dunia Interior.
      </p>

      {/* Meta tags / Badges */}
      <div className="flex flex-wrap items-center justify-center gap-2 max-w-md mx-auto px-4">
        <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-850 text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-slate-800">
          <MapPin className="w-3.5 h-3.5 text-red-500" />
          Samarinda, Kaltim
        </span>
        <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full bg-amber-50 dark:bg-brand-950/30 text-amber-800 dark:text-amber-400 border border-amber-200/50 dark:border-amber-900/40">
          <Briefcase className="w-3.5 h-3.5 text-amber-500" />
          {totalJobs} Posisi Aktif
        </span>
      </div>
    </motion.div>
  );
}
