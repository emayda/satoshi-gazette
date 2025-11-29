import Link from "next/link";

const wireItems = [
  {
    id: "etf-flows",
    time: "12:05 UTC",
    title: "ETF flows stay net positive for third straight day",
    angle: "More BTC taken off the open market into regulated wrappers.",
  },
  {
    id: "tepco",
    time: "10:32 UTC",
    title: "Tepco expands its green Bitcoin mining pilot",
    angle: "Another legacy utility choosing to monetize spare capacity with hash.",
  },
  {
    id: "tax-proposal",
    time: "08:11 UTC",
    title: "New mining tax proposal resurfaces in the US",
    angle: "Mostly political theatre, but shows where the regulatory wind is blowing.",
  },
];

export default function WirePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10 md:py-16">
        <header className="flex items-center justify-between gap-4">
          <Link href="/" className="text-sm font-semibold text-slate-200">
            ← Back to homepage
          </Link>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Satoshi Gazette · Wire
          </div>
        </header>

        <section className="space-y-3">
          <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            The Wire
          </h1>
          <p className="max-w-xl text-sm text-slate-400">
            Fast, Bitcoin-only hits. Headlines + one line of signal. No price
            spam, no altcoin garbage.
          </p>
        </section>

        <section className="space-y-4 rounded-xl border border-slate-800 bg-slate-900/40 p-4">
          {wireItems.map((item) => (
            <article
              key={item.id}
              className="border-l border-slate-700 pl-3 text-sm text-slate-100"
            >
              <div className="text-xs text-slate-500">Today · {item.time}</div>
              <h2 className="font-medium">{item.title}</h2>
              <p className="text-xs text-slate-400">{item.angle}</p>
            </article>
          ))}
        </section>

        <p className="text-xs text-slate-500">
          Placeholder data for now. We&apos;ll hook this to real content files
          later.
        </p>
      </div>
    </main>
  );
}
