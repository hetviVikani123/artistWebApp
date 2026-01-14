import { motion } from 'framer-motion';
import { Award, Palette, Users, TrendingUp } from 'lucide-react';
import PublicLayout from '../components/PublicLayout';

export default function About() {
  return (
    <PublicLayout>
      {/* Header with Artistic Elements */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 overflow-hidden">
        {/* Paint Splatters */}
        <div className="paint-splatter-1" style={{ top: '15%', right: '10%' }} />
        <div className="paint-splatter-2" style={{ bottom: '20%', left: '8%' }} />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold text-purple-600 mb-6">
              ARTIST STORY
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              About <span className="text-gradient">the Artist</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              A journey through color, emotion, and creative expression.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 lg:py-32 px-6 watercolor-bg canvas-texture">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-strong">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop"
                  alt="Artist portrait"
                  className="w-full h-full object-cover"
                />
                {/* Artistic Border Effect */}
                <div className="absolute inset-0 border-4 border-white/20 rounded-3xl"></div>
              </div>
              {/* Floating Element */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20 blur-2xl"></div>
            </motion.div>

            {/* Bio Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 palette-accent">A Painter's Journey</h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  For over a decade, I have been exploring the intersection of color, form, and emotion through painting. What began as a personal exploration has evolved into a commitment to creating work that speaks to something genuine within the viewer.
                </p>
                <p>
                  My practice is rooted in observation—of light, of landscape, of the quiet moments that often go unnoticed. Each piece is created with intention, never rushing toward completion, always listening to what the work needs to become.
                </p>
                <p>
                  I believe art is a conversation. It doesn't demand attention or explanation. Rather, it exists in the space between the artist and the viewer, waiting patiently to resonate with those who are ready to receive it.
                </p>
                <p>
                  Today, I work from my studio, creating paintings that reflect this philosophy. Each commission and original work is approached with the same care—not as a transaction, but as an opportunity to collaborate with someone who understands the value of quiet beauty.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <section className="py-20 lg:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">My Artistic Approach</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every piece is crafted with dedication, passion, and purpose
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card p-8 text-center hover:shadow-strong transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Technique</h3>
              <p className="text-gray-600 leading-relaxed">
                Working primarily in oil and acrylic, I focus on developing a personal language through layering, color mixing, and thoughtful composition.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-8 text-center hover:shadow-strong transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Inspiration</h3>
              <p className="text-gray-600 leading-relaxed">
                Nature, architectural forms, and the play of light serve as primary sources. Emotional response guides the creative process.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="card p-8 text-center hover:shadow-strong transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Philosophy</h3>
              <p className="text-gray-600 leading-relaxed">
                Art should elevate rather than shout. I create work intended to be lived with, appreciated slowly, and cherished.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="py-24 px-6 bg-charcoal text-cream-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-2xl font-serif leading-relaxed mb-8">
            "The purpose of art is washing the dust of daily life off our souls. Every painting carries a whisper of intention, waiting to be heard by those ready to listen."
          </p>
          <div className="border-t border-stone-700 pt-8">
            <p className="text-stone-300">Available for commissions, exhibitions, and collaborations.</p>
            <p className="text-stone-300 mt-2">Reach out via WhatsApp to discuss your ideas.</p>
          </div>
        </motion.div>
      </section>
    </PublicLayout>
  );
}
