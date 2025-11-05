const ELEMENTS = [
  {
    name: 'Anemo',
    color: 'from-emerald-300 to-teal-500',
    description: 'Wind that carries distant whispers and gentle freedom.',
  },
  {
    name: 'Pyro',
    color: 'from-amber-300 to-rose-500',
    description: 'Flame that ignites passion and blazes a daring path.',
  },
  {
    name: 'Hydro',
    color: 'from-sky-300 to-blue-600',
    description: 'Water that heals, flows, and reshapes destiny.',
  },
  {
    name: 'Electro',
    color: 'from-fuchsia-300 to-violet-600',
    description: 'Lightning that dances with fleeting dreams.',
  },
  {
    name: 'Cryo',
    color: 'from-cyan-200 to-blue-400',
    description: 'Frost that preserves, protects, and sharpens resolve.',
  },
  {
    name: 'Geo',
    color: 'from-yellow-300 to-amber-600',
    description: 'Stone that endures with unwavering strength.',
  },
];

export default function Characters() {
  return (
    <section id="characters" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Choose your element</h2>
            <p className="mt-2 text-white/70 max-w-prose">
              Each element offers a unique playstyle. Combine reactions to unlock spectacular effects.
            </p>
          </div>
          <a href="#play" className="hidden md:inline-block rounded-full border border-white/15 px-4 py-2 text-sm text-white/90 hover:bg-white/10">See more</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ELEMENTS.map((el) => (
            <article
              key={el.name}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-lg transition hover:shadow-cyan-500/10"
            >
              <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${el.color} opacity-30 blur-2xl`} />
              <div className="relative">
                <div className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${el.color} px-3 py-1 text-xs font-semibold text-[#0a0f1a] shadow`}>{el.name}</div>
                <h3 className="mt-4 text-xl font-semibold text-white">{el.name} Resonance</h3>
                <p className="mt-2 text-sm text-white/70">{el.description}</p>
                <div className="mt-6 flex items-center gap-2 text-cyan-300/90">
                  <div className="h-px flex-1 bg-gradient-to-r from-cyan-300/0 via-cyan-300/60 to-cyan-300/0" />
                  <span className="text-xs uppercase tracking-widest">View details</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-cyan-300/0 via-cyan-300/60 to-cyan-300/0" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
