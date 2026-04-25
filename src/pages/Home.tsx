import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="bg-[#121212] min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center border-b border-[#2a2a2a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1525201548942-d8732f6617a0?q=80&w=2000&auto=format&fit=crop" 
            alt="Acoustic Guitar" 
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 tracking-tight">The Art of the Instrument.</h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 font-light max-w-2xl mx-auto">
            Master your craft with premium cinematic masterclasses, interactive practice tools, and a curriculum designed for the modern acoustic and electric player.
          </p>
          <Link 
            to="/checkout" 
            className="inline-block border border-white hover:bg-white hover:text-black transition-colors px-8 py-3 text-sm font-bold tracking-widest uppercase rounded"
          >
            Explore Mastery
          </Link>
        </div>
      </section>

      {/* Featured Course */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-[#2a2a2a]">
        <div className="text-xs text-[#EE2A24] font-bold tracking-wider mb-2 uppercase">NEW COURSE</div>
        <h2 className="text-4xl font-serif mb-12">Invisible Bridge, Tangible Mastery.</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 relative rounded-xl overflow-hidden aspect-video bg-[#1a1a1a]">
            <img 
              src="https://images.unsplash.com/photo-1511335513650-80e9ebf5eff2?q=80&w=1000&auto=format&fit=crop" 
              alt="Course preview" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-6 left-6 max-w-md">
               <h3 className="text-2xl font-serif mb-2">The Architecture of Silence</h3>
               <p className="text-sm text-gray-300">Mastering the spaces between notes. Paul demonstrates how dampening techniques create rhythmic vitality in acoustic blues.</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="bg-[#1a1a1a] rounded-xl p-8 border border-[#2a2a2a] flex-1 flex flex-col justify-center">
               <div className="w-10 h-10 border border-[#EE2A24] rounded-full flex items-center justify-center mb-4 text-[#EE2A24]">
                 <span className="font-serif italic text-lg">i</span>
               </div>
               <h4 className="text-lg font-serif mb-2">Deep Learning</h4>
               <p className="text-sm text-gray-400">Cinematic 4k video, interactive transcriptions, and AI synthesis for precision learning.</p>
            </div>
            <div className="bg-[#1a1a1a] rounded-xl p-8 border border-[#2a2a2a] flex-1 flex flex-col justify-center">
               <div className="flex items-end gap-1 mb-4 text-[#EE2A24]">
                 <div className="w-1.5 h-4 bg-[#EE2A24] rounded-full" />
                 <div className="w-1.5 h-6 bg-[#EE2A24] rounded-full" />
                 <div className="w-1.5 h-3 bg-[#EE2A24] rounded-full" />
                 <div className="w-1.5 h-8 bg-[#EE2A24] rounded-full" />
                 <div className="w-1.5 h-5 bg-[#EE2A24] rounded-full" />
               </div>
               <h4 className="text-lg font-serif mb-2">Tone Crafting</h4>
               <p className="text-sm text-gray-400">Learn to dial in your sound with detailed gear breakdowns and mixing philosophy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-[#2a2a2a]">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif mb-4">Our Masters.</h2>
            <p className="text-gray-400 max-w-2xl text-lg">Learn from world-class musicians, session players, and tone experts who have mastered their craft.</p>
          </div>
          <Link to="/lessons" className="text-[#EE2A24] text-sm font-bold tracking-wider hover:underline hidden md:block">VIEW ALL MASTERS &rarr;</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
             { name: 'Paul Davids', role: 'Acoustic & Theory', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop' },
             { name: 'Sophie Lloyd', role: 'Shred & Lead', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop' },
             { name: 'Mateus Asato', role: 'Neo-Soul & R&B', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop' }
          ].map((master, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4 bg-[#1a1a1a]">
                <img src={master.img} alt={master.name} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl font-serif">{master.name}</h3>
                  <p className="text-[#EE2A24] text-xs font-bold tracking-wider uppercase mt-1">{master.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-serif mb-4">Invest in your craft.</h2>
        <p className="text-gray-400 mb-12 text-lg">Choose the plan that fits your journey to mastery.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-10 rounded-2xl">
            <h3 className="text-xl font-serif mb-2">Monthly Pass</h3>
            <p className="text-gray-400 text-sm mb-6">Flexible learning, cancel anytime.</p>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-serif">$24</span>
              <span className="text-gray-500">/mo</span>
            </div>
            <ul className="space-y-3 mb-8">
              {['Unlimited library access', 'Interactive practice tools', 'New content every week'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 bg-[#EE2A24] rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link to="/checkout" className="block w-full py-3 border border-[#333] hover:border-white text-center rounded transition-colors text-sm font-bold">START MONTHLY</Link>
          </div>

          <div className="bg-[#1a1a1a] border border-[#EE2A24] p-10 rounded-2xl relative shadow-[0_0_30px_rgba(238,42,36,0.1)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#EE2A24] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Best Value - Save 20%
            </div>
            <h3 className="text-xl font-serif mb-2">Annual Pass</h3>
            <p className="text-gray-400 text-sm mb-6">Commit to mastery for the year.</p>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-serif text-[#EE2A24]">$240</span>
              <span className="text-gray-500">/yr</span>
            </div>
            <ul className="space-y-3 mb-8">
              {['Everything in Monthly', 'Exclusive artist Q&As', 'Downloadable resources (PDFs)', 'Free entry to live bootcamps'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 bg-[#EE2A24] rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link to="/checkout" className="block w-full py-3 bg-[#EE2A24] hover:bg-[#ff3b3b] text-white text-center rounded transition-colors text-sm font-bold">START ANNUAL</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
