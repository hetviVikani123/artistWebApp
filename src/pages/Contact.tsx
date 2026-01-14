import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import PublicLayout from '../components/PublicLayout';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // In a real app, this would send the form data to a backend
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <PublicLayout>
      {/* Header with Artistic Elements */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 overflow-hidden">
        {/* Paint Splatters */}
        <div className="paint-splatter-1" style={{ top: '10%', right: '5%' }} />
        <div className="paint-splatter-3" style={{ bottom: '15%', left: '10%' }} />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold text-pink-600 mb-6">
              LET'S CONNECT
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Have questions or interested in commissioning art? I'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 bg-cream-50 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif mb-12">Contact Information</h2>

              <div className="space-y-10">
                {/* Email */}
                <div className="flex gap-6">
                  <div className="pt-1">
                    <Mail className="w-6 h-6 text-charcoal" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg mb-2">Email</h3>
                    <a
                      href="mailto:hello@artiststudio.com"
                      className="text-link"
                    >
                      hello@artiststudio.com
                    </a>
                    <p className="text-sm text-stone-600 mt-1">
                      I try to respond to all inquiries within 24 hours.
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-6">
                  <div className="pt-1">
                    <MapPin className="w-6 h-6 text-charcoal" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg mb-2">Studio Location</h3>
                    <p className="text-charcoal">
                      New York, NY<br />
                      United States
                    </p>
                    <p className="text-sm text-stone-600 mt-2">
                      Studio visits available by appointment.
                    </p>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex gap-6">
                  <div className="pt-1">
                    <Clock className="w-6 h-6 text-charcoal" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg mb-2">Availability</h3>
                    <p className="text-charcoal">
                      Monday – Friday<br />
                      10:00 AM – 6:00 PM EST
                    </p>
                    <p className="text-sm text-stone-600 mt-2">
                      WhatsApp is preferred for quick inquiries.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-16 p-6 bg-white rounded-sm border border-stone-200">
                <h3 className="font-serif text-lg mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/?text=Hello, I'd like to inquire about your work"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-link"
                  >
                    Chat on WhatsApp
                  </a>
                  <a
                    href="mailto:hello@artiststudio.com?subject=Artwork Inquiry"
                    className="block text-link"
                  >
                    Send an Email
                  </a>
                  <a
                    href="/gallery"
                    className="block text-link"
                  >
                    Browse Gallery
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif mb-8">Send a Message</h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-stone-50 border border-stone-300 rounded-sm p-12 text-center"
                >
                  <p className="text-lg font-serif mb-2">Thank you for reaching out</p>
                  <p className="text-stone-600">
                    I've received your message and will get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:outline-none focus:border-charcoal transition text-charcoal"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:outline-none focus:border-charcoal transition text-charcoal"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-charcoal mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:outline-none focus:border-charcoal transition text-charcoal"
                      placeholder="Artwork inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:outline-none focus:border-charcoal transition text-charcoal resize-none"
                      placeholder="Tell me about your interest..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="btn-primary w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>

                  <p className="text-xs text-stone-600 text-center">
                    For faster response, please message via WhatsApp using the icon in the corner.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
