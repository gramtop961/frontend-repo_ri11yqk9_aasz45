import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Characters from './components/Characters';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white antialiased">
      {/* Decorative background grid */}
      <div className="pointer-events-none fixed inset-0" aria-hidden>
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0f1a]" />
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <Characters />

        {/* Regions teaser */}
        <section id="regions" className="relative py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold">Wonders of Seven Nations</h2>
                <p className="mt-3 text-white/70 max-w-prose">
                  From wind-kissed highlands to thunder-lit islands, each nation boasts its own culture, challenges, and elemental resonance.
                </p>
                <div className="mt-6 flex gap-3">
                  {['Mondstadt', 'Liyue', 'Inazuma', 'Sumeru'].map((r) => (
                    <span key={r} className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm text-white/80">{r}</span>
                  ))}
                </div>
              </div>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-700/40 via-blue-700/40 to-cyan-700/40 p-1">
                <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#0c1322]">
                  <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.3),transparent_60%)]" />
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0f1a] to-transparent" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
