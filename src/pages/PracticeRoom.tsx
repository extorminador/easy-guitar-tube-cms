import { Play, Clock, BarChart2, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PracticeRoom() {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-serif mb-2">The Practice Room</h1>
        <p className="text-gray-400">
          Your designated space for focused repetition and technique refinement. The metronome is ticking, the environment is set. Track your mastery and enter your next session.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Main Featured Lesson */}
        <div className="lg:col-span-2 relative rounded-xl overflow-hidden bg-[#1a1a1a] aspect-video group cursor-pointer border border-[#2a2a2a] hover:border-gray-500 transition-colors">
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
          {/* Placeholder for the 3D Avatar Image from design */}
          <img 
            src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=1000&auto=format&fit=crop" 
            alt="Travis Picking Foundations" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 z-20 flex justify-between items-end">
            <div>
              <span className="inline-block px-2 py-1 bg-[#EE2A24] text-white text-xs font-bold rounded mb-3">UP NEXT</span>
              <h2 className="text-3xl font-serif mb-2 text-white">Fingerpicking: Travis<br/>Picking Foundations</h2>
              <div className="text-sm text-gray-300">
                Technique &bull; Module 4 &bull; 15 mins
              </div>
            </div>
            <button className="w-14 h-14 bg-[#EE2A24] rounded flex items-center justify-center hover:bg-[#ff3b3b] hover:scale-105 transition-all shadow-lg">
              <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
            </button>
          </div>
        </div>

        {/* Dedication Card */}
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-serif">Dedication</h3>
              <Clock className="w-5 h-5 text-[#EE2A24]" />
            </div>
            <p className="text-sm text-gray-400 mb-6">Time on instrument this week</p>
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-light text-[#EE2A24]">4</span>
              <span className="text-xl text-[#EE2A24]">h</span>
              <span className="text-5xl font-light text-[#EE2A24] ml-2">20</span>
              <span className="text-xl text-[#EE2A24]">m</span>
            </div>
          </div>
          
          <div className="mt-8">
            <div className="h-1 w-full bg-[#2a2a2a] rounded-full overflow-hidden mb-2">
              <div className="h-full bg-[#EE2A24] w-[65%]" />
            </div>
            <div className="flex justify-between text-xs text-gray-400 font-semibold tracking-wider">
              <span>65% OF GOAL</span>
              <span>6h Goal</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Skill Mastery */}
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a]">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-serif">Skill Mastery</h3>
            <BarChart2 className="w-5 h-5 text-[#EE2A24]" />
          </div>

          <div className="space-y-6">
            <div className="border-b border-[#2a2a2a] pb-4">
              <div className="flex justify-between items-end mb-1">
                <div>
                  <h4 className="text-sm font-bold tracking-wider mb-1">TECHNIQUE</h4>
                  <p className="text-xs text-gray-500">Scales, picking, articulation</p>
                </div>
                <span className="text-[#EE2A24] font-medium">Level 4</span>
              </div>
            </div>
            
            <div className="border-b border-[#2a2a2a] pb-4">
              <div className="flex justify-between items-end mb-1">
                <div>
                  <h4 className="text-sm font-bold tracking-wider mb-1">THEORY & HARMONY</h4>
                  <p className="text-xs text-gray-500">Fretboard logic, chord construction</p>
                </div>
                <span className="text-[#EE2A24] font-medium">Level 3</span>
              </div>
            </div>

            <div className="pb-2">
              <div className="flex justify-between items-end mb-1">
                <div>
                  <h4 className="text-sm font-bold tracking-wider mb-1">REPERTOIRE</h4>
                  <p className="text-xs text-gray-500">Song mastery and performance</p>
                </div>
                <span className="text-[#EE2A24] font-medium">Level 5</span>
              </div>
            </div>
          </div>
        </div>

        {/* Active Pursuits */}
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a]">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-serif">Active Pursuits</h3>
            <Link to="/practice" className="text-xs font-bold text-[#EE2A24] hover:underline uppercase tracking-wider">View All</Link>
          </div>

          <div className="space-y-4">
            {/* Pursuit Item 1 */}
            <div className="flex items-center gap-4 bg-[#222] p-4 rounded-lg cursor-pointer hover:bg-[#2a2a2a] transition-colors border border-transparent hover:border-gray-600">
              <div className="w-10 h-10 bg-[#121212] rounded flex items-center justify-center">
                <Play className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold mb-1">Blackbird - Paul McCartney</h4>
                <p className="text-xs text-gray-500">Repertoire &bull; Fingerstyle Focus</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-xs text-gray-500 font-bold tracking-wider">PROGRESS</div>
                <div className="w-12 h-1 bg-[#121212] rounded-full overflow-hidden">
                  <div className="h-full bg-[#EE2A24] w-[40%]" />
                </div>
                <span className="text-gray-400">&rsaquo;</span>
              </div>
            </div>

            {/* Pursuit Item 2 */}
            <Link to="/masterclass/architecture-of-silence" className="flex items-center gap-4 bg-[#222] p-4 rounded-lg cursor-pointer hover:bg-[#2a2a2a] transition-colors border border-transparent hover:border-gray-600 block">
              <div className="w-10 h-10 bg-[#121212] rounded flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold mb-1">The Architecture of Silence</h4>
                <p className="text-xs text-gray-500">Masterclass &bull; Rhythm</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-xs text-gray-500 font-bold tracking-wider">PROGRESS</div>
                <div className="w-12 h-1 bg-[#121212] rounded-full overflow-hidden">
                  <div className="h-full bg-[#EE2A24] w-[15%]" />
                </div>
                <span className="text-gray-400">&rsaquo;</span>
              </div>
            </Link>

            {/* Completed Pursuit */}
            <div className="flex items-center gap-4 bg-[#1a1a1a] p-4 rounded-lg border border-[#2a2a2a] opacity-75">
              <div className="w-10 h-10 bg-[#1a1111] border border-[#3a1111] rounded flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-[#EE2A24]" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold mb-1 text-gray-300">Major Scale Sequences</h4>
                <p className="text-xs text-gray-500">Technique &bull; Completed yesterday</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Ensure BookOpen is imported for the Pursuit item 2
import { BookOpen } from 'lucide-react';
