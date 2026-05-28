"use server";

import { db } from "@/lib/firestore";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export async function addMovieToDatabase(formData: FormData) {
  const clientPassword = formData.get("password");
  const serverPassword = process.env.ADMIN_PASSWORD;

  if (!clientPassword || clientPassword !== serverPassword) {
    throw new Error("Unauthorized: Invalid password.");
  }

  try {
    const releaseDateStr = formData.get("releaseDate") as string;
    
    await addDoc(collection(db, "watchlist"), {
      name: formData.get("name"),
      category: formData.get("category"),
      language: formData.get("language"),
      posterUrl: formData.get("posterUrl"),
      releaseDate: Timestamp.fromDate(new Date(releaseDateStr)),
    });

    return { success: true };
  } catch (error) {
    console.error("Firestore error:", error);
    throw new Error("Failed to add entry to database.");
  }
}
