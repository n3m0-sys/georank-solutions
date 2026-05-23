export default function App() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <section className="relative flex min-h-screen items-center justify-center px-6 text-center">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,rgba(56,189,248,.25),transparent_40%)]" />

        <div className="relative z-10 max-w-5xl">
          <div className="glass inline-flex rounded-full px-4 py-2 text-sm text-sky-200 mb-6">
            SEO Local Premium • GeoRank Solutions
          </div>

          <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight">
            Sua empresa no topo do <span className="text-gradient">Google Maps.</span>
          </h1>

          <p className="mt-8 text-slate-300 text-lg md:text-2xl leading-9">
            Transformamos negócios locais em referências da região usando SEO Local, Google Meu Negócio e automações inteligentes.
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            <a href="https://wa.me/5511989549089" className="glow-button rounded-full bg-sky-400 px-8 py-4 text-slate-950 font-black hover:scale-105 transition">
              Quero aparecer no Google
            </a>

            <a href="#" className="rounded-full border border-white/10 bg-white/5 px-8 py-4 font-bold hover:border-sky-400/40 transition">
              Ver resultados
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
