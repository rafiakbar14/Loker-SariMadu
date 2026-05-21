import React from 'react';

interface BrandHeaderProps {
  totalJobs: number;
}

export default function BrandHeader({ totalJobs }: BrandHeaderProps) {
  return (
    <div className="pt-10 pb-8 border-b border-neutral-200 dark:border-neutral-800">
      <img
        src="/logo.png"
        alt="Logo Sari Madu Bakery"
        className="w-16 h-16 object-contain mb-4"
      />
      <span className="inline-block text-[11px] font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-3">
        Rekrutmen Resmi
      </span>
      <h1 className="text-[28px] font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-none">
        Sari Madu Bakery
      </h1>
      <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
        {totalJobs} posisi terbuka · Samarinda, Kalimantan Timur
      </p>
    </div>
  );
}
