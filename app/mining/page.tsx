import Link from "next/link";

const articles = [
  {
    id: "bhutan-strategy",
    title: "Inside Bhutan’s national Bitcoin mining strategy",
    blurb:
      "How a small country turned excess hydropower into a sovereign mining stack — and what it signals for others.",
    tags: ["sovereign", "policy", "hydro"],
  },
  {
    id: "immersion-vs-air",
    title: "Immersion vs air-cooled: where the economics actually win",
    blurb:
      "Forget marketing decks — this is how capex, opex, uptime, and energy prices interact in the real world.",
    tags: ["immersion", "asic", "capex"],
  },
  {
    id: "post-2028-home-mining",
    title: "Post-2028: what home mining realistically looks like",
    blurb:
      "Why solo mining fantasies die hard, and what a sane home-mining setup could look like after the next halving.",
    tags: ["home mining", "halving", "strategy"],
  },
];

export default function MiningDeskPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10 md:py-16">
        <header className="flex items-center justify-between gap-4">
          <Link href="/" className="text-sm font-semibold text-slate-200">
            ← Back to homepage
          </Link>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Satoshi Gazette · Mining & Infrastructure Desk
          </div>
        </header>

        <section className="space-y-3">
          <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Mining &amp; Infrastructure Desk
          </h1>
          <p className="max-w-xl text-sm text-slate-400">
            Weekly deep dives on ASICs, energy markets, hosting contracts, and
            policy — written for people who actually run rigs or grids.
          </p>
        </section>

        <section className="space-y-4">
          {articles.map((a) => (
            <article
              key={a.id}
              className="space-y-2 rounded-xl border border-slate-800 bg-slate-900/40 p-4"
            >
              <h2 className="text-sm font-semibold text-slate-100">
                {a.title}
              </h2>
              <p className="text-xs text-slate-300">{a.blurb}</p>
              <div className="flex flex-wrap gap-2">
                {a.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-700 bg-slate-950/60 px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>

        <p className="text-xs text-slate-500">
          Later we&apos;ll break these into full articles with their own URLs.
        </p>
      </div>
    </main>
  );
}
