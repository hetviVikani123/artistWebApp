import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { usePaintings } from '../context/PaintingContext';
import PublicLayout from '../components/PublicLayout';

export default function PaintingDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { paintings } = usePaintings();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isImageZoomed, setIsImageZoomed] = useState(false);

  const painting = paintings.find(p => p.id === id);

  if (!painting) {
    return (
      <PublicLayout>
        <section className="py-24 px-6 bg-cream-50 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-serif mb-4">Artwork not found</h1>
            <button
              onClick={() => navigate('/gallery')}
              className="btn-primary"
            >
              Back to Gallery
            </button>
          </div>
        </section>
      </PublicLayout>
    );
  }

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % painting.images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + painting.images.length) % painting.images.length);
  };

  return (
    <PublicLayout>
      {/* Breadcrumb */}
      <section className="py-4 px-6 bg-cream-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate('/gallery')}
            className="text-link text-sm flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Gallery
          </button>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 px-6 bg-cream-50 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-12"
          >
            {/* Image Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative cursor-zoom-in overflow-hidden rounded-sm bg-stone-100 aspect-square mb-6 border border-stone-200"
                onClick={() => setIsImageZoomed(true)}
              >
                <motion.img
                  key={selectedImageIndex}
                  src={painting.images[selectedImageIndex]}
                  alt={painting.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Image navigation */}
              {painting.images.length > 1 && (
                <div className="flex items-center justify-between">
                  <button
                    onClick={prevImage}
                    className="p-2 hover:bg-stone-100 rounded-sm transition"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <div className="text-sm text-stone-600">
                    {selectedImageIndex + 1} / {painting.images.length}
                  </div>
                  <button
                    onClick={nextImage}
                    className="p-2 hover:bg-stone-100 rounded-sm transition"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}

              {/* Thumbnails */}
              {painting.images.length > 1 && (
                <div className="mt-6 flex gap-3">
                  {painting.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`w-16 h-16 rounded-sm overflow-hidden border-2 transition ${
                        selectedImageIndex === idx ? 'border-charcoal' : 'border-stone-200'
                      }`}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="card p-8 sticky top-24">
                <motion.h1 className="text-4xl font-serif mb-2">
                  {painting.title}
                </motion.h1>

                <div className="border-t border-b border-stone-200 py-6 my-6 space-y-4">
                  <div>
                    <p className="text-xs font-medium text-stone-600 uppercase tracking-wide">Year</p>
                    <p className="text-lg text-charcoal">{painting.year}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-stone-600 uppercase tracking-wide">Medium</p>
                    <p className="text-lg text-charcoal">{painting.medium}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-stone-600 uppercase tracking-wide">Dimensions</p>
                    <p className="text-lg text-charcoal">{painting.dimensions}</p>
                  </div>
                </div>

                {/* Price or Sold status */}
                <motion.div className="mb-6">
                  {painting.status === 'sold' ? (
                    <div className="text-center py-4 px-4 bg-stone-100 rounded-sm">
                      <p className="text-sm font-medium text-stone-600">This artwork is no longer available</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <p className="text-3xl font-serif text-charcoal mb-4">${painting.price.toLocaleString()}</p>
                      <a
                        href={`https://wa.me/?text=Hello, I'm interested in "${painting.title}"`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full block text-center"
                      >
                        Enquire via WhatsApp
                      </a>
                    </div>
                  )}
                </motion.div>

                {/* Description */}
                <div className="border-t border-stone-200 pt-6">
                  <h2 className="text-sm font-medium text-stone-600 uppercase tracking-wide mb-3">About this work</h2>
                  <p className="text-charcoal leading-relaxed">
                    {painting.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Zoomed Image Modal */}
      <AnimatePresence>
        {isImageZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setIsImageZoomed(false)}
          >
            <button
              className="absolute top-6 right-6 p-2 text-white hover:bg-white/10 rounded-full transition"
              onClick={() => setIsImageZoomed(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              src={painting.images[selectedImageIndex]}
              alt={painting.title}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-5xl max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </PublicLayout>
  );
}
