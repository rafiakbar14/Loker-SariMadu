import React, { useState } from 'react';
import { 
  Sun, Moon, HelpCircle
} from 'lucide-react';

import { JOB_POSITIONS } from './data';

// Component imports
import BrandHeader from './components/BrandHeader';
import JobCard from './components/JobCard';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Theme support
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-amber-500/30 selection:text-amber-800 relative overflow-hidden flex flex-col justify-between">
        
        {/* Subtle Decorative Background Halos */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none -z-10 overflow-hidden">
          <div className="absolute -top-40 left-10 w-96 h-96 rounded-full bg-amber-400/10 dark:bg-amber-500/5 blur-3xl" />
          <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-blue-400/5 dark:bg-blue-500/5 blur-3xl" />
          <div className="absolute top-1/2 left-20 w-[500px] h-[500px] rounded-full bg-linear-to-tr from-brand-300/5 to-amber-500/5 blur-3xl -translate-y-1/2" />
        </div>

        {/* Global Toolbar Header */}
        <header className="w-full max-w-xl mx-auto px-4 pt-4 flex items-center justify-end">
          <button
            onClick={toggleDarkMode}
            className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 bg-white/60 dark:bg-slate-900/40 backdrop-blur-md rounded-xl border border-slate-200/50 dark:border-slate-800/80 hover:shadow-xs transition cursor-pointer"
            title={darkMode ? 'Aktifkan Mode Terang' : 'Aktifkan Mode Gelap'}
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 w-full max-w-xl mx-auto px-4 pb-12 space-y-6">
          {/* Brand Intro Header */}
          <BrandHeader totalJobs={JOB_POSITIONS.length} />

          {/* Job cards / Linktree link items container */}
          <div className="space-y-3">
            <div className="flex items-center justify-between px-1">
              <span className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest font-display">Lowongan Tersedia (Pilih Satu)</span>
              <span className="inline-block w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
            </div>

            <div className="space-y-3.5">
              {JOB_POSITIONS.map((pos) => (
                <JobCard
                  key={pos.id}
                  position={pos}
                />
              ))}
            </div>
          </div>

          {/* Guidelines / Help Section */}
          <div className="bg-slate-100/50 dark:bg-slate-900/40 border border-slate-200/40 dark:border-slate-800/50 rounded-2xl p-4 text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans space-y-2">
            <span className="font-bold text-slate-600 dark:text-slate-300 font-display flex items-center gap-1 text-[11px] uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
              Petunjuk Pendaftaran Kerja
            </span>
            <p>
              1. Klik pendaftaran atau tombol <span className="font-semibold text-slate-700 dark:text-slate-300">&quot;Lamar Sekarang&quot;</span> pada posisi yang Anda minati di atas. <br />
              2. Anda akan langsung diarahkan ke portal resmi **Talenta** Sari Madu Bakery. <br />
              3. Isi formulir pendaftaran dan unggah CV terbaik Anda langsung ke sistem pencatatan HRD.
            </p>
          </div>
        </main>

        {/* Global Footer */}
        <footer className="w-full text-center py-6 border-t border-slate-200/45 dark:border-slate-900 bg-white/30 dark:bg-slate-950/20 backdrop-blur-xs text-[11px] text-slate-400 dark:text-slate-500 space-y-1 font-mono">
          <p>© {new Date().getFullYear()} Sari Madu Recruitment • Samarinda, Kalimantan Timur.</p>
          <p className="opacity-75">Sistem Lowongan Kerja Terpadu • Terkoneksi Resmi ke Talenta</p>
        </footer>

      </div>
    </div>
  );
}
