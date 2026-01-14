import { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Mail, MessageCircle } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

interface PublicLayoutProps {
  children: ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 glass-effect shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="text-2xl lg:text-3xl font-bold tracking-tight hover:opacity-80 transition-opacity"
            >
              <span className="text-gradient">Artist Studio</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link 
                to="/" 
                className={`nav-link ${isActive('/') ? 'text-blue-600' : ''}`}
              >
                Home
              </Link>
              <Link 
                to="/gallery" 
                className={`nav-link ${isActive('/gallery') ? 'text-blue-600' : ''}`}
              >
                Gallery
              </Link>
              <Link 
                to="/about" 
                className={`nav-link ${isActive('/about') ? 'text-blue-600' : ''}`}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`nav-link ${isActive('/contact') ? 'text-blue-600' : ''}`}
              >
                Contact
              </Link>
              <Link to="/contact" className="btn-primary">
                Get in Touch
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t border-gray-100"
            >
              <div className="px-6 py-6 space-y-4">
                <Link 
                  to="/" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 text-lg font-medium hover:text-blue-600 transition-colors"
                >
                  Home
                </Link>
                <Link 
                  to="/gallery" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 text-lg font-medium hover:text-blue-600 transition-colors"
                >
                  Gallery
                </Link>
                <Link 
                  to="/about" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 text-lg font-medium hover:text-blue-600 transition-colors"
                >
                  About
                </Link>
                <Link 
                  to="/contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 text-lg font-medium hover:text-blue-600 transition-colors"
                >
                  Contact
                </Link>
                <Link 
                  to="/contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary w-full mt-4"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* About */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold mb-6 text-gradient">Artist Studio</h3>
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                Creating exceptional artwork that tells stories, evokes emotions, and transforms spaces.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:info@artiststudio.com"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a 
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Get in Touch</h4>
              <ul className="space-y-3 text-gray-300">
                <li>Email: info@artiststudio.com</li>
                <li>Phone: +1 (234) 567-8900</li>
                <li>Available for commissions</li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Artist Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Icon */}
      <WhatsAppIcon />
    </div>
  );
}
