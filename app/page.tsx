import Link from "next/link";
import { Logo } from "@/components/Logo";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#020617,_#020617_40%,_#020617_70%,_#020617)] text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-6 md:pt-10">
        {/* Announcement bar */}
        <div className="mb-2 flex items-center justify-between gap-3 rounded-full border border-slate-800 bg-slate-950/70 px-3 py-2">
          <div className="flex items-center gap-2">
            <span className="sg-mono inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="sg-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
              Bitcoin-only · No altcoins, no NFTs
            </span>
          </div>
          <Link
            href="/about"
            className="hidden text-[11px] text-slate-400 hover:text-slate-200 md:inline"
          >
            What is Satoshi Gazette?
          </Link>
        </div>

        {/* Header */}
        <header className="flex items-center justify-between gap-4">
          <Logo />
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <Link href="/wire" className="hover:text-white">
              Wire
            </Link>
            <Link href="/briefings" className="hover:text-white">
              Briefings
            </Link>
            <Link href="/mining" className="hover:text-white">
              Mining Desk
            </Link>
            <Link href="/about" className="hover:text-white">
              About
            </Link>
            <span className="inline-flex items-center gap-1 rounded-full border border-teal-500/40 bg-teal-500/5 px-2 py-0.5 text-[11px] font-medium text-teal-300">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
              Ask Satoshi · Beta
            </span>
          </nav>
        </header>

        {/* Hero: copy + AI panel */}
        <section className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.1fr)] lg:items-start">
          {/* Left side */}
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-slate-900/90 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-slate-700">
              Bitcoin news, minus the bullshit.
            </span>

            <div className="space-y-4">
              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.8rem]">
                Live wire. Clear briefings.
                <br className="hidden sm:block" />
                Deep dives on mining &amp; infrastructure.
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                Satoshi Gazette is an AI-assisted, Bitcoin-only news desk. Fast,
                high-signal updates, context for busy Bitcoiners, and weekly
                analysis on mining, energy, and policy you can actually query.
              </p>
            </div>

            {/* Email / CTA */}
            <div className="space-y-2">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <input
                  type="email"
                  placeholder="you@bitcoin-pleb.com"
                  className="h-10 w-full rounded-md border border-slate-700 bg-slate-950/80 px-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 sm:max-w-xs"
                />
                <button
                  type="button"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-orange-500 px-4 text-sm font-medium text-black shadow-sm shadow-orange-500/30 transition hover:bg-orange-400"
                >
                  Get the Satoshi Brief
                </button>
              </div>
              <p className="text-xs text-slate-500">
                3× weekly briefing. Bitcoin-only. No trading spam.
              </p>
            </div>
          </div>

          {/* Right: Ask Satoshi AI console */}
          <aside className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 shadow-[0_18px_60px_rgba(15,23,42,0.8)]">
            <div className="flex items-center justify-between gap-2">
              <div>
                <div className="sg-mono text-[10px] uppercase tracking-[0.2em] text-teal-400">
                  Ask Satoshi · AI Console
                </div>
                <p className="mt-1 text-xs text-slate-400">
                  Query the Gazette for context on mining, regulation, and
                  today&apos;s headlines.
                </p>
              </div>
              <span className="sg-mono rounded-full border border-teal-500/40 bg-teal-500/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] text-teal-300">
                Beta
              </span>
            </div>

            {/* Prompt box */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
              <div className="mb-2 flex items-center justify-between gap-2">
                <span className="sg-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                  Prompt
                </span>
                <span className="sg-mono text-[10px] text-slate-500">
                  Model: SG-Assistant
                </span>
              </div>
              <div className="rounded-md border border-slate-800 bg-slate-950/80 px-3 py-2 text-xs text-slate-200">
                Explain today&apos;s ETF flows and why they matter for long-term
                Bitcoin supply.
              </div>
            </div>

            {/* Response preview */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
              <div className="mb-2 flex items-center justify-between gap-2">
                <span className="sg-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                  Answer (preview)
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </div>
              <p className="text-xs text-slate-300">
                Net ETF inflows mean more BTC moving into long-term custody,
                shrinking tradable supply. Combined with a fixed issuance
                schedule, persistent inflows tend to make sell-side liquidity
                thinner into each halving cycle.
              </p>
            </div>

            {/* Suggested prompts */}
            <div className="space-y-2">
              <div className="sg-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                Suggested prompts
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "What does this new mining tax proposal change?",
                  "Summarise today’s macro news for Bitcoin.",
                  "How is hashrate shifting between regions this month?",
                ].map((label) => (
                  <button
                    key={label}
                    type="button"
                    className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-[11px] text-slate-300 hover:border-teal-500/60 hover:text-teal-200"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </section>

        {/* Today in Bitcoin ticker */}
        <section className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="sg-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
              Today in Bitcoin
            </span>
            <span className="h-px flex-1 bg-slate-800" />
          </div>
          <div className="flex flex-col gap-2 rounded-xl border border-slate-800 bg-slate-950/70 px-3 py-3 text-xs text-slate-300 md:flex-row md:items-center">
            <div className="flex items-center gap-2 md:w-1/3">
              <span className="sg-mono rounded-full bg-slate-900 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-slate-400">
                Market
              </span>
              <span>
                BTC ~ <span className="font-semibold text-slate-100">$XX,XXX</span>{" "}
                · Fees ~ <span className="text-slate-200">Y% of miner revenue</span>
              </span>
            </div>
            <div className="flex items-center gap-2 md:w-1/3">
              <span className="sg-mono rounded-full bg-slate-900 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-slate-400">
                Network
              </span>
              <span>
                Hashrate holding near all-time highs · next diff adj in ~
                <span className="text-slate-200"> N days</span>.
              </span>
            </div>
            <div className="flex items-center gap-2 md:w-1/3">
              <span className="sg-mono rounded-full bg-slate-900 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-slate-400">
                Narrative
              </span>
              <span>
                Focus today: sovereign mining, ETF flows, and grid-level
                energy deals.
              </span>
            </div>
          </div>
        </section>

        {/* Three core sections */}
        <section className="grid gap-6 md:grid-cols-3">
          {/* Wire */}
          <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-sm font-semibold text-slate-100">The Wire</h2>
              <span className="sg-mono text-[10px] uppercase tracking-[0.18em] text-emerald-400">
                Live
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Fast, Bitcoin-only hits in plain language.
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>• G7 regulator hints at clearer mining guidance in Q1.</li>
              <li>• Public miner adds 3 EH/s with new hydro deployment.</li>
              <li>• Major exchange moves 10k+ BTC to cold storage.</li>
            </ul>
            <Link
              href="/wire"
              className="mt-2 inline-block text-xs font-medium text-orange-400 hover:text-orange-300"
            >
              View full Wire →
            </Link>
          </div>

          {/* Briefings */}
          <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
            <h2 className="text-sm font-semibold text-slate-100">
              Satoshi Brief
            </h2>
            <p className="text-xs text-slate-400">
              3–5 key stories per issue, with “why it matters” for holders,
              miners, and builders.
            </p>
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3 text-xs text-slate-300">
              <div className="mb-1 sg-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
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
            <Link
              href="/briefings"
              className="mt-2 inline-block text-xs font-medium text-orange-400 hover:text-orange-300"
            >
              Read all Briefings →
            </Link>
          </div>

          {/* Mining Desk */}
          <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
            <h2 className="text-sm font-semibold text-slate-100">
              Mining &amp; Infrastructure Desk
            </h2>
            <p className="text-xs text-slate-400">
              Weekly deep dives on ASICs, energy markets, hosting, and policy.
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                • Immersion vs air-cooled: where the economics actually win.
              </li>
              <li>• Case study: a national utility’s Bitcoin mining pilot.</li>
              <li>• Post-2028: what “home mining” realistically looks like.</li>
            </ul>
            <Link
              href="/mining"
              className="mt-2 inline-block text-xs font-medium text-orange-400 hover:text-orange-300"
            >
              Explore the Mining Desk →
            </Link>
          </div>
        </section>

        {/* About strip */}
        <section className="mt-2 rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
          <p className="text-xs text-slate-400">
            Satoshi Gazette is an independent Bitcoin-only publication. No
            shitcoins, no pay-to-play press releases. We cover protocol,
            mining, regulation, and the real economy — and we&apos;re building
            an AI layer so you can interrogate the signal yourself.
          </p>
        </section>
      </div>
    </main>
  );
}
