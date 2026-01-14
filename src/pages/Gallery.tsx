import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Filter, X } from 'lucide-react';
import { usePaintings } from '../context/PaintingContext';
import PublicLayout from '../components/PublicLayout';

type FilterKey = 'all' | 'medium' | 'year' | 'status';

export default function Gallery() {
  const { paintings } = usePaintings();
  const [selectedMedium, setSelectedMedium] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const publishedPaintings = paintings.filter(p => p.published && p.status !== 'hidden');

  const mediums = [...new Set(publishedPaintings.map(p => p.medium))];
  const years = [...new Set(publishedPaintings.map(p => p.year))].sort((a, b) => b - a);

  const filteredPaintings = publishedPaintings.filter(painting => {
    if (selectedMedium !== 'all' && painting.medium !== selectedMedium) return false;
    if (selectedYear !== 'all' && painting.year !== parseInt(selectedYear)) return false;
    return true;
  });

  const clearFilters = () => {
    setSelectedMedium('all');
    setSelectedYear('all');
  };

  return (
    <PublicLayout>
      {/* Page Header with Artistic Elements */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
        {/* Paint Splatters */}
        <div className="paint-splatter-1" style={{ top: '10%', left: '5%' }} />
        <div className="paint-splatter-2" style={{ top: '50%', right: '10%' }} />
        <div className="paint-splatter-3" style={{ bottom: '20%', left: '15%' }} />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold text-blue-600 mb-6">
              EXPLORE COLLECTION
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Gallery <span className="text-gradient">Collection</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Discover original artworks that transform spaces and inspire conversations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              <Filter className="w-4 h-4" />
              Filters
              {(selectedMedium !== 'all' || selectedYear !== 'all') && (
                <span className="w-2 h-2 bg-blue-600 rounded-full" />
              )}
            </button>

            {/* Desktop Filters */}
            <div className={`${filtersOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row gap-4 w-full lg:w-auto`}>
              <select
                value={selectedMedium}
                onChange={(e) => setSelectedMedium(e.target.value)}
                className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              >
                <option value="all">All Mediums</option>
                {mediums.map(medium => (
                  <option key={medium} value={medium}>{medium}</option>
                ))}
              </select>

              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              >
                <option value="all">All Years</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>

              {(selectedMedium !== 'all' || selectedYear !== 'all') && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <X className="w-4 h-4" />
                  Clear
                </button>
              )}
            </div>

            <p className="text-sm text-gray-600 font-medium">
              {filteredPaintings.length} artwork{filteredPaintings.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="relative py-20 px-6 watercolor-bg canvas-texture min-h-screen">
        <div className="max-w-7xl mx-auto">
          {filteredPaintings.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {filteredPaintings.map((painting, index) => (
                <motion.div
                  key={painting.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link to={`/painting/${painting.id}`} className="block">
                    <div className="card overflow-hidden cursor-pointer">
                      {/* Image */}
                      <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                        <motion.img
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.6 }}
                          src={painting.images[0]}
                          alt={painting.title}
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Status Badge */}
                        {painting.status === 'sold' && (
                          <div className="absolute top-4 right-4 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                            SOLD
                          </div>
                        )}
                        {painting.status === 'available' && (
                          <div className="absolute top-4 right-4 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                            AVAILABLE
                          </div>
                        )}
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Info */}
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors brush-stroke">
                          {painting.title}
                        </h3>
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                          <span>{painting.medium}</span>
                          <span>{painting.year}</span>
                        </div>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {painting.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{painting.dimensions}</span>
                          {painting.status === 'available' && (
                            <span className="text-2xl font-bold text-gray-900">
                              ${painting.price.toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-32"
            >
              <p className="text-2xl text-gray-400 mb-6">No artworks found</p>
              <button
                onClick={clearFilters}
                className="btn-secondary"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </PublicLayout>
  );
}
