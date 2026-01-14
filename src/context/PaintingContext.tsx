import React, { createContext, useContext, useState } from 'react';
import { Painting } from '../types';

interface PaintingContextType {
  paintings: Painting[];
  addPainting: (painting: Omit<Painting, 'id' | 'createdAt'>) => void;
  updatePainting: (id: string, painting: Partial<Painting>) => void;
  deletePainting: (id: string) => void;
}

const PaintingContext = createContext<PaintingContextType | undefined>(undefined);

// Initial demo paintings
const INITIAL_PAINTINGS: Painting[] = [
  {
    id: '1',
    title: 'Celestial Dreams',
    medium: 'Oil on canvas',
    year: 2024,
    dimensions: '100cm x 80cm',
    price: 2500,
    description: 'A mesmerizing abstract piece that captures the essence of cosmic beauty with swirling purples and golds.',
    images: ['https://images.unsplash.com/photo-1549887534-1541e9326642?w=800'],
    status: 'available',
    published: true,
    createdAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    title: 'Urban Symphony',
    medium: 'Acrylic',
    year: 2024,
    dimensions: '120cm x 90cm',
    price: 3200,
    description: 'Contemporary artwork depicting the rhythm and energy of city life through bold brushstrokes.',
    images: ['https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800'],
    status: 'available',
    published: true,
    createdAt: new Date('2024-02-20'),
  },
  {
    id: '3',
    title: 'Ethereal Whispers',
    medium: 'Watercolor',
    year: 2023,
    dimensions: '60cm x 45cm',
    price: 1800,
    description: 'Delicate watercolor piece that evokes emotions of tranquility and introspection.',
    images: ['https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800'],
    status: 'sold',
    published: true,
    createdAt: new Date('2024-03-10'),
  },
];

interface PaintingProviderProps {
  children: React.ReactNode;
}

export const PaintingProvider: React.FC<PaintingProviderProps> = ({ children }) => {
  const [paintings, setPaintings] = useState<Painting[]>(INITIAL_PAINTINGS);

  const addPainting = (painting: Omit<Painting, 'id' | 'createdAt'>) => {
    const newPainting: Painting = {
      ...painting,
      id: Date.now().toString(),
      createdAt: new Date(),
    };
    setPaintings([...paintings, newPainting]);
  };

  const updatePainting = (id: string, updatedData: Partial<Painting>) => {
    setPaintings(paintings.map(p => p.id === id ? { ...p, ...updatedData } : p));
  };

  const deletePainting = (id: string) => {
    setPaintings(paintings.filter(p => p.id !== id));
  };

  return (
    <PaintingContext.Provider value={{ paintings, addPainting, updatePainting, deletePainting }}>
      {children}
    </PaintingContext.Provider>
  );
};

export const usePaintings = () => {
  const context = useContext(PaintingContext);
  if (context === undefined) {
    throw new Error('usePaintings must be used within a PaintingProvider');
  }
  return context;
};
