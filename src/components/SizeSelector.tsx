const SIZES = ['S', 'M', 'L', 'XL', 'One Size'];

interface Props {
  selected: string;
  onChange: (size: string) => void;
}

export default function SizeSelector({ selected, onChange }: Props) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Size</h3>
      <div className="flex flex-wrap gap-2">
        {SIZES.map(s => (
          <button
            key={s}
            onClick={() => onChange(s)}
            className={`px-4 py-1.5 rounded-lg text-sm font-bold border transition-all duration-200 ${
              selected === s
                ? 'bg-yellow-400/20 border-yellow-400 text-yellow-300 shadow-[0_0_12px_#facc1588]'
                : 'bg-white/5 border-white/10 text-white/50 hover:border-white/30 hover:text-white/80'
            }`}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
