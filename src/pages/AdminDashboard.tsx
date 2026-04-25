import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthProvider';
import { Plus, Edit2, Trash2, Search, Video, LogOut, Loader2 } from 'lucide-react';
// import { supabase } from '../lib/supabase'; // Uncomment when DB is ready

// Mock Data for UI demonstration
const MOCK_COURSES = [
  { id: '1', title: 'The Architecture of Silence', instructor: 'Paul Davids', level: 'Intermediate', isPremium: true, status: 'Published' },
  { id: '2', title: 'Travis Picking Foundations', instructor: 'Corey Congilio', level: 'Beginner', isPremium: true, status: 'Published' },
  { id: '3', title: 'Neo-Soul Chords', instructor: 'Mateus Asato', level: 'Advanced', isPremium: false, status: 'Draft' },
];

export function AdminDashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [courses, setCourses] = useState(MOCK_COURSES);
  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Protected Route Logic
  useEffect(() => {
    // If not logged in, redirect to login (In production, also check admin role)
    // if (!user) {
    //   navigate('/admin');
    // }
  }, [user, navigate]);

  const handleLogout = async () => {
    await signOut();
    navigate('/admin');
  };

  const handleDelete = (id: string) => {
    if(window.confirm('¿Estás seguro de que deseas eliminar este curso?')) {
      setCourses(courses.filter(c => c.id !== id));
      // In production: await supabase.from('courses').delete().eq('id', id);
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white flex">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-[#1a1a1a] border-r border-[#2a2a2a] flex flex-col">
        <div className="p-6 border-b border-[#2a2a2a] flex items-center gap-3">
          <div className="w-8 h-8 bg-[#EE2A24] rounded flex items-center justify-center font-bold text-xs">
            EGT
          </div>
          <span className="font-serif font-semibold">CMS Portal</span>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-[#EE2A24]/10 text-[#EE2A24] rounded-lg font-medium">
            <Video className="w-5 h-5" />
            Contenido (Cursos)
          </a>
        </nav>
        <div className="p-4 border-t border-[#2a2a2a]">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white transition-colors w-full"
          >
            <LogOut className="w-5 h-5" />
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-20 border-b border-[#2a2a2a] px-8 flex items-center justify-between bg-[#121212] shrink-0">
          <h1 className="text-2xl font-serif">Gestión de Cursos</h1>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-[#EE2A24] hover:bg-[#ff3b3b] text-white px-5 py-2.5 rounded-lg font-semibold transition-colors shadow-lg shadow-[#EE2A24]/20"
          >
            <Plus className="w-5 h-5" />
            Añadir Nuevo
          </button>
        </header>

        {/* List Content */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl overflow-hidden shadow-xl">
            {/* Toolbar */}
            <div className="p-4 border-b border-[#2a2a2a] flex items-center justify-between bg-[#1f1f1f]">
              <div className="relative w-72">
                <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input 
                  type="text" 
                  placeholder="Buscar curso..." 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-[#121212] border border-[#333] rounded-lg py-2 px-4 pl-10 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#EE2A24] transition-colors"
                />
              </div>
            </div>

            {/* Table */}
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#2a2a2a] text-xs uppercase tracking-wider text-gray-500 bg-[#121212]">
                  <th className="px-6 py-4 font-bold">Título del Curso</th>
                  <th className="px-6 py-4 font-bold">Instructor</th>
                  <th className="px-6 py-4 font-bold">Nivel</th>
                  <th className="px-6 py-4 font-bold">Estado</th>
                  <th className="px-6 py-4 font-bold text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2a2a2a]">
                {courses.filter(c => c.title.toLowerCase().includes(search.toLowerCase())).map((course) => (
                  <tr key={course.id} className="hover:bg-[#1a1a1a]/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="font-semibold">{course.title}</div>
                      <div className="text-xs text-gray-500 mt-1">{course.isPremium ? 'Premium' : 'Gratis'}</div>
                    </td>
                    <td className="px-6 py-4 text-gray-300">{course.instructor}</td>
                    <td className="px-6 py-4 text-gray-300">{course.level}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-2.5 py-1 text-xs font-bold rounded-full ${
                        course.status === 'Published' 
                          ? 'bg-green-500/10 text-green-500 border border-green-500/20' 
                          : 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20'
                      }`}>
                        {course.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-gray-400 hover:text-white bg-[#222] hover:bg-[#333] rounded transition-colors">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete(course.id)}
                          className="p-2 text-gray-400 hover:text-[#EE2A24] bg-[#222] hover:bg-[#4a1111] rounded transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {courses.length === 0 && (
              <div className="p-12 text-center text-gray-500">
                No se encontraron cursos.
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Simple Create/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-[#2a2a2a] flex justify-between items-center">
              <h3 className="text-xl font-serif">Añadir Nuevo Curso</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-white">✕</button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Título</label>
                  <input type="text" className="w-full bg-[#121212] border border-[#333] rounded py-2 px-3 text-white" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Instructor</label>
                  <input type="text" className="w-full bg-[#121212] border border-[#333] rounded py-2 px-3 text-white" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Nivel</label>
                  <select className="w-full bg-[#121212] border border-[#333] rounded py-2 px-3 text-white">
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Premium</label>
                  <select className="w-full bg-[#121212] border border-[#333] rounded py-2 px-3 text-white">
                    <option value="true">Sí (Requiere suscripción)</option>
                    <option value="false">No (Gratis)</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-[#2a2a2a] bg-[#121212] flex justify-end gap-3">
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-sm font-semibold text-gray-400 hover:text-white">Cancelar</button>
              <button onClick={() => setIsModalOpen(false)} className="px-6 py-2 bg-[#EE2A24] hover:bg-[#ff3b3b] text-white text-sm font-semibold rounded">Guardar Curso</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
