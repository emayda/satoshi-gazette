export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-10 md:py-16">
        {/* Top nav */}
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-orange-500/90" />
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                Satoshi Gazette
              </div>
              <p className="text-xs text-slate-500">
                Bitcoin-only publication
              </p>
            </div>
          </div>

          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#" className="hover:text-white">
              Wire
            </a>
            <a href="#" className="hover:text-white">
              Briefings
            </a>
            <a href="#" className="hover:text-white">
              Mining Desk
            </a>
            <a href="#" className="hover:text-white">
              About
            </a>
          </nav>
        </header>

        {/* Hero */}
        <section className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-300 ring-1 ring-slate-700/80">
              Bitcoin news, minus the bullshit.
            </span>

            <div className="space-y-4">
              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Live wire. Clear briefings. Deep dives on mining &amp;
                infrastructure.
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                Satoshi Gazette is a Bitcoin-only news desk. Fast, high-signal
                updates, context for busy Bitcoiners, and weekly analysis on
                mining, energy, and policy.
              </p>
            </div>

            {/* Fake email capture for now */}
                        {/* Fake email capture for now */}
            <div className="space-y-2">
              <form className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <input
                  type="email"
                  placeholder="you@bitcoin-pleb.com"
                  className="h-10 w-full rounded-md border border-slate-700 bg-slate-950/70 px-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 sm:max-w-xs"
                />
                <button
                  type="button"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-orange-500 px-4 text-sm font-medium text-black transition hover:bg-orange-400"
                >
                  Get the Satoshi Brief
                </button>
              </form>
              <p className="text-xs text-slate-500">
                3× weekly briefing. Bitcoin-only. No trading spam.
              </p>
            </div>

          </div>

          {/* Right column placeholder */}
          <aside className="space-y-4 rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Today at a glance
            </div>
            <ul className="space-y-3 text-sm">
              <li className="border-l-2 border-orange-500/80 pl-3">
                <div className="text-xs text-slate-400">Wire · 12:05 UTC</div>
                <div className="font-medium text-slate-50">
                  ETF flows turn net positive for third straight day.
                </div>
                <div className="text-xs text-slate-400">
                  Tightening spot supply into the next halving.
                </div>
              </li>
              <li className="border-l-2 border-slate-600 pl-3">
                <div className="text-xs text-slate-400">Briefing</div>
                <div className="font-medium text-slate-50">
                  What a new mining tax proposal means for hash rate geography.
                </div>
              </li>
              <li className="border-l-2 border-slate-600 pl-3">
                <div className="text-xs text-slate-400">Mining Desk</div>
                <div className="font-medium text-slate-50">
                  Deep dive: How utilities actually model Bitcoin miners on the
                  grid.
                </div>
              </li>
            </ul>
          </aside>
        </section>

        {/* Three core sections preview */}
        <section className="grid gap-6 md:grid-cols-3">
          {/* Wire */}
          <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <h2 className="text-sm font-semibold text-slate-100">
              The Wire
            </h2>
            <p className="text-xs text-slate-400">
              Fast, Bitcoin-only hits in plain language.
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>• G7 regulator hints at clearer mining guidance in Q1.</li>
              <li>• Public miner adds 3 EH/s with new hydro deployment.</li>
              <li>• Major exchange moves 10k+ BTC to cold storage.</li>
            </ul>
            <button className="mt-2 text-xs font-medium text-orange-400 hover:text-orange-300">
              View full Wire →
            </button>
          </div>

          {/* Briefings */}
          <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <h2 className="text-sm font-semibold text-slate-100">
              Satoshi Brief
            </h2>
            <p className="text-xs text-slate-400">
              3–5 key stories per issue, with “why it matters” for holders,
              miners, and builders.
            </p>
            <div className="rounded-md border border-slate-800 bg-slate-950/50 p-3 text-xs text-slate-300">
              <div className="mb-1 text-[11px] uppercase tracking-[0.18em] text-slate-500">
                Latest issue
              </div>
              <div className="font-medium text-slate-100">
                Hashrate migration and sovereign mining in 2025.
              </div>
              <div className="mt-1 text-slate-400">
                How new energy deals and policy moves are shifting where blocks
                are found.
              </div>
            </div>
            <button className="mt-2 text-xs font-medium text-orange-400 hover:text-orange-300">
              Read all Briefings →
            </button>
          </div>

          {/* Mining Desk */}
          <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <h2 className="text-sm font-semibold text-slate-100">
              Mining &amp; Infrastructure Desk
            </h2>
            <p className="text-xs text-slate-400">
              Weekly deep dives on ASICs, energy markets, hosting, and policy.
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>• Immersion vs air-cooled: where the economics actually win.</li>
              <li>• Case study: a national utility’s Bitcoin mining pilot.</li>
              <li>• Post-2028: what “home mining” realistically looks like.</li>
            </ul>
            <button className="mt-2 text-xs font-medium text-orange-400 hover:text-orange-300">
              Explore the Mining Desk →
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
