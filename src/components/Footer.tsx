import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-12 bg-neutral-950 border-t border-neutral-800 flex flex-col items-center gap-6">
      <div className="flex items-center gap-3">
        <img 
          src="https://lh3.googleusercontent.com/aida/ADBb0ugcKSXXc86j548wJN61xgtNbZ9RrEnJtJKE0nORpEt_3GdjpYUQqKX7l5iUHPPzop9IJ4cfcdREQd9-gLjAs8vQLx5ky0x85aBDtVHNfwzJ2lqixwRJTTUnc7wtOY6vXdCClMc5AcsWjIxB8pn98bLqVj2tkic70GS31nFelZx8th-d-Y5F0TfXA4d-8xmCthhwBtoQBk8uH-hBEcXtcrwRyhs6F0kDtkWdSDa3zkJWNg58QYuVMDBg_o6rtGYaI9djPrQ60v2j9A0" 
          alt="Logo" 
          className="h-8 w-8 object-contain" 
        />
        <span className="text-secondary font-bold font-brand text-lg uppercase tracking-tighter italic">EasyGuitarTube</span>
      </div>
      
      <ul className="flex flex-wrap justify-center gap-8 font-brand text-xs uppercase tracking-widest text-neutral-500">
        <li><a href="#" className="hover:text-white transition-colors">Términos de Servicio</a></li>
        <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
        <li><a href="#" className="hover:text-white transition-colors">Instructores</a></li>
        <li><a href="#" className="hover:text-white transition-colors">Afiliados</a></li>
      </ul>
      
      <div className="text-neutral-600 font-brand text-[10px] uppercase tracking-widest">
        © {currentYear} EasyGuitarTube. Master the Strings.
      </div>
    </footer>
  );
};
