interface ColorOption {
  name: string;
  hex: string;
}

const COLORS: ColorOption[] = [
  { name: 'Gold', hex: '#FFD700' },
  { name: 'Electric Blue', hex: '#0FF' },
  { name: 'Neon Green', hex: '#39FF14' },
  { name: 'Purple', hex: '#BF5FFF' },
  { name: 'Hot Pink', hex: '#FF2D78' },
  { name: 'Orange', hex: '#FF6B00' },
  { name: 'White', hex: '#F0F0F0' },
  { name: 'Red', hex: '#FF2222' },
];

interface Props {
  selected: string;
  onChange: (hex: string, name: string) => void;
}

export default function ColorPicker({ selected, onChange }: Props) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Color</h3>
      <div className="flex flex-wrap gap-3">
        {COLORS.map(c => (
          <button
            key={c.hex}
            title={c.name}
            onClick={() => onChange(c.hex, c.name)}
            className="w-9 h-9 rounded-full border-2 transition-all duration-200 hover:scale-110 focus:outline-none"
            style={{
              background: c.hex,
              borderColor: selected === c.hex ? '#fff' : 'transparent',
              boxShadow: selected === c.hex ? `0 0 0 2px ${c.hex}, 0 0 16px ${c.hex}88` : 'none',
            }}
          />
        ))}
      </div>
    </div>
  );
}
