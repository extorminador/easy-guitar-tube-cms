import { Link, useLocation } from 'react-router-dom';
import { Bell, User, Search, Menu } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const location = useLocation();
  const [searchFocused, setSearchFocused] = useState(false);

  const navLinks = [
    { name: 'Lessons', path: '/lessons' },
    { name: 'Mastery', path: '/mastery' },
    { name: 'Practice', path: '/practice' },
    { name: 'Library', path: '/library' },
  ];

  const isCheckout = location.pathname === '/checkout';

  if (isCheckout) {
    return (
      <header className="h-16 border-b border-[#2a2a2a] bg-[#121212] flex items-center justify-between px-6 lg:px-12">
        <Link to="/lessons" className="text-gray-400 hover:text-white text-sm flex items-center gap-2 transition-colors">
          <span aria-hidden="true">&larr;</span> BACK TO LESSONS
        </Link>
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center font-bold text-[#EE2A24] text-xs">
            EGT
          </div>
          <span className="text-[#EE2A24] font-bold tracking-wide uppercase">EasyGuitarTube</span>
        </Link>
        <div className="w-32" />
      </header>
    );
  }

  return (
    <header className="h-16 border-b border-[#2a2a2a] bg-[#121212] flex items-center justify-between px-6 w-full">
      <Link to="/" className="flex items-center gap-2 min-w-max">
        <div className="w-8 h-8 bg-white rounded flex items-center justify-center font-bold text-[#EE2A24] text-xs">
          EGT
        </div>
        <span className="text-[#EE2A24] font-bold tracking-wide uppercase hidden md:block">
          EasyGuitarTube
        </span>
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => {
          const active = location.pathname.startsWith(link.path);
          return (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors relative py-5 ${
                active ? 'text-[#EE2A24]' : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.name}
              {active && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#EE2A24]" />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center gap-4">
        <div className={`hidden lg:flex items-center bg-[#1a1a1a] rounded-full px-4 py-1.5 border transition-colors ${
          searchFocused ? 'border-gray-500' : 'border-[#2a2a2a]'
        }`}>
          <Search className="w-4 h-4 text-gray-500 mr-2" />
          <input 
            type="text" 
            placeholder="Search lessons..." 
            className="bg-transparent border-none outline-none text-sm text-white w-48 placeholder:text-gray-600"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
        </div>
        <button className="text-gray-400 hover:text-white transition-colors">
          <Bell className="w-5 h-5" />
        </button>
        <button className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all">
          <User className="w-4 h-4" />
        </button>
        <button className="md:hidden text-gray-400 hover:text-white">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
