import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="flex items-center justify-center min-h-screen bg-[#0a0a0f] text-white">
            <p className="text-2xl text-purple-400">NFT Hat Studio — Loading…</p>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}
