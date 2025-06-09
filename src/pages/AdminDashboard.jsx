
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/admin/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const handleAction = (username, action) => {
    axios.post(`/api/admin/${action}/${username}`)
      .then(() => {
        setUsers(prev => prev.map(user => user.username === username ? { ...user, [action]: true } : user));
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-md">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-3 border-b">Username</th>
            <th className="p-3 border-b">Email</th>
            <th className="p-3 border-b">Referral Code</th>
            <th className="p-3 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.username} className="border-b">
              <td className="p-3">{user.username}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.referral_code || 'N/A'}</td>
              <td className="p-3 space-x-2">
                <button
                  onClick={() => handleAction(user.username, 'ban')}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Ban
                </button>
                <button
                  onClick={() => handleAction(user.username, 'mute')}
                  className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  Mute
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
