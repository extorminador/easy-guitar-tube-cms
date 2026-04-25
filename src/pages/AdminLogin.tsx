import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Lock, Mail, AlertCircle } from 'lucide-react';

export function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      
      // If successful, navigate to the dashboard
      navigate('/admin/dashboard');
    } catch (err: any) {
      setError(err.message || 'Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center font-bold text-[#EE2A24] text-lg mx-auto mb-4">
            EGT
          </div>
          <h1 className="text-2xl font-serif text-white mb-2">Admin Portal</h1>
          <p className="text-gray-400 text-sm">Ingresa tus credenciales para gestionar el contenido.</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-[#EE2A24]/10 border border-[#EE2A24]/50 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#EE2A24] shrink-0 mt-0.5" />
            <p className="text-sm text-[#EE2A24]">{error}</p>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs font-bold tracking-wider text-gray-500 uppercase mb-2">Email</label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-[#121212] border border-[#333] rounded-lg py-3 px-4 pl-11 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#EE2A24] transition-colors"
                placeholder="admin@easyguitartube.com"
              />
              <Mail className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold tracking-wider text-gray-500 uppercase mb-2">Password</label>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-[#121212] border border-[#333] rounded-lg py-3 px-4 pl-11 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#EE2A24] transition-colors"
                placeholder="••••••••"
              />
              <Lock className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-[#EE2A24] hover:bg-[#ff3b3b] text-white rounded-lg font-bold tracking-wide transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'AUTENTICANDO...' : 'INICIAR SESIÓN'}
          </button>
        </form>
      </div>
    </div>
  );
}
