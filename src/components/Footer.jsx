export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Teyvat Chronicles. Fan-made experience.</p>
          <nav className="flex items-center gap-6 text-sm text-white/70">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Support</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
