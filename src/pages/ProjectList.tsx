import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../firebase';
import { Project } from '../types';
import { Link } from 'react-router-dom';
import { Play, Star, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export const ProjectList = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'projects'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const projectsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Project));
      setProjects(projectsData);
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'projects');
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="pt-32 px-8 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-secondary"></div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
      <header className="mb-16">
        <h1 className="font-serif text-4xl text-on-surface mb-4">Explorar Proyectos</h1>
        <p className="text-on-surface-variant max-w-2xl">Aprende con nuestra colección de lecciones y proyectos diseñados para llevar tu técnica al siguiente nivel.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link to={`/proyectos/${project.id}`} className="group block h-full">
              <div className="bg-surface-container rounded-2xl overflow-hidden border border-outline-variant/10 hover:border-secondary/50 transition-all h-full">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.thumbUrl || `https://img.youtube.com/vi/${project.videoUrl.split('v=')[1]}/hqdefault.jpg`} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center shadow-lg">
                      <Play fill="currentColor" size={24} />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] uppercase tracking-widest text-white border border-white/10">
                      {project.type}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2 text-on-surface-variant text-xs">
                      <Clock size={12} />
                      <span>{project.duration || '15 min'}</span>
                    </div>
                    <div className="flex items-center gap-1 text-secondary text-xs">
                      <Star size={12} fill="currentColor" />
                      <span>Nivel {project.level || 1}</span>
                    </div>
                  </div>
                  <h2 className="font-serif text-xl text-on-surface mb-3 group-hover:text-secondary transition-colors line-clamp-1">
                    {project.title}
                  </h2>
                  <p className="text-on-surface-variant text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
        {projects.length === 0 && (
          <div className="col-span-full py-24 text-center border-2 border-dashed border-outline-variant/20 rounded-3xl">
            <p className="text-on-surface-variant italic">No hay proyectos disponibles todavía. ¡Vuelve pronto!</p>
          </div>
        )}
      </div>
    </div>
  );
};
