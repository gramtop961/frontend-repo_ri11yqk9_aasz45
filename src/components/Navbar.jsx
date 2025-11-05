import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0f1a]/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-yellow-300 via-amber-400 to-orange-500 shadow-lg" />
            <span className="font-semibold tracking-wide text-white">Teyvat Chronicles</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#home" className="hover:text-white transition">Home</a>
            <a href="#characters" className="hover:text-white transition">Characters</a>
            <a href="#regions" className="hover:text-white transition">Regions</a>
            <a href="#download" className="hover:text-white transition">Download</a>
            <a href="#play" className="ml-4 rounded-full bg-gradient-to-r from-cyan-300 to-blue-500 px-4 py-2 text-sm font-medium text-[#0a0f1a] shadow-md hover:shadow-cyan-500/20 transition">Play Now</a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0a0f1a]/80 backdrop-blur">
          <div className="px-4 py-3 space-y-2 text-white/80">
            <a href="#home" className="block py-2">Home</a>
            <a href="#characters" className="block py-2">Characters</a>
            <a href="#regions" className="block py-2">Regions</a>
            <a href="#download" className="block py-2">Download</a>
            <a href="#play" className="mt-2 inline-block w-full text-center rounded-full bg-gradient-to-r from-cyan-300 to-blue-500 px-4 py-2 font-medium text-[#0a0f1a]">Play Now</a>
          </div>
        </div>
      )}
    </header>
  );
}
