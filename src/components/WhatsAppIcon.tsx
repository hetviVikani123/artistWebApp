import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

// WhatsApp URL configuration - easily updated for API integration
const WHATSAPP_CONFIG = {
  phoneNumber: '+1234567890', // Replace with actual phone number
  message: 'Hello, I\'m interested in your artwork.',
  getWhatsAppUrl: (phone: string, message: string) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phone}?text=${encodedMessage}`;
  },
};

export default function WhatsAppIcon() {
  const whatsappUrl = WHATSAPP_CONFIG.getWhatsAppUrl(
    WHATSAPP_CONFIG.phoneNumber,
    WHATSAPP_CONFIG.message
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      className="fixed bottom-8 right-8 z-40"
      title="Chat with the Artist"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 rounded-full border-2 border-charcoal text-charcoal bg-white transition-all duration-300 hover:shadow-lg hover:scale-110 active:scale-95"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-6 h-6 stroke-[1.5]" />
        <motion.span
          initial={{ opacity: 0, x: 10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute right-full mr-3 px-3 py-1 bg-charcoal text-white text-sm rounded whitespace-nowrap pointer-events-none"
        >
          Chat with the Artist
        </motion.span>
      </a>
    </motion.div>
  );
}
