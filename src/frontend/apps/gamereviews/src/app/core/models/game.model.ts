export interface Game {
  id: string;
  slug: string;
  title: string;
  originalReleaseYear: number;
  developers: string[];
  publishers: string[];
  genres: string[];
  coverImage: string;
  tags: string[];
}
