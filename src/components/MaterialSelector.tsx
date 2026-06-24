const MATERIALS = ['Cotton', 'Wool', 'Velvet', 'Silk', 'Synthetic'];

interface Props {
  selected: string;
  onChange: (material: string) => void;
}

export default function MaterialSelector({ selected, onChange }: Props) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Material</h3>
      <div className="flex flex-wrap gap-2">
        {MATERIALS.map(m => (
          <button
            key={m}
            onClick={() => onChange(m)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
              selected === m
                ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_12px_#06b6d488]'
                : 'bg-white/5 border-white/10 text-white/50 hover:border-white/30 hover:text-white/80'
            }`}
          >
            {m}
          </button>
        ))}
      </div>
    </div>
  );
}
