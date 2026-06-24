const PATTERNS = [
  { name: 'Solid', preview: 'bg-purple-500' },
  { name: 'Stripes', preview: 'bg-gradient-to-r from-purple-500 via-black to-purple-500' },
  { name: 'Camo', preview: 'bg-gradient-to-br from-green-800 via-yellow-900 to-green-700' },
  { name: 'Pixel Grid', preview: 'bg-[repeating-linear-gradient(0deg,_transparent,_transparent_6px,_rgba(255,255,255,0.15)_6px,_rgba(255,255,255,0.15)_7px),_repeating-linear-gradient(90deg,_transparent,_transparent_6px,_rgba(255,255,255,0.15)_6px,_rgba(255,255,255,0.15)_7px)] bg-purple-700' },
  { name: 'Tie-Dye', preview: 'bg-gradient-radial bg-[radial-gradient(ellipse_at_center,_#ff79c6,_#8be9fd,_#50fa7b)]' },
];

interface Props {
  selected: string;
  onChange: (pattern: string) => void;
}

export default function PatternSelector({ selected, onChange }: Props) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Pattern</h3>
      <div className="flex flex-wrap gap-2">
        {PATTERNS.map(p => (
          <button
            key={p.name}
            onClick={() => onChange(p.name)}
            className={`flex flex-col items-center gap-1.5 p-2 rounded-xl border transition-all duration-200 ${
              selected === p.name
                ? 'border-purple-400 bg-purple-500/20 scale-105'
                : 'border-white/10 bg-white/5 hover:border-white/30'
            }`}
          >
            <div className={`w-10 h-10 rounded-lg ${p.preview}`} />
            <span className={`text-[10px] font-semibold ${selected === p.name ? 'text-purple-300' : 'text-white/50'}`}>
              {p.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
