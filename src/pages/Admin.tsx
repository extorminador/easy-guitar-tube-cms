import React, { useState, useEffect } from 'react';
import { useAuth } from '../components/AuthProvider';
import { db, handleFirestoreError, OperationType, auth } from '../firebase';
import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot, query, orderBy, serverTimestamp } from 'firebase/firestore';
import { Project, ProjectType } from '../types';
import { Plus, Pencil, Trash2, X, Save, BarChart3, Video, FileText } from 'lucide-react';
import { cn } from '../lib/utils';

export const Admin = () => {
  const { user, isAdmin } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState<Partial<Project>>({
    title: '',
    description: '',
    videoUrl: '',
    type: 'Technique',
    level: 1,
    duration: '15 min',
    content: ''
  });

  useEffect(() => {
    if (!isAdmin) return;

    const q = query(collection(db, 'projects'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const projectsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Project));
      setProjects(projectsData);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'projects');
    });

    return () => unsubscribe();
  }, [isAdmin]);

  if (!isAdmin) {
    return (
      <div className="pt-32 px-8 text-center min-h-screen">
        <h2 className="text-2xl font-serif mb-4">Acceso Denegado</h2>
        <p className="text-on-surface-variant">Necesitas permisos de administrador para ver esta página.</p>
      </div>
    );
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    try {
      const data = {
        title: formData.title,
        description: formData.description,
        videoUrl: formData.videoUrl,
        type: formData.type,
        level: formData.level,
        duration: formData.duration,
        content: formData.content,
        authorId: user.uid,
        updatedAt: serverTimestamp(),
      };

      if (editingId) {
        await updateDoc(doc(db, 'projects', editingId), data);
      } else {
        await addDoc(collection(db, 'projects'), {
          ...data,
          createdAt: serverTimestamp(),
        });
      }
      setIsFormOpen(false);
      setEditingId(null);
      setFormData({ title: '', description: '', videoUrl: '', type: 'Technique', level: 1, duration: '15 min', content: '' });
    } catch (error) {
      handleFirestoreError(error, editingId ? OperationType.UPDATE : OperationType.CREATE, editingId ? `projects/${editingId}` : 'projects');
    }
  };

  const handleEdit = (project: Project) => {
    setFormData(project);
    setEditingId(project.id);
    setIsFormOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este proyecto?')) {
      try {
        await deleteDoc(doc(db, 'projects', id));
      } catch (error) {
        handleFirestoreError(error, OperationType.DELETE, `projects/${id}`);
      }
    }
  };

  return (
    <div className="pt-32 pb-24 px-8 max-w-7xl mx-auto min-h-screen">
      <header className="flex justify-between items-end mb-12">
        <div>
          <h1 className="font-serif text-4xl text-on-surface mb-2">Panel de Administración</h1>
          <p className="text-on-surface-variant italic">Gestiona tus cursos y proyectos desde aquí.</p>
        </div>
        <button 
          onClick={() => { setIsFormOpen(true); setEditingId(null); }}
          className="bg-secondary text-white px-6 py-3 rounded-xl font-brand font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-red-700 transition-colors"
        >
          <Plus size={20} />
          <span>Nuevo Proyecto</span>
        </button>
      </header>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-surface-container rounded-3xl p-6 border border-outline-variant/10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center">
            <Video size={24} />
          </div>
          <div>
            <div className="text-2xl font-bold text-on-surface">{projects.length}</div>
            <div className="text-xs text-on-surface-variant uppercase tracking-widest">Vídeos Totales</div>
          </div>
        </div>
        <div className="bg-surface-container rounded-3xl p-6 border border-outline-variant/10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
            <BarChart3 size={24} />
          </div>
          <div>
            <div className="text-2xl font-bold text-on-surface">5</div>
            <div className="text-xs text-on-surface-variant uppercase tracking-widest">Niveles Activos</div>
          </div>
        </div>
        <div className="bg-surface-container rounded-3xl p-6 border border-outline-variant/10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-green-500/10 text-green-500 flex items-center justify-center">
            <FileText size={24} />
          </div>
          <div>
            <div className="text-2xl font-bold text-on-surface">12k</div>
            <div className="text-xs text-on-surface-variant uppercase tracking-widest">Usuarios</div>
          </div>
        </div>
      </div>

      {/* Projects List */}
      <div className="bg-surface-container rounded-3xl overflow-hidden border border-outline-variant/10">
        <table className="w-full text-left">
          <thead className="bg-surface-container-high border-b border-outline-variant/10">
            <tr>
              <th className="px-6 py-4 font-brand text-[10px] uppercase tracking-widest text-on-surface-variant">Proyecto</th>
              <th className="px-6 py-4 font-brand text-[10px] uppercase tracking-widest text-on-surface-variant">Categoría</th>
              <th className="px-6 py-4 font-brand text-[10px] uppercase tracking-widest text-on-surface-variant text-center">Nivel</th>
              <th className="px-6 py-4 font-brand text-[10px] uppercase tracking-widest text-on-surface-variant text-right">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/5">
            {projects.map((project) => (
              <tr key={project.id} className="hover:bg-white/5 transition-colors group">
                <td className="px-6 py-6">
                  <div className="flex items-center gap-4">
                    <img 
                      src={project.thumbUrl || `https://img.youtube.com/vi/${project.videoUrl.split('v=')[1]}/default.jpg`} 
                      className="w-16 h-10 object-cover rounded shadow"
                      alt=""
                    />
                    <div>
                      <div className="font-bold text-on-surface">{project.title}</div>
                      <div className="text-xs text-on-surface-variant">{project.duration}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-6 font-brand text-xs">
                  <span className={cn(
                    "px-2 py-1 rounded border",
                    project.type === 'Technique' && "border-secondary/30 text-secondary bg-secondary/5",
                    project.type === 'Theory' && "border-blue-500/30 text-blue-500 bg-blue-500/5",
                    project.type === 'Repertoire' && "border-green-500/30 text-green-500 bg-green-500/5",
                  )}>
                    {project.type}
                  </span>
                </td>
                <td className="px-6 py-6 text-center font-serif italic text-on-surface-variant">
                  {project.level}
                </td>
                <td className="px-6 py-6 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button onClick={() => handleEdit(project)} className="p-2 text-on-surface-variant hover:text-white transition-colors">
                      <Pencil size={18} />
                    </button>
                    <button onClick={() => handleDelete(project.id)} className="p-2 text-on-surface-variant hover:text-secondary transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-surface-container-high w-full max-w-2xl rounded-3xl shadow-2xl p-8 border border-white/10 relative">
            <button onClick={() => setIsFormOpen(false)} className="absolute top-6 right-6 text-on-surface-variant hover:text-white">
              <X size={24} />
            </button>
            <h2 className="font-serif text-2xl mb-8">
              {editingId ? 'Editar Proyecto' : 'Crear Nuevo Proyecto'}
            </h2>
            <form onSubmit={handleSave} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-on-surface-variant">Título</label>
                  <input 
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="w-full bg-surface border border-outline/20 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-on-surface-variant">Categoría</label>
                  <select 
                    value={formData.type}
                    onChange={(e) => setFormData({...formData, type: e.target.value as ProjectType})}
                    className="w-full bg-surface border border-outline/20 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors"
                  >
                    <option value="Technique">Technique</option>
                    <option value="Theory">Theory</option>
                    <option value="Repertoire">Repertoire</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-on-surface-variant">URL de Vídeo (YouTube)</label>
                <input 
                  required
                  value={formData.videoUrl}
                  onChange={(e) => setFormData({...formData, videoUrl: e.target.value})}
                  className="w-full bg-surface border border-outline/20 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors" 
                  placeholder="https://www.youtube.com/watch?v=..."
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-on-surface-variant">Descripción Corta</label>
                <textarea 
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full bg-surface border border-outline/20 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors min-h-[100px]" 
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-on-surface-variant">Nivel (1-5)</label>
                  <input 
                    type="number" min="1" max="5"
                    value={formData.level}
                    onChange={(e) => setFormData({...formData, level: parseInt(e.target.value)})}
                    className="w-full bg-surface border border-outline/20 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-on-surface-variant">Duración</label>
                  <input 
                    value={formData.duration}
                    onChange={(e) => setFormData({...formData, duration: e.target.value})}
                    className="w-full bg-surface border border-outline/20 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors" 
                    placeholder="15 min"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-on-surface-variant">Contenido (HTML/Markdown)</label>
                <textarea 
                  value={formData.content}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  className="w-full bg-surface border border-outline/20 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors min-h-[150px]" 
                />
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full bg-secondary text-white py-4 rounded-xl font-brand font-bold uppercase tracking-widest hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                  <Save size={20} />
                  <span>{editingId ? 'Actualizar Proyecto' : 'Publicar Proyecto'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
