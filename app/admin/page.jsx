"use client";

import { useState } from "react";
import { Category } from "@/types/watchlist";
import { motion } from "framer-motion";
import { addMovieToDatabase } from "./actions"; // Import our new server function

export default function AdminPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [password, setPassword] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  // Simple local UI gate check (real validation still happens on server submit)
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (password.trim() !== "") {
      setIsVerified(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.currentTarget);
    // Append the password to the form data so the server can verify it
    formData.append("password", password);

    try {
      await addMovieToDatabase(formData);
      setStatus("Success! Movie added to database. 🚀");
      e.currentTarget.reset();
    } catch (error) {
      setStatus(error.message || "Error adding movie.");
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
        {/* Gateway: If not verified locally, show password input first */}
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
          /* Main Admin Form */
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
