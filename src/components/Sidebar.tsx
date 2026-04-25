import { Link, useLocation } from 'react-router-dom';
import { 
  PlayCircle, 
  Activity, 
  BookOpen, 
  Calendar, 
  Target, 
  Settings, 
  HelpCircle 
} from 'lucide-react';

export function Sidebar() {
  const location = useLocation();

  const navItems = [
    { name: 'Current Lesson', icon: PlayCircle, path: '/lesson', active: location.pathname === '/lesson' || location.pathname.startsWith('/masterclass') },
    { name: 'Technique', icon: Activity, path: '/technique', active: location.pathname === '/technique' },
    { name: 'Theory', icon: BookOpen, path: '/theory', active: location.pathname === '/theory' },
    { name: 'Daily Routine', icon: Calendar, path: '/practice', active: location.pathname === '/practice' },
    { name: 'Goals', icon: Target, path: '/goals', active: location.pathname === '/goals' },
  ];

  const bottomItems = [
    { name: 'Settings', icon: Settings, path: '/settings' },
    { name: 'Support', icon: HelpCircle, path: '/support' },
  ];

  return (
    <aside className="w-64 bg-[#1a1a1a] flex flex-col border-r border-[#2a2a2a]">
      {/* User Profile Area */}
      <div className="p-6 flex items-center gap-3 border-b border-[#2a2a2a]">
        <div className="w-10 h-10 rounded-full bg-gray-600 overflow-hidden">
          {/* Avatar placeholder */}
          <img src="https://i.pravatar.cc/150?img=11" alt="User" className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="font-semibold text-sm">Student Dashboard</h3>
          <p className="text-xs text-[#EE2A24] uppercase tracking-wider">Level 4: Blues Lead</p>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 py-6">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-6 py-3 text-sm transition-colors ${
                    item.active 
                      ? 'bg-[#2a1111] text-[#EE2A24] border-l-2 border-[#EE2A24]' 
                      : 'text-gray-400 hover:text-white hover:bg-[#222]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Actions */}
      <div className="p-6 border-t border-[#2a2a2a]">
        <ul className="space-y-3 mb-6">
          {bottomItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link 
          to="/checkout"
          className="block w-full py-2.5 bg-[#EE2A24] hover:bg-[#ff3b3b] text-white text-center text-sm font-semibold rounded transition-colors"
        >
          Upgrade to Pro
        </Link>
      </div>
    </aside>
  );
}
