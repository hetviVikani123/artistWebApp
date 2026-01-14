import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Palette, Heart, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PublicLayout from '../components/PublicLayout';

export default function Home() {
  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-8"
            >
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Welcome to Creative Excellence</span>
            </motion.div>

            <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-tight">
              Where Art Meets
              <br />
              <span className="text-gradient">Imagination</span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover stunning original artworks crafted with passion, precision, and a vision to transform spaces into extraordinary experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/gallery" className="btn-primary group">
                Explore Gallery
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Commission Art
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-3 gap-8 mt-24 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">200+</div>
              <div className="text-gray-600">Artworks</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">50+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <ChevronRight className="w-6 h-6 text-gray-400 rotate-90" />
        </motion.div>
      </section>

      {/* Featured Works */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-6 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-6">
            FEATURED COLLECTION
          </span>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            Masterpieces That Inspire
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Each piece tells a unique story, crafted to captivate and transform your space.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Artwork 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card group cursor-pointer"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop"
                alt="Celestial Dreams"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                  Oil on Canvas
                </span>
                <span className="text-2xl font-bold text-gray-900">$2,500</span>
              </div>
              <h3 className="text-3xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                Celestial Dreams
              </h3>
              <p className="text-gray-600 text-lg mb-4">
                A mesmerizing abstract piece capturing cosmic beauty and infinite possibilities.
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>100cm × 80cm</span>
                <span>2024</span>
              </div>
            </div>
          </motion.div>

          {/* Artwork 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card group cursor-pointer"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800&h=600&fit=crop"
                alt="Urban Symphony"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                  Acrylic
                </span>
                <span className="text-2xl font-bold text-gray-900">$3,200</span>
              </div>
              <h3 className="text-3xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                Urban Symphony
              </h3>
              <p className="text-gray-600 text-lg mb-4">
                Contemporary artwork depicting the dynamic rhythm and energy of city life.
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>120cm × 90cm</span>
                <span>2024</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <Link to="/gallery" className="btn-primary group">
            View Complete Gallery
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="section-container bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            Why Collectors Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Combining artistic excellence with professional service
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Palette className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Original Artworks</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Every piece is meticulously hand-crafted, ensuring authenticity and uniqueness in your collection.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Passion & Care</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Created with dedication and attention to detail, each artwork carries emotional depth and meaning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Custom Commissions</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Collaborate directly to create bespoke pieces tailored to your vision and space requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-16 lg:p-24 text-center text-white shadow-strong"
        >
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Ready to Start Your Art Journey?
            </h2>
            <p className="text-xl lg:text-2xl mb-12 opacity-90 max-w-2xl mx-auto">
              Whether you're looking to purchase or commission, let's create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all">
                Get Started Today
              </Link>
              <Link to="/gallery" className="bg-white/20 backdrop-blur-sm text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/30 transition-all">
                Browse Collection
              </Link>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </motion.div>
      </section>
    </PublicLayout>
  );
}
