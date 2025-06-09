import React, { useState } from 'react';
import axios from 'axios';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [inviteCode, setInviteCode] = useState('');
  const [responseCode, setResponseCode] = useState(null);

  const handleSignup = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/users/register', {
        username,
        password,
        inviteCode
      });
      localStorage.setItem('code', res.data.code);
      localStorage.setItem('userId', res.data.userId);
      // Redirect to home page on successful signup
      window.location.href = '/';
    } catch (err) {
      alert('Signup failed: ' + err.response.data.error);
    }
  };

  return (
    <div className="text-white max-w-4xl mx-auto px-8 py-12 space-y-16 relative z-10">
      <div className="fixed inset-0 bg-black/10 backdrop-blur-[1px] -z-10"></div>

      <h1 className="text-4xl font-bold mb-16 text-center text-shadow-lg">Sign Up</h1>

      <section className="max-w-md mx-auto mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25">
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="block text-lg font-semibold text-shadow-lg">Username</label>
            <input
              className="w-full p-4 rounded bg-black/30 text-white border border-white/20 focus:border-white/40 focus:outline-none transition-all"
              type="text"
              placeholder="Choose a username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-lg font-semibold text-shadow-lg">Password</label>
            <input
              className="w-full p-4 rounded bg-black/30 text-white border border-white/20 focus:border-white/40 focus:outline-none transition-all"
              type="password"
              placeholder="Choose a password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-lg font-semibold text-shadow-lg">Referral Code</label>
            <input
              className="w-full p-4 rounded bg-black/30 text-white border border-white/20 focus:border-white/40 focus:outline-none transition-all"
              type="text"
              placeholder="Enter referral code (optional)"
              value={inviteCode}
              onChange={e => setInviteCode(e.target.value)}
            />
          </div>

          <button 
            className="w-full px-6 py-4 bg-blue-600/80 hover:bg-blue-600 rounded transition-all text-white font-semibold text-shadow text-lg"
            onClick={handleSignup}
          >
            Sign Up
          </button>
        </div>

        {responseCode && (
          <div className="mt-8 bg-black/30 p-6 rounded-lg border border-white/10">
            <p className="text-lg font-semibold text-shadow-lg mb-2">Your referral code:</p>
            <code className="block p-4 bg-black/40 rounded text-blue-400 text-lg font-mono text-shadow-lg">
              {responseCode}
            </code>
          </div>
        )}
      </section>
    </div>
  );
}
