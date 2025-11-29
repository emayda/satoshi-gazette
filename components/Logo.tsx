export function Logo({ size = 32 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2">
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="flex-shrink-0"
      >
        <rect
          x="2"
          y="2"
          width="28"
          height="28"
          rx="8"
          fill="#020617"
          stroke="#1f2937"
          strokeWidth="1.5"
        />
        <circle
          cx="16"
          cy="16"
          r="10"
          fill="none"
          stroke="#f97316"
          strokeWidth="1.6"
        />
        {/* Stylised vertical bar / "B" */}
        <path
          d="M13 10.5h3a2.3 2.3 0 0 1 0 4.6H13zm0 4.6h3a2.3 2.3 0 1 1 0 4.6H13"
          fill="none"
          stroke="#f97316"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.3 9v14"
          stroke="#f97316"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      <div className="leading-tight">
        <span className="sg-mono text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400">
          Satoshi Gazette
        </span>
        <p className="text-xs text-slate-500">Bitcoin-only news desk</p>
      </div>
    </div>
  );
}
