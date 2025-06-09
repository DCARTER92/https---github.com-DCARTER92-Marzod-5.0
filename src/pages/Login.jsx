import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState(null);

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/users/login', { username, password });
      setUserId(res.data.userId);
      localStorage.setItem('userId', res.data.userId);
      localStorage.setItem('code', res.data.code);
      // Redirect to home page on successful login
      window.location.href = '/';
    } catch (err) {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="text-white max-w-4xl mx-auto px-8 py-12 space-y-16 relative z-10">
      <div className="fixed inset-0 bg-black/10 backdrop-blur-[1px] -z-10"></div>

      <h1 className="text-4xl font-bold mb-16 text-center text-shadow-lg">Login</h1>

      <section className="max-w-md mx-auto mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25">
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="block text-lg font-semibold text-shadow-lg">Username</label>
            <input
              className="w-full p-4 rounded bg-black/30 text-white border border-white/20 focus:border-white/40 focus:outline-none transition-all"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-lg font-semibold text-shadow-lg">Password</label>
            <input
              className="w-full p-4 rounded bg-black/30 text-white border border-white/20 focus:border-white/40 focus:outline-none transition-all"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <button 
            className="w-full px-6 py-4 bg-green-600/80 hover:bg-green-600 rounded transition-all text-white font-semibold text-shadow text-lg"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </section>
    </div>
  );
}
