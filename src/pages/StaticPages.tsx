import React from 'react';

export const Estudio = () => (
  <div className="pt-32 px-8 max-w-7xl mx-auto min-h-screen">
    <h1 className="font-serif text-4xl mb-8">Zona de Estudio</h1>
    <div className="prose prose-invert">
      <p>Bienvenido a tu espacio de práctica personal. Aquí podrás seguir tu progreso y acceder a tu rutina diaria.</p>
      <div className="bg-surface-container p-8 rounded-3xl mt-8 border border-white/5">
        <p className="italic text-on-surface-variant">Próximamente: Metrónomo integrado y seguimiento de racha.</p>
      </div>
    </div>
  </div>
);

export const Contacto = () => (
  <div className="pt-32 px-8 max-w-7xl mx-auto min-h-screen">
    <h1 className="font-serif text-4xl mb-8">Contacto</h1>
    <div className="max-w-2xl bg-surface-container p-12 rounded-3xl border border-white/5">
      <form className="space-y-6">
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-on-surface-variant">Nombre</label>
          <input className="w-full bg-background border border-outline/20 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary" />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-on-surface-variant">Email</label>
          <input className="w-full bg-background border border-outline/20 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary" />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-on-surface-variant">Mensaje</label>
          <textarea className="w-full bg-background border border-outline/20 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary min-h-[150px]" />
        </div>
        <button className="w-full bg-secondary text-white py-4 rounded-xl font-brand font-bold uppercase tracking-widest">Enviar Mensaje</button>
      </form>
    </div>
  </div>
);

export const Ayuda = () => (
  <div className="pt-32 px-8 max-w-7xl mx-auto min-h-screen">
    <h1 className="font-serif text-4xl mb-8">Centro de Ayuda</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-surface-container p-8 rounded-3xl border border-white/5">
        <h3 className="font-bold mb-4">Preguntas Frecuentes</h3>
        <p className="text-on-surface-variant text-sm">Encuentra respuestas rápidas a las dudas más comunes sobre la plataforma.</p>
      </div>
      <div className="bg-surface-container p-8 rounded-3xl border border-white/5">
        <h3 className="font-bold mb-4">Soporte Técnico</h3>
        <p className="text-on-surface-variant text-sm">Contáctanos si tienes problemas con el reproductor o tu cuenta.</p>
      </div>
    </div>
  </div>
);
