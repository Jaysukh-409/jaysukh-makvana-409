"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getWatchlist } from "@/lib/firestore";
import { WatchlistItem, Category } from "@/types/watchlist";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const fetchWatchlist = async () => {
      const data = await getWatchlist();
      setWatchlist(data);
      setFilteredList(data);
      setLoading(false);
    };
    fetchWatchlist();
  }, []);

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredList(watchlist);
    } else {
      setFilteredList(watchlist.filter((item) => item.category === activeFilter));
    }
  }, [activeFilter, watchlist]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Toggle Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">

          {/* Toggle Buttons */}
          <div className="flex p-1 bg-gray-900/80 backdrop-blur-md rounded-xl border border-white/5 w-fit">
            {["All", Category.MOVIE, Category.SERIES].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`relative px-6 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  activeFilter === tab ? "text-white" : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {activeFilter === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/10 rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredList.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  variants={itemVariants}
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="group relative bg-gray-900/50 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-xl"
                >
                  {/* Poster Area */}
                  <div className="relative aspect-[2/3] overflow-hidden">
                    <img
                      src={item.posterUrl}
                      alt={item.name}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] uppercase tracking-widest bg-white/10 backdrop-blur-md text-white px-2 py-1 rounded-md border border-white/20">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Info Area */}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold truncate group-hover:text-accent transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm text-gray-400">
                        {item.releaseDate.getFullYear()}
                      </span>
                      <span className="text-[10px] font-bold text-gray-500 border border-gray-700 px-1.5 py-0.5 rounded">
                        {item.language}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {!loading && filteredList.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-center py-20 text-gray-500"
          >
            No {activeFilter === "All" ? "items" : activeFilter.toLowerCase()} found in your list.
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default Watchlist;