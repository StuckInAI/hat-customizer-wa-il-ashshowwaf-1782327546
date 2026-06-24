interface Props {
  value: string;
  onChange: (val: string) => void;
}

export default function MonogramInput({ value, onChange }: Props) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">
        Monogram <span className="text-white/20 normal-case">(up to 3 chars)</span>
      </h3>
      <div className="relative">
        <input
          type="text"
          maxLength={3}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder="NFT"
          className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white text-lg font-bold tracking-widest uppercase focus:outline-none focus:border-purple-400 focus:shadow-[0_0_12px_#a855f744] transition-all duration-200 placeholder:text-white/20"
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/30 font-mono">
          {value.length}/3
        </span>
      </div>
    </div>
  );
}
