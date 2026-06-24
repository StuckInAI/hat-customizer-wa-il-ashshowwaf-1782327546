import { useState } from 'react';
import { HatConfig } from '@/types/hat';

interface Props {
  config: HatConfig;
}

export default function ActionBar({ config }: Props) {
  const [minted, setMinted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleMint() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setMinted(true);
      setTimeout(() => setMinted(false), 4000);
    }, 1200);
  }

  const summary = [config.colorName, config.pattern, config.material, config.size, config.monogram]
    .filter(Boolean)
    .join(' · ');

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#0a0a0f]/90 backdrop-blur-xl px-6 py-4">
      {minted && (
        <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-2xl animate-bounce whitespace-nowrap">
          🚀 Your NFT Hat has been minted!
        </div>
      )}
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-4 flex-wrap">
        <div className="flex flex-col gap-0.5">
          <span className="text-xs text-white/30 uppercase tracking-widest font-semibold">Your Design</span>
          <span className="text-sm text-white/70 font-medium">{summary}</span>
        </div>
        <button
          onClick={handleMint}
          disabled={loading}
          className="relative px-8 py-3 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 transition-all duration-200 shadow-[0_0_24px_#a855f766] hover:shadow-[0_0_36px_#a855f799] disabled:opacity-70 disabled:cursor-not-allowed active:scale-95"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
              Minting…
            </span>
          ) : (
            'Mint My Hat 🎩'
          )}
        </button>
      </div>
    </div>
  );
}
