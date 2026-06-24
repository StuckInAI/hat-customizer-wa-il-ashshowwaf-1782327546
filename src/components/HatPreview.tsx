import { HatConfig } from '@/types/hat';

interface Props {
  config: HatConfig;
}

function getPatternEl(pattern: string, color: string) {
  switch (pattern) {
    case 'Stripes':
      return (
        <defs>
          <pattern id="stripes" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="rotate(35)">
            <rect width="10" height="20" fill={color} />
            <rect x="10" width="10" height="20" fill="rgba(0,0,0,0.35)" />
          </pattern>
        </defs>
      );
    case 'Camo':
      return (
        <defs>
          <pattern id="camo" patternUnits="userSpaceOnUse" width="40" height="40">
            <rect width="40" height="40" fill={color} />
            <ellipse cx="10" cy="10" rx="8" ry="6" fill="rgba(0,0,0,0.25)" />
            <ellipse cx="30" cy="25" rx="9" ry="7" fill="rgba(255,255,255,0.12)" />
            <ellipse cx="20" cy="35" rx="7" ry="5" fill="rgba(0,0,0,0.2)" />
          </pattern>
        </defs>
      );
    case 'Pixel Grid':
      return (
        <defs>
          <pattern id="pixel" patternUnits="userSpaceOnUse" width="16" height="16">
            <rect width="16" height="16" fill={color} />
            <rect width="8" height="8" fill="rgba(255,255,255,0.15)" />
            <rect x="8" y="8" width="8" height="8" fill="rgba(255,255,255,0.15)" />
          </pattern>
        </defs>
      );
    case 'Tie-Dye':
      return (
        <defs>
          <radialGradient id="tiedye" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={color} />
            <stop offset="30%" stopColor="rgba(255,100,200,0.9)" />
            <stop offset="60%" stopColor="rgba(100,200,255,0.85)" />
            <stop offset="100%" stopColor={color} />
          </radialGradient>
        </defs>
      );
    default:
      return null;
  }
}

function getFill(pattern: string) {
  switch (pattern) {
    case 'Stripes': return 'url(#stripes)';
    case 'Camo': return 'url(#camo)';
    case 'Pixel Grid': return 'url(#pixel)';
    case 'Tie-Dye': return 'url(#tiedye)';
    default: return undefined;
  }
}

export default function HatPreview({ config }: Props) {
  const { color, pattern, monogram } = config;
  const patternFill = getFill(pattern);
  const mainFill = patternFill || color;

  return (
    <div className="flex flex-col items-center justify-center gap-6 w-full h-full py-8">
      {/* Glowing backdrop */}
      <div className="relative flex items-center justify-center">
        <div
          className="absolute rounded-full blur-3xl opacity-30 w-72 h-72"
          style={{ background: color }}
        />
        <svg
          viewBox="0 0 320 240"
          width="340"
          height="255"
          xmlns="http://www.w3.org/2000/svg"
          className="relative drop-shadow-2xl"
          style={{ filter: `drop-shadow(0 0 24px ${color}88)` }}
        >
          {getPatternEl(pattern, color)}

          {/* Brim */}
          <ellipse cx="160" cy="190" rx="145" ry="22" fill="rgba(0,0,0,0.55)" />
          <ellipse cx="160" cy="186" rx="140" ry="18" fill={mainFill} />
          <ellipse cx="160" cy="186" rx="140" ry="18" fill="rgba(0,0,0,0.18)" />

          {/* Crown */}
          <path
            d="M50,186 Q55,90 160,72 Q265,90 270,186 Z"
            fill={mainFill}
          />
          {/* Crown shadow overlay */}
          <path
            d="M50,186 Q55,90 160,72 Q265,90 270,186 Z"
            fill="rgba(0,0,0,0.08)"
          />

          {/* Band */}
          <path
            d="M60,170 Q160,158 260,170 L262,182 Q160,170 58,182 Z"
            fill="rgba(0,0,0,0.35)"
          />

          {/* Highlight sheen */}
          <path
            d="M110,82 Q160,70 200,88 Q180,95 160,92 Q140,95 110,82Z"
            fill="rgba(255,255,255,0.22)"
          />

          {/* Button on top */}
          <circle cx="160" cy="75" r="8" fill="rgba(0,0,0,0.4)" />
          <circle cx="160" cy="75" r="5" fill="rgba(255,255,255,0.25)" />

          {/* Monogram text */}
          {monogram && (
            <text
              x="160"
              y="145"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="38"
              fontWeight="bold"
              fontFamily="'Inter', system-ui, sans-serif"
              fill="rgba(255,255,255,0.9)"
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}
              letterSpacing="3"
            >
              {monogram}
            </text>
          )}

          {/* Brim highlight */}
          <ellipse cx="140" cy="183" rx="60" ry="6" fill="rgba(255,255,255,0.08)" />
        </svg>
      </div>

      {/* Hat info badge */}
      <div className="flex gap-2 flex-wrap justify-center">
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/10 text-white/70">
          {config.material}
        </span>
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/10 text-white/70">
          Size {config.size}
        </span>
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/10 text-white/70">
          {config.pattern}
        </span>
        <span
          className="px-3 py-1 rounded-full text-xs font-semibold border"
          style={{ background: config.color + '33', borderColor: config.color + '88', color: config.color }}
        >
          {config.colorName}
        </span>
      </div>
    </div>
  );
}
