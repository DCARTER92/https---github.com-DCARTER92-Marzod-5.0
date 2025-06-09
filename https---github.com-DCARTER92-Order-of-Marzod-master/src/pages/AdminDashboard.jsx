import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await axios.get('http://localhost:5000/api/admin/users');
    setUsers(res.data);
  };

  const banUser = async (id) => {
    await axios.post('http://localhost:5000/api/admin/ban', { userId: id });
    fetchUsers();
  };

  const unbanUser = async (id) => {
    await axios.post('http://localhost:5000/api/admin/unban', { userId: id });
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="text-white max-w-6xl mx-auto px-8 py-12 space-y-16 relative z-10">
      <div className="fixed inset-0 bg-black/10 backdrop-blur-[1px] -z-10"></div>

      <h1 className="text-4xl font-bold mb-16 text-center text-shadow-lg">Admin Dashboard</h1>

      <section className="mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/20">
                <th className="p-4 text-lg font-semibold text-shadow-lg">ID</th>
                <th className="p-4 text-lg font-semibold text-shadow-lg">Username</th>
                <th className="p-4 text-lg font-semibold text-shadow-lg">Referral Code</th>
                <th className="p-4 text-lg font-semibold text-shadow-lg">Status</th>
                <th className="p-4 text-lg font-semibold text-shadow-lg">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr 
                  key={user.id} 
                  className="border-t border-white/10 transition-colors hover:bg-white/5"
                >
                  <td className="p-4 text-shadow-lg">{user.id}</td>
                  <td className="p-4 text-shadow-lg">{user.username}</td>
                  <td className="p-4 font-mono text-blue-400 text-shadow-lg">{user.code}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold text-shadow-lg ${
                      user.is_banned 
                        ? 'bg-red-500/50 text-red-100' 
                        : 'bg-green-500/50 text-green-100'
                    }`}>
                      {user.is_banned ? 'Banned' : 'Active'}
                    </span>
                  </td>
                  <td className="p-4">
                    {user.is_banned ? (
                      <button 
                        onClick={() => unbanUser(user.id)} 
                        className="px-4 py-2 bg-yellow-600/80 hover:bg-yellow-600 rounded transition-all text-white font-semibold text-shadow"
                      >
                        Unban
                      </button>
                    ) : (
                      <button 
                        onClick={() => banUser(user.id)} 
                        className="px-4 py-2 bg-red-600/80 hover:bg-red-600 rounded transition-all text-white font-semibold text-shadow"
                      >
                        Ban
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
