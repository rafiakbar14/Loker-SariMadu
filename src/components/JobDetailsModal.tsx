import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Heart, ClipboardCheck, ArrowUpRight, Sparkles
} from 'lucide-react';
import { JobPosition } from '../types';

interface JobDetailsModalProps {
  position: JobPosition;
  isOpen: boolean;
  onClose: () => void;
}

export default function JobDetailsModal({ position, isOpen, onClose }: JobDetailsModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/65 backdrop-blur-xs transition-opacity"
        />

        {/* Modal wrapper */}
        <div className="flex min-h-full items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
            className="relative w-full max-w-2xl transform overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xl transition-all flex flex-col max-h-[90vh]"
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-6 py-4.5">
              <div>
                <h2 className="font-display font-extrabold text-base md:text-lg text-slate-800 dark:text-slate-100">
                  {position.title}
                </h2>
                <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                  {position.department} • Samarinda, Kaltim
                </p>
              </div>
              
              <button
                onClick={onClose}
                className="p-1.5 rounded-full text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-600 dark:hover:text-slate-300 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            {/* Scrollable Modal Content */}
            <div className="overflow-y-auto p-6 flex-1 text-slate-700 dark:text-slate-300">
              <div className="space-y-6">
                {/* Key Stats Row */}
                <div className="grid grid-cols-3 gap-3 bg-slate-50 dark:bg-slate-850 p-4 rounded-2xl border border-slate-150/40 dark:border-slate-800/40">
                  <div>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider font-semibold">Tipe Kerja</p>
                    <p className="text-xs font-semibold sm:font-bold text-slate-800 dark:text-slate-200">{position.type}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider font-semibold">Pendidikan</p>
                    <p className="text-xs font-semibold sm:font-bold text-slate-800 dark:text-slate-200">{position.education}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider font-semibold">Lokasi Area</p>
                    <p className="text-xs font-semibold sm:font-bold text-slate-800 dark:text-slate-200">Samarinda, Kaltim</p>
                  </div>
                </div>

                {/* About the Role */}
                <div className="space-y-2">
                  <h4 className="font-display font-bold text-sm text-slate-900 dark:text-slate-50 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-3.5 bg-amber-500 rounded-xs" />
                    Deskripsi Pekerjaan
                  </h4>
                  <p className="text-sm text-slate-650 dark:text-slate-400 leading-relaxed font-sans">
                    {position.description}
                  </p>
                </div>

                {/* Responsibilities list */}
                <div className="space-y-3">
                  <h4 className="font-display font-bold text-sm text-slate-900 dark:text-slate-50 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-3.5 bg-indigo-500 rounded-xs" />
                    Tanggung Jawab Utama
                  </h4>
                  <ul className="space-y-2.5 text-sm pl-0">
                    {position.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="mt-1 flex items-center justify-center w-4 h-4 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold">
                          {idx + 1}
                        </span>
                        <span className="text-slate-650 dark:text-slate-400 leading-normal">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements list */}
                <div className="space-y-3">
                  <h4 className="font-display font-bold text-sm text-slate-900 dark:text-slate-50 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-3.5 bg-emerald-500 rounded-xs" />
                    Persyaratan Pelamar
                  </h4>
                  <ul className="space-y-2.5 text-sm pl-0">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="mt-1 flex items-center justify-center w-4.5 h-4.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                          <ClipboardCheck className="w-3.5 h-3.5" />
                        </span>
                        <span className="text-slate-650 dark:text-slate-400 leading-normal">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits list */}
                <div className="space-y-3">
                  <h4 className="font-display font-bold text-sm text-slate-900 dark:text-slate-50 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-3.5 bg-amber-500 rounded-xs" />
                    Benefit & Fasilitas Kerja
                  </h4>
                  <ul className="space-y-2.5 text-sm pl-0 grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                    {position.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Heart className="w-4 h-4 text-rose-500 dark:text-rose-400 fill-rose-500/10 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-650 dark:text-slate-400 leading-normal">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <hr className="border-slate-100 dark:border-slate-800" />

                {/* Main Action Call */}
                <div className="pt-2">
                  <a
                    href={position.talentaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4.5 rounded-2xl bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-655 hover:to-amber-650 text-white font-display font-bold text-sm shadow-md shadow-amber-500/10 hover:shadow-lg hover:shadow-amber-550/15 hover:scale-[1.01] transition duration-200 cursor-pointer text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/10 rounded-xl">
                        <Sparkles className="w-5 h-5 text-amber-200 fill-amber-200/15" />
                      </div>
                      <div>
                        <span className="flex items-center gap-2 text-white">
                          Kirim Lamaran di Portal Resmi Talenta
                        </span>
                        <p className="text-[10px] font-normal text-amber-550 leading-tight">Proses resmi terpusat, langsung diproses oleh HR Sari Madu Recruitment</p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
