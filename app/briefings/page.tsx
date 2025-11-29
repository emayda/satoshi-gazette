import Link from "next/link";

const briefings = [
  {
    id: "2025-01-01",
    date: "1 Jan 2025",
    title: "Satoshi Brief — Hashrate migration & sovereign mining",
    bullets: [
      "Why new energy deals are shifting where blocks are found.",
      "How sovereign miners change the security + politics mix.",
      "What this means for home miners and small ops.",
    ],
  },
  {
    id: "2024-12-29",
    date: "29 Dec 2024",
    title: "Satoshi Brief — ETF flows, halvings, and liquidity",
    bullets: [
      "Who is actually buying the ETF, and why it matters.",
      "How lower new supply interacts with ETF demand.",
      "What to watch in futures funding vs spot flows.",
    ],
  },
];

export default function BriefingsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10 md:py-16">
        <header className="flex items-center justify-between gap-4">
          <Link href="/" className="text-sm font-semibold text-slate-200">
            ← Back to homepage
          </Link>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Satoshi Gazette · Briefings
          </div>
        </header>

        <section className="space-y-3">
          <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Satoshi Brief
          </h1>
          <p className="max-w-xl text-sm text-slate-400">
            3–5 key Bitcoin stories per issue with “why it matters” for holders,
            miners, and builders.
          </p>
        </section>

        <section className="space-y-4">
          {briefings.map((b) => (
            <article
              key={b.id}
              className="space-y-2 rounded-xl border border-slate-800 bg-slate-900/40 p-4"
            >
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-sm font-semibold text-slate-100">
                  {b.title}
                </h2>
                <span className="text-xs text-slate-500">{b.date}</span>
              </div>
              <ul className="ml-4 list-disc space-y-1 text-xs text-slate-300">
                {b.bullets.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <p className="text-xs text-slate-500">
          Later we&apos;ll give each issue its own page and real content.
        </p>
      </div>
    </main>
  );
}
