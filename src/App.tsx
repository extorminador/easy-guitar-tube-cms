import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/AuthProvider';
import { Navbar } from './components/Navbar';
import { Layout } from './components/Layout';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { PracticeRoom } from './pages/PracticeRoom';
import { Masterclass } from './pages/Masterclass';
import { Checkout } from './pages/Checkout';
import { AdminLogin } from './pages/AdminLogin';
import { AdminDashboard } from './pages/AdminDashboard';

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />

          {/* Landing / Marketing Pages (No Sidebar) */}
          <Route path="/" element={
            <div className="flex flex-col min-h-screen bg-[#121212] text-white">
              <Navbar />
              <main className="flex-grow">
                <Home />
              </main>
              <Footer />
            </div>
          } />
          
          <Route path="/checkout" element={
            <div className="flex flex-col min-h-screen bg-[#121212] text-white">
              <Navbar />
              <main className="flex-grow">
                <Checkout />
              </main>
              <Footer />
            </div>
          } />

          {/* App/CMS Pages (With Sidebar) */}
          <Route path="/practice" element={
            <Layout showSidebar={true}>
              <PracticeRoom />
            </Layout>
          } />
          
          <Route path="/masterclass/architecture-of-silence" element={
            <Layout showSidebar={true}>
              <Masterclass />
            </Layout>
          } />
          
          {/* Fallbacks */}
          <Route path="/lessons" element={
            <Layout showSidebar={true}>
              <div className="text-center mt-20">
                 <h2 className="text-2xl font-serif">Lessons Library</h2>
                 <p className="text-gray-400 mt-2">Content coming soon...</p>
              </div>
            </Layout>
          } />

          <Route path="*" element={
            <div className="flex flex-col min-h-screen bg-[#121212] text-white">
              <Navbar />
              <div className="pt-32 px-8 text-center flex-grow">
                <h2 className="text-3xl font-serif">404 - Page Not Found</h2>
                <p className="mt-4 text-gray-400">The lesson or page you are looking for does not exist.</p>
              </div>
              <Footer />
            </div>
          } />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
