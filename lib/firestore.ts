import { app } from "./firebase";
import { 
  getFirestore, 
  collection, 
  getDocs, 
  query, 
  orderBy, 
  Timestamp 
} from "firebase/firestore";
import { WatchlistItem } from "@/types/watchlist";

const db = getFirestore(app);

export const getWatchlist = async (): Promise<WatchlistItem[]> => {
  try {
    const watchlistRef = collection(db, "watchlist");
    const q = query(watchlistRef, orderBy("releaseDate", "desc"));
    const querySnapshot = await getDocs(q);

    // Map the documents into typed array
    return querySnapshot.docs.map((doc) => {
      const data = doc.data();
      
      return {
        id: doc.id,
        name: data.name,
        category: data.category,
        posterUrl: data.posterUrl,
        language: data.language,
        releaseDate: (data.releaseDate as Timestamp).toDate(),
      } as WatchlistItem;
    });
  } catch (error) {
    console.error("Error fetching watchlist:", error);
    return [];
  }
};