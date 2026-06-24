import { useState } from 'react';
import { HatConfig } from '@/types/hat';

const DEFAULT_CONFIG: HatConfig = {
  color: '#FFD700',
  colorName: 'Gold',
  size: 'M',
  monogram: 'NFT',
  pattern: 'Solid',
  material: 'Cotton',
};

export function useHatConfig() {
  const [config, setConfig] = useState<HatConfig>(DEFAULT_CONFIG);

  function setColor(color: string, colorName: string) {
    setConfig(prev => ({ ...prev, color, colorName }));
  }

  function setSize(size: string) {
    setConfig(prev => ({ ...prev, size }));
  }

  function setMonogram(monogram: string) {
    setConfig(prev => ({ ...prev, monogram: monogram.slice(0, 3).toUpperCase() }));
  }

  function setPattern(pattern: string) {
    setConfig(prev => ({ ...prev, pattern }));
  }

  function setMaterial(material: string) {
    setConfig(prev => ({ ...prev, material }));
  }

  return { config, setColor, setSize, setMonogram, setPattern, setMaterial };
}
