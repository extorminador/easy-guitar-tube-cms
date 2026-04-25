import { useState } from 'react';
import { CreditCard, Lock, CheckCircle2 } from 'lucide-react';

export function Checkout() {
  const [selectedPlan, setSelectedPlan] = useState<'annual' | 'monthly'>('annual');

  return (
    <div className="max-w-6xl mx-auto py-12 px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
      {/* Left side: Sales Copy & Plans */}
      <div>
        <h1 className="text-4xl font-serif mb-4">Begin your mastery.</h1>
        <p className="text-gray-400 mb-10 text-lg leading-relaxed max-w-md">
          Unlock the complete EasyGuitarTube curriculum, exclusive artist masterclasses, and our global practice community.
        </p>

        <div className="mb-6 text-xs font-bold tracking-wider text-gray-500 uppercase">
          SELECT MEMBERSHIP
        </div>

        <div className="space-y-4 mb-10">
          {/* Annual Plan */}
          <div 
            onClick={() => setSelectedPlan('annual')}
            className={`border rounded-xl p-5 cursor-pointer transition-all ${
              selectedPlan === 'annual' 
                ? 'border-[#EE2A24] bg-[#2a1111]/20' 
                : 'border-[#2a2a2a] bg-[#1a1a1a] hover:border-gray-500'
            }`}
          >
            <div className="flex justify-between items-start mb-1">
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-serif">Annual Pass</h3>
                <span className="bg-[#EE2A24] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">Save 20%</span>
              </div>
              <div className="text-right">
                <span className="text-xl font-serif">$20</span>
                <span className="text-sm text-gray-400"> /mo</span>
              </div>
            </div>
            <p className="text-sm text-gray-500">Billed $240 yearly</p>
          </div>

          {/* Monthly Plan */}
          <div 
            onClick={() => setSelectedPlan('monthly')}
            className={`border rounded-xl p-5 cursor-pointer transition-all ${
              selectedPlan === 'monthly' 
                ? 'border-[#EE2A24] bg-[#2a1111]/20' 
                : 'border-[#2a2a2a] bg-[#1a1a1a] hover:border-gray-500'
            }`}
          >
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-xl font-serif text-gray-300">Monthly Pass</h3>
              <div className="text-right">
                <span className="text-xl font-serif text-gray-300">$25</span>
                <span className="text-sm text-gray-500"> /mo</span>
              </div>
            </div>
            <p className="text-sm text-gray-500">Flexible, cancel anytime</p>
          </div>
        </div>

        <div className="space-y-4 border-t border-[#2a2a2a] pt-8 mb-10">
          <div className="flex items-center gap-3 text-gray-300">
            <CheckCircle2 className="w-5 h-5 text-[#EE2A24]" />
            <span>Unlimited access to 1,000+ video lessons</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <CheckCircle2 className="w-5 h-5 text-[#EE2A24]" />
            <span>Interactive tabs and backing tracks</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <CheckCircle2 className="w-5 h-5 text-[#EE2A24]" />
            <span>New mastery courses added weekly</span>
          </div>
        </div>

        {/* Feature Image */}
        <div className="rounded-xl overflow-hidden aspect-[2/1] relative opacity-60">
           <img 
              src="https://images.unsplash.com/photo-1550985543-f47f38aeea53?q=80&w=1000&auto=format&fit=crop" 
              alt="Guitar details" 
              className="absolute inset-0 w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
        </div>
      </div>

      {/* Right side: Checkout Form */}
      <div>
        <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8 shadow-2xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-serif">Contact</h2>
            <button className="text-sm text-gray-400 hover:text-white underline">Log in</button>
          </div>

          <div className="mb-8">
            <input 
              type="email" 
              placeholder="Email address" 
              className="w-full bg-transparent border-b border-[#333] pb-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#EE2A24] transition-colors"
            />
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-2xl font-serif">Payment</h2>
              <Lock className="w-4 h-4 text-gray-500" />
              <span className="text-xs text-gray-500">Secure encrypted transaction</span>
            </div>

            <div className="space-y-6">
              <input 
                type="text" 
                placeholder="Name on card" 
                className="w-full bg-transparent border-b border-[#333] pb-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#EE2A24] transition-colors"
              />
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Card number" 
                  className="w-full bg-transparent border-b border-[#333] pb-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#EE2A24] transition-colors pr-8"
                />
                <CreditCard className="w-5 h-5 text-gray-500 absolute right-0 top-0" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Expiration" 
                  className="w-full bg-transparent border-b border-[#333] pb-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#EE2A24] transition-colors"
                />
                <input 
                  type="text" 
                  placeholder="CVC" 
                  className="w-full bg-transparent border-b border-[#333] pb-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#EE2A24] transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-[#2a2a2a] pt-6 mb-8 space-y-3">
            <div className="flex justify-between text-sm text-gray-400">
              <span>Subtotal</span>
              <span>$240.00</span>
            </div>
            {selectedPlan === 'annual' && (
              <div className="flex justify-between text-sm text-[#EE2A24]">
                <span>Annual Discount</span>
                <span>-$60.00</span>
              </div>
            )}
            <div className="flex justify-between items-center pt-2">
              <span className="text-xl font-serif">Total Due Today</span>
              <span className="text-2xl font-serif">${selectedPlan === 'annual' ? '180.00' : '25.00'}</span>
            </div>
          </div>

          <button className="w-full bg-[#EE2A24] hover:bg-[#ff3b3b] text-white py-4 rounded font-bold tracking-wide transition-colors mb-4">
            CONFIRM MEMBERSHIP &rarr;
          </button>
          
          <p className="text-[10px] text-gray-500 text-center leading-relaxed">
            By confirming your membership, you agree to the <a href="#" className="underline hover:text-gray-300">Terms of Service</a> and <a href="#" className="underline hover:text-gray-300">Privacy Policy</a>.
          </p>
        </div>
        <div className="text-center mt-6">
          <span className="text-[10px] text-gray-600 tracking-widest uppercase">Secure Payments via Stripe</span>
        </div>
      </div>
    </div>
  );
}
