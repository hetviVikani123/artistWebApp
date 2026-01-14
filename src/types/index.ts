export interface Painting {
  id: string;
  title: string;
  medium: string; // e.g., "Oil on canvas", "Watercolor"
  year: number;
  dimensions: string; // e.g., "100cm x 80cm"
  price: number;
  description: string;
  images: string[];
  status: 'available' | 'sold' | 'hidden';
  published: boolean;
  createdAt: Date;
}

export interface User {
  username: string;
  role: 'admin' | 'user';
}

export interface ArtistInfo {
  name: string;
  philosophyLine: string;
  bio: string;
  portraitImage?: string;
  studioEmail: string;
  studioLocation?: string;
}
