import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { JOB_POSITIONS } from './data';
import BrandHeader from './components/BrandHeader';
import JobCard from './components/JobCard';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
        <div className="max-w-lg mx-auto px-5">

          <div className="flex justify-end pt-5">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-md border border-neutral-200 dark:border-neutral-800 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors cursor-pointer"
              title={darkMode ? 'Mode Terang' : 'Mode Gelap'}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          <main className="pb-16">
            <BrandHeader totalJobs={JOB_POSITIONS.length} />

            <p className="mt-6 mb-3 text-sm text-neutral-500 dark:text-neutral-400">
              Pilih atau klik salah satu posisi di bawah untuk melamar.
            </p>

            <div className="space-y-2.5">
              {JOB_POSITIONS.map((pos) => (
                <JobCard key={pos.id} position={pos} />
              ))}
            </div>

            <div className="mt-8 p-4 border border-neutral-200 dark:border-neutral-800 rounded-lg">
              <p className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 mb-2">Cara Mendaftar</p>
              <ol className="text-xs text-neutral-500 dark:text-neutral-500 space-y-1 list-decimal list-inside leading-relaxed">
                <li>Pilih posisi yang sesuai di atas</li>
                <li>Klik <strong className="text-neutral-700 dark:text-neutral-300">Lamar Sekarang</strong> — Anda akan diarahkan ke portal resmi Talenta</li>
                <li>Isi formulir dan unggah CV Anda langsung ke sistem HRD</li>
              </ol>
            </div>
          </main>

          <footer className="border-t border-neutral-100 dark:border-neutral-900 py-6 text-center text-xs text-neutral-400 dark:text-neutral-600">
            © {new Date().getFullYear()} Sari Madu Bakery · Samarinda, Kalimantan Timur
          </footer>

        </div>
      </div>
    </div>
  );
}
