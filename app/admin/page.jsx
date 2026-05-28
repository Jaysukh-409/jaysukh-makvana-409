"use client";

import { useState } from "react";
import { db } from "@/lib/firestore";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { Category } from "@/types/watchlist";
import { motion } from "framer-motion";

const HASHED_PASSWORD_SECRET = "ea85b9831218cbd8f44a10b6393b0b31e71c94630ceed2e52f39cc5d68f0e22e";

export default function AdminPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [password, setPassword] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const sha256 = async (string) => {
    const utf8 = new TextEncoder().encode(string);
    const hashBuffer = await crypto.subtle.digest("SHA-256", utf8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    const inputHash = await sha256(password);

    if (inputHash === HASHED_PASSWORD_SECRET) {
      setIsVerified(true);
    } else {
      setStatus("❌ Incorrect password!");
      setPassword("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.currentTarget);

    try {
      await addDoc(collection(db, "watchlist"), {
        name: formData.get("name"),
        category: formData.get("category"),
        language: formData.get("language"),
        posterUrl: formData.get("posterUrl"),
        releaseDate: Timestamp.fromDate(new Date(formData.get("releaseDate"))),
      });

      setStatus("Success! Movie added to database. 🚀");
      e.currentTarget.reset();
    } catch (error) {
      console.error(error);
      setStatus("Error adding movie. Check console.");
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(""), 4000);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-gray-900/50 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl"
      >
        {!isVerified ? (
          <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4">
            <h1 className="text-xl font-bold text-center mb-2">Admin Authentication</h1>
            <input 
              type="password" 
              placeholder="Enter Admin Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              className="bg-black/50 border border-white/10 p-3 rounded-xl focus:border-blue-500 outline-none" 
            />
            <button type="submit" className="bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-200 transition-all">
              Unlock Admin Panel
            </button>
          </form>
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-6 text-center">Add New Entry</h1>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input name="name" placeholder="Movie/Series Name" required className="bg-black/50 border border-white/10 p-3 rounded-xl focus:border-blue-500 outline-none" />
              
              <select name="category" className="bg-black/50 border border-white/10 p-3 rounded-xl outline-none">
                <option value={Category.MOVIE}>Movie</option>
                <option value={Category.SERIES}>Series</option>
              </select>

              <select name="language" className="bg-black/50 border border-white/10 p-3 rounded-xl outline-none">
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
              </select>
              
              <input name="posterUrl" placeholder="Poster Image URL" required className="bg-black/50 border border-white/10 p-3 rounded-xl outline-none" />
              
              <input name="releaseDate" type="date" required className="bg-black/50 border border-white/10 p-3 rounded-xl outline-none text-gray-400" />

              <button 
                disabled={loading}
                type="submit" 
                className="mt-4 bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-200 transition-all active:scale-95 disabled:opacity-50"
              >
                {loading ? "Uploading..." : "Add to Watchlist"}
              </button>
            </form>
          </>
        )}

        {status && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-center text-sm text-blue-400 font-medium">
            {status}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
