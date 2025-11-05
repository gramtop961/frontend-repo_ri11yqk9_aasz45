import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      {/* Background aurora */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[40rem] w-[40rem] rounded-full bg-gradient-to-br from-cyan-400/30 via-blue-500/20 to-indigo-600/20 blur-3xl" />
        <div className="absolute bottom-0 -left-32 h-[26rem] w-[26rem] rounded-full bg-gradient-to-tr from-amber-300/20 via-yellow-400/10 to-white/0 blur-2xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 shadow-sm">
              <Sparkles size={14} className="text-cyan-300" />
              A vast world of adventure awaits
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Step into a boundless, elemental realm
            </h1>
            <p className="mt-5 text-white/80 text-base sm:text-lg max-w-prose">
              Glide over emerald cliffs, harness the power of the elements, and forge your own legend across seven breathtaking nations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#characters" className="rounded-full bg-gradient-to-r from-cyan-300 to-blue-500 px-6 py-3 font-medium text-[#0a0f1a] shadow-lg hover:shadow-cyan-500/30 transition">Explore Characters</a>
              <a href="#download" className="rounded-full border border-white/20 px-6 py-3 font-medium text-white/90 hover:bg-white/10 transition">Play Free</a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-tr from-blue-900/40 via-indigo-800/40 to-cyan-700/40 border border-white/10 shadow-2xl overflow-hidden">
              {/* Decorative stars */}
              <Starfield />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Starfield() {
  const stars = Array.from({ length: 80 });
  return (
    <div className="relative h-full w-full">
      {stars.map((_, i) => (
        <span
          key={i}
          className="absolute block h-0.5 w-0.5 rounded-full bg-white/70"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.5 + Math.random() * 0.5,
          }}
        />
      ))}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0f1a] to-transparent" />
    </div>
  );
}
