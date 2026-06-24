import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useHatConfig } from '@/hooks/useHatConfig';
import HatPreview from '@/components/HatPreview';
import CustomizerSidebar from '@/components/CustomizerSidebar';
import ActionBar from '@/components/ActionBar';

function HomePage() {
  const { config, setColor, setPattern, setMaterial, setSize, setMonogram } = useHatConfig();

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex flex-col pb-24">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-xl sticky top-0 z-40 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🎩</span>
            <div>
              <h1 className="text-xl font-black bg-gradient-to-r from-purple-400 via-cyan-400 to-yellow-400 bg-clip-text text-transparent leading-none">
                NFT Hat Studio
              </h1>
              <p className="text-[11px] text-white/30 font-medium tracking-wider mt-0.5">
                Design your one-of-a-kind digital hat
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-white/40 font-mono">LIVE PREVIEW</span>
          </div>
        </div>
      </header>

      {/* Main layout */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-8 grid grid-cols-1 md:grid-cols-[1fr_360px] gap-8 items-start">
        {/* Hat Preview */}
        <div className="sticky top-24 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent min-h-[420px] flex items-center justify-center">
          <HatPreview config={config} />
        </div>

        {/* Sidebar */}
        <CustomizerSidebar
          config={config}
          onColor={setColor}
          onPattern={setPattern}
          onMaterial={setMaterial}
          onSize={setSize}
          onMonogram={setMonogram}
        />
      </main>

      {/* Fixed action bar */}
      <ActionBar config={config} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
