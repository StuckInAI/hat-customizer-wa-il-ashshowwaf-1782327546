import { HatConfig } from '@/types/hat';
import ColorPicker from './ColorPicker';
import PatternSelector from './PatternSelector';
import MaterialSelector from './MaterialSelector';
import SizeSelector from './SizeSelector';
import MonogramInput from './MonogramInput';

interface Props {
  config: HatConfig;
  onColor: (hex: string, name: string) => void;
  onPattern: (p: string) => void;
  onMaterial: (m: string) => void;
  onSize: (s: string) => void;
  onMonogram: (m: string) => void;
}

export default function CustomizerSidebar({
  config,
  onColor,
  onPattern,
  onMaterial,
  onSize,
  onMonogram,
}: Props) {
  return (
    <aside className="flex flex-col gap-6 overflow-y-auto pr-1">
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 flex flex-col gap-6">
        <ColorPicker selected={config.color} onChange={onColor} />
        <div className="border-t border-white/10" />
        <PatternSelector selected={config.pattern} onChange={onPattern} />
        <div className="border-t border-white/10" />
        <MaterialSelector selected={config.material} onChange={onMaterial} />
        <div className="border-t border-white/10" />
        <SizeSelector selected={config.size} onChange={onSize} />
        <div className="border-t border-white/10" />
        <MonogramInput value={config.monogram} onChange={onMonogram} />
      </div>
    </aside>
  );
}
