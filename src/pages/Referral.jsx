import React, { useState } from 'react';
import axios from 'axios';

export default function Referral() {
  const [userId, setUserId] = useState(localStorage.getItem('userId') || '');
  const [referralCode, setReferralCode] = useState(localStorage.getItem("code") || "");
  const [inputCode, setInputCode] = useState('');

  const handleUseCode = async () => {
    try {
      await axios.post('http://localhost:5000/api/referrals/use', {
        userId,
        referralCode: inputCode
      });
      alert('Referral code accepted!');
    } catch (err) {
      alert('Error submitting referral code.');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralCode);
    alert('Referral code copied!');
  };

  return (
    <div className="text-white max-w-4xl mx-auto px-8 py-12 space-y-16 relative z-10">
      <div className="fixed inset-0 bg-black/10 backdrop-blur-[1px] -z-10"></div>

      <h1 className="text-4xl font-bold mb-16 text-center text-shadow-lg">Referral Program</h1>

      <section className="mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25">
        <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-600 text-shadow-lg">Invite Others</h2>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-shadow-lg">
            Share us and invite. For each person who signs up using your link and makes a post, you will be rewarded.
          </p>
          <div className="flex items-center gap-4">
            <input
              type="text"
              className="flex-1 p-4 rounded bg-black/30 text-white border border-white/20 focus:border-white/40 focus:outline-none transition-all"
              readOnly
              value={referralCode}
            />
            <button 
              onClick={copyToClipboard} 
              className="px-6 py-4 bg-blue-600/80 hover:bg-blue-600 rounded transition-all text-white font-semibold text-shadow whitespace-nowrap"
            >
              Copy Code
            </button>
          </div>
        </div>
      </section>

      <section className="mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25">
        <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-600 text-shadow-lg">Were you invited?</h2>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-shadow-lg">
            Enter the invite code to give credit to the person who referred you:
          </p>
          <div className="space-y-4">
            <input
              type="text"
              className="w-full p-4 rounded bg-black/30 text-white border border-white/20 focus:border-white/40 focus:outline-none transition-all"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
              placeholder="Enter referral code..."
            />
            <button 
              onClick={handleUseCode} 
              className="px-6 py-4 bg-green-600/80 hover:bg-green-600 rounded transition-all text-white font-semibold text-shadow"
            >
              Submit Code
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
