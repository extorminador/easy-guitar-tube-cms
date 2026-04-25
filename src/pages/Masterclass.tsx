import { Play, Settings2, Sparkles } from 'lucide-react';

export function Masterclass() {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <div className="mb-6">
        <div className="text-[#EE2A24] text-xs font-bold tracking-wider mb-2 uppercase">
          Masterclass &bull; Module 03
        </div>
        <h1 className="text-3xl font-serif mb-3">The Architecture of Silence</h1>
        <p className="text-gray-400 max-w-2xl">
          Mastering the spaces between notes. Paul demonstrates how dampening techniques create rhythmic vitality in acoustic blues.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content: Video & Tablature */}
        <div className="lg:col-span-2 space-y-8">
          {/* Video Player Placeholder */}
          <div className="relative rounded-xl overflow-hidden bg-black aspect-video border border-[#2a2a2a] flex items-center justify-center group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1525201548942-d8732f6617a0?q=80&w=1000&auto=format&fit=crop" 
              alt="Video Thumbnail" 
              className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity"
            />
            <button className="w-16 h-16 bg-[#121212]/80 backdrop-blur border border-gray-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform z-10">
              <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
            </button>
          </div>

          {/* Live Transcription */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-serif">Live Transcription</h3>
              <button className="flex items-center gap-2 text-[#EE2A24] text-xs font-bold tracking-wider hover:text-white transition-colors">
                <Settings2 className="w-4 h-4" />
                SETTINGS
              </button>
            </div>
            
            <div className="bg-[#1a1a1a] rounded-xl p-8 border border-[#2a2a2a] overflow-x-auto">
              {/* Tablature Visualization Mock */}
              <div className="min-w-[500px] relative h-32 flex flex-col justify-between py-2 border-l border-r border-[#333]">
                {/* 6 strings */}
                {[0,1,2,3,4,5].map((line) => (
                  <div key={line} className="w-full h-[1px] bg-[#333] relative">
                    {/* Notes on string 1 */}
                    {line === 1 && <span className="absolute left-[15%] top-1/2 -translate-y-1/2 bg-[#1a1a1a] px-1 text-sm font-medium text-gray-300">0</span>}
                    {/* Notes on string 2 */}
                    {line === 2 && <span className="absolute left-[30%] top-1/2 -translate-y-1/2 bg-[#EE2A24] px-1.5 py-0.5 rounded text-white text-xs font-bold shadow-[0_0_10px_rgba(238,42,36,0.5)] z-10">3</span>}
                    {/* Notes on string 3 */}
                    {line === 3 && <span className="absolute left-[45%] top-1/2 -translate-y-1/2 bg-[#1a1a1a] px-1 text-sm font-medium text-gray-300">2</span>}
                    {/* Notes on string 5 */}
                    {line === 5 && (
                      <>
                        <span className="absolute left-[15%] top-1/2 -translate-y-1/2 bg-[#1a1a1a] px-1 text-sm font-medium text-gray-300">0</span>
                        <span className="absolute left-[65%] top-1/2 -translate-y-1/2 bg-[#1a1a1a] px-1 text-sm font-medium text-gray-300">0</span>
                      </>
                    )}
                  </div>
                ))}
                {/* Playhead line */}
                <div className="absolute top-0 bottom-0 left-[28%] w-[2px] bg-[#EE2A24] shadow-[0_0_8px_rgba(238,42,36,0.8)] z-0" />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Data */}
        <div className="space-y-6">
          {/* AI Synthesis */}
          <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#EE2A24]/30 shadow-[0_0_20px_rgba(238,42,36,0.05)]">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-[#EE2A24]" />
              <h4 className="text-xs font-bold tracking-wider text-gray-200">AI SYNTHESIS</h4>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              In this section, focus on the right-hand palm positioning. The 'chuck' sound isn't purely percussive; it requires letting the bass note ring slightly before dampening. Watch the wrist angle at 04:15 closely.
            </p>
          </div>

          {/* Chapters */}
          <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a]">
            <h4 className="text-xs font-bold tracking-wider text-gray-200 mb-6">CHAPTERS</h4>
            <div className="space-y-1 border-l border-[#333] ml-2">
              <div className="flex items-center pl-4 py-2 cursor-pointer text-gray-400 hover:text-white">
                <span className="text-xs font-mono mr-4 w-10">00:00</span>
                <span className="text-sm">Introduction to the groove</span>
              </div>
              <div className="flex items-center pl-4 py-2 cursor-pointer bg-[#2a1111]/50 border-l-2 border-[#EE2A24] -ml-[1px] text-white">
                <span className="text-xs font-mono mr-4 w-10 text-[#EE2A24]">04:12</span>
                <span className="text-sm font-medium">The Thumb Slap Technique</span>
              </div>
              <div className="flex items-center pl-4 py-2 cursor-pointer text-gray-400 hover:text-white">
                <span className="text-xs font-mono mr-4 w-10">08:45</span>
                <span className="text-sm">Integrating the melody</span>
              </div>
            </div>
          </div>

          {/* Voicings Used */}
          <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a]">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-xs font-bold tracking-wider text-gray-200">VOICINGS USED</h4>
              <button className="text-xs text-gray-500 hover:text-white">View All</button>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {/* Chord 1 */}
              <div className="bg-[#121212] border border-[#2a2a2a] rounded p-3 flex flex-col items-center justify-center">
                <span className="text-xs font-bold mb-2">E7#9</span>
                {/* Mock Chord Diagram */}
                <div className="w-8 h-10 border-t-2 border-white flex flex-col justify-between">
                  <div className="w-full h-[1px] bg-gray-600" />
                  <div className="w-full h-[1px] bg-gray-600 relative">
                    <div className="absolute left-1/2 -top-1 w-2 h-2 bg-[#EE2A24] rounded-full" />
                  </div>
                  <div className="w-full h-[1px] bg-gray-600" />
                </div>
              </div>
              {/* Chord 2 */}
              <div className="bg-[#121212] border border-[#2a2a2a] rounded p-3 flex flex-col items-center justify-center">
                <span className="text-xs font-bold mb-2">A13</span>
                <div className="w-8 h-10 border-t border-gray-600 flex flex-col justify-between">
                  <div className="w-full h-[1px] bg-gray-600 relative">
                     <div className="absolute left-[20%] -top-1 w-2 h-2 bg-[#EE2A24] rounded-full" />
                     <div className="absolute right-[20%] -top-1 w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div className="w-full h-[1px] bg-gray-600" />
                  <div className="w-full h-[1px] bg-gray-600" />
                </div>
              </div>
              {/* Chord 3 */}
              <div className="bg-[#121212] border border-[#2a2a2a] rounded p-3 flex flex-col items-center justify-center opacity-50">
                <span className="text-xs font-bold mb-2">B7</span>
                <div className="w-8 h-10 border-t border-gray-600 flex flex-col justify-between">
                  <div className="w-full h-[1px] bg-gray-600" />
                  <div className="w-full h-[1px] bg-gray-600 relative">
                     <div className="absolute right-[10%] -top-1 w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div className="w-full h-[1px] bg-gray-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
