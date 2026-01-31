import { Timestamp } from 'firebase/firestore';

export enum Category {
  MOVIE = "Movie",
  SERIES = "Series"
}

export enum Language {
  HINDI = "Hindi",
  ENGLISH = "English"
}

export interface WatchlistItem {
  id?: string;
  category: Category;
  name: string;
  posterUrl: string;
  releaseDate: Date | Timestamp;
  language: Language;
}