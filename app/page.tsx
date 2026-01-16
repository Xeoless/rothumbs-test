'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [allowed, setAllowed] = useState(false);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (localStorage.getItem('elxora_access') === 'ok') {
      setAllowed(true);
    }
  }, []);

  const handleAccess = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim() === 'beta2026') {  // ← change this code to whatever you want
      localStorage.setItem('elxora_access', 'ok');
      setAllowed(true);
      setError('');
    } else {
      setError('Wrong code');
    }
  };

  if (!allowed) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-black to-purple-950">
        <div className="w-full max-w-md bg-[#111] border border-purple-800 rounded-xl p-8">
          <h1 className="text-4xl font-bold text-purple-400 mb-6 text-center">ElXora</h1>
          <p className="text-center mb-6 text-gray-300">Enter code to access AI Lua generator</p>
          <form onSubmit={handleAccess}>
            <input
              type="text"
              value={code}
              onChange={e => setCode(e.target.value)}
              placeholder="Access code"
              className="w-full p-4 mb-4 bg-gray-900 border border-purple-700 rounded focus:border-purple-500 outline-none"
            />
            <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 py-4 rounded font-bold">
              Enter
            </button>
          </form>
          {error && <p className="text-red-400 mt-4 text-center">{error}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-5xl font-bold text-purple-400 text-center mb-8">ElXora</h1>
      <p className="text-xl text-gray-400 text-center mb-10">AI Roblox Luau Script Generator</p>

      <div className="max-w-3xl mx-auto">
        <textarea
          placeholder="Describe your script... (e.g. simple tycoon dropper with upgrades)"
          className="w-full h-48 p-6 bg-[#1a1a1a] border border-purple-800 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 outline-none resize-none mb-6"
        />
        <button className="w-full bg-purple-600 hover:bg-purple-700 py-5 rounded-xl font-bold text-xl">
          Generate Lua Script
        </button>
      </div>
    </div>
  );
}
