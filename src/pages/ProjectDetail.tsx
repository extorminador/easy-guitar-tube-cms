import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../firebase';
import { Project } from '../types';
import { ChevronLeft, Share2, Clock, Trophy, PlayCircle } from 'lucide-react';

export const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchProject = async () => {
      try {
        const docRef = doc(db, 'projects', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProject({ id: docSnap.id, ...docSnap.data() } as Project);
        }
      } catch (error) {
        handleFirestoreError(error, OperationType.GET, `projects/${id}`);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="pt-32 px-8 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-secondary"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="pt-32 px-8 text-center">
        <h2 className="text-2xl font-serif mb-4">Proyecto no encontrado</h2>
        <Link to="/proyectos" className="text-secondary hover:underline">Volver a Proyectos</Link>
      </div>
    );
  }

  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/watch?v=')) {
      return url.replace('watch?v=', 'embed/');
    }
    return url;
  };

  return (
    <div className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
      <Link to="/proyectos" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-white transition-colors mb-8 group">
        <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        <span className="font-brand text-xs uppercase tracking-widest uppercase">Volver a Proyectos</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          <header className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="font-brand text-[10px] uppercase text-secondary tracking-widest">{project.type}</span>
              <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
              <span className="font-brand text-[10px] uppercase text-on-surface-variant tracking-widest">Lección</span>
            </div>
            <h1 className="font-serif text-3xl md:text-5xl text-on-surface leading-tight">{project.title}</h1>
            <p className="font-sans text-lg text-on-surface-variant leading-relaxed">{project.description}</p>
          </header>

          <div className="relative aspect-video bg-neutral-950 rounded-3xl overflow-hidden shadow-2xl border border-white/5">
            <iframe 
              src={getEmbedUrl(project.videoUrl)}
              title={project.title}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="prose prose-invert prose-red max-w-none prose-lg">
            <div dangerouslySetInnerHTML={{ __html: project.content || 'Sin contenido adicional.' }} />
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 flex flex-col gap-8">
          <div className="bg-surface-container rounded-3xl p-8 border border-outline-variant/10">
            <h3 className="font-brand text-xs uppercase tracking-widest mb-6">Detalles de la Lección</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-on-surface-variant">
                  <Clock size={18} />
                  <span>Duración</span>
                </div>
                <span className="text-on-surface font-semibold">{project.duration || '15 min'}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-on-surface-variant">
                  <Trophy size={18} />
                  <span>Dificultad</span>
                </div>
                <span className="text-secondary font-bold font-serif italic">Nivel {project.level || 1}</span>
              </div>
              <div className="pt-6 border-t border-outline-variant/10">
                <button className="w-full bg-secondary text-white py-4 rounded-xl font-brand font-bold uppercase tracking-widest hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                  <Share2 size={18} />
                  <span>Compartir</span>
                </button>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-high rounded-3xl p-8 border border-outline-variant/10">
            <h3 className="font-brand text-xs uppercase tracking-widest mb-4">AI Insight</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Esta lección se enfoca en la precisión táctica. Recomendamos practicar los ejercicios a tiempo lento (60 BPM) antes de aumentar la velocidad.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};
