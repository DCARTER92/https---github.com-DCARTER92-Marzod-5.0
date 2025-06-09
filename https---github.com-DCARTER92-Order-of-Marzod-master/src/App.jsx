import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Home from './pages/Home';
import About from './pages/About';
import Books from './pages/Books';
import Referral from './pages/Referral';
import Community from './pages/Community';
import Ranks from './pages/Ranks';
import Purpose from './pages/Purpose';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminDashboard from './pages/AdminDashboard';
import ShaderBackground from './components/ShaderBackground';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-cover bg-center text-white relative" style={{ backgroundImage: "url('/background.jpg')" }}>
        <ShaderBackground />
        <header className="bg-transparent backdrop-blur-sm py-4 px-6 flex justify-between items-center fixed w-full top-0 z-50">
          <div className="relative">
            <Button 
              onClick={() => setMenuOpen(!menuOpen)}
              variant="ghost" 
              className="text-white hover:bg-white/10"
            >
              Home
            </Button>
            {menuOpen && (
              <div className="absolute mt-2 bg-black/90 backdrop-blur-md rounded-lg shadow-xl border border-white/10 w-48">
                <Link to="/" className="block px-4 py-2 hover:bg-white/10 text-white">Home</Link>
                <Link to="/about" className="block px-4 py-2 hover:bg-white/10 text-white">About</Link>
                <Link to="/books" className="block px-4 py-2 hover:bg-white/10 text-white">Books</Link>
                <Link to="/referral" className="block px-4 py-2 hover:bg-white/10 text-white">Referral</Link>
                <Link to="/community" className="block px-4 py-2 hover:bg-white/10 text-white">Community</Link>
                <Link to="/ranks" className="block px-4 py-2 hover:bg-white/10 text-white">Ranks and Roles</Link>
                <Link to="/purpose" className="block px-4 py-2 hover:bg-white/10 text-white">Statement of Purpose</Link>
              </div>
            )}
          </div>
          <div>
            <Link to="/login">
              <Button variant="ghost" className="text-white hover:bg-white/10 mr-2">Login</Button>
            </Link>
            <Link to="/signup">
              <Button variant="ghost" className="text-white hover:bg-white/10 border border-white/50">Sign Up</Button>
            </Link>
          </div>
        </header>

        <div className="pt-16"> {/* Spacer for fixed header */}
          <main className="p-6 relative z-10">
            <Routes>
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/books" element={<Books />} />
              <Route path="/referral" element={<Referral />} />
              <Route path="/community" element={<Community />} />
              <Route path="/ranks" element={<Ranks />} />
              <Route path="/purpose" element={<Purpose />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}
