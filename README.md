# Artist Portfolio Web App

A refined, emotionally calm web application for a professional painter to showcase original artworks and manage them through a private admin panel. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

### Public Website

- **Home Page**: Full-screen hero artwork with slow fade-in animation, artist name, philosophy line, and featured works
- **Gallery Page**: Masonry/grid layout with filters for medium, year, and status
- **Painting Detail Page**: Immersive artwork display with zoom functionality, detailed information, and inquiry options
- **About Page**: Artist biography, portrait, and practice philosophy
- **Contact Page**: Contact form, studio information, and quick action links
- **WhatsApp Integration**: Fixed floating icon on all pages for easy communication (ready for API integration)

### Admin Panel

- **Secure Authentication**: Login system with demo credentials
- **Dashboard**: Comprehensive painting management interface
- **Add/Edit Paintings**: Form-based CRUD operations with:
  - Title, medium, year, dimensions
  - Price and status (available/sold/hidden)
  - Description
  - Multiple image URLs with preview
  - Publish/unpublish toggle
- **Image Management**: Preview images before saving, remove images easily
- **Real-time Updates**: All changes reflected immediately

## 🎨 Design Philosophy

- **Color Palette**: Warm white backgrounds, soft beige and light stone tones, muted greys, charcoal accents
- **Typography**: Crimson Text (serif) for artwork titles and headings, Inter (sans-serif) for UI text
- **Animations**: Subtle page transitions (200-400ms), scroll reveals, gentle hover effects
- **Visual Language**: High negative space, calm rhythm, editorial feel

## 🛠️ Tech Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS with custom theme
- **Animations**: Framer Motion
- **Icons**: Lucide React (outline style)
- **Routing**: React Router v7
- **State Management**: React Context API
- **Build Tool**: Vite

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd artistsWebApp

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔐 Demo Credentials

**Admin Login:**
- Username: `admin`
- Password: `admin123`

## 📁 Project Structure

```
artistsWebApp/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable components
│   │   ├── PublicLayout.tsx
│   │   ├── WhatsAppIcon.tsx
│   │   └── ProtectedRoute.tsx
│   ├── context/            # React Context providers
│   │   ├── AuthContext.tsx
│   │   └── PaintingContext.tsx
│   ├── pages/              # Page components
│   │   ├── Home.tsx
│   │   ├── Gallery.tsx
│   │   ├── PaintingDetail.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Login.tsx
│   │   └── AdminDashboard.tsx
│   ├── types/              # TypeScript type definitions
│   │   └── index.ts
│   ├── App.tsx             # Main app with routing
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── index.html
├── package.json
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

## 🎯 Key Components

### WhatsApp Integration

The WhatsApp icon component is configured in `src/components/WhatsAppIcon.tsx` with a config object that can be easily updated:

```typescript
const WHATSAPP_CONFIG = {
  phoneNumber: '+1234567890', // Update with actual number
  message: 'Hello, I\'m interested in your artwork.',
  getWhatsAppUrl: (phone: string, message: string) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phone}?text=${encodedMessage}`;
  },
};
```

### Data Model

Paintings are stored with the following structure:

```typescript
interface Painting {
  id: string;
  title: string;
  medium: string;
  year: number;
  dimensions: string;
  price: number;
  description: string;
  images: string[];
  status: 'available' | 'sold' | 'hidden';
  published: boolean;
  createdAt: Date;
}
```

## 🚀 Deployment

This app can be deployed to any static hosting service:

- **Vercel**: `vercel --prod`
- **Netlify**: Connect repository and deploy
- **GitHub Pages**: Build and deploy to `gh-pages` branch

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  cream: { /* ... */ },
  stone: { /* ... */ },
  charcoal: '#2a2a2a',
}
```

### Fonts

Update `src/index.css` to change fonts:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');
```

### Artist Information

Update artist details in:
- `src/pages/Home.tsx` - Hero section
- `src/pages/About.tsx` - Biography and portrait
- `src/pages/Contact.tsx` - Contact information

## 🔄 Future Enhancements

- WhatsApp Business API integration
- Backend integration for persistent data storage
- Image upload to cloud storage (Cloudinary, AWS S3)
- Email integration for contact form
- Blog/journal section
- Exhibition history
- Client testimonials section
- Multi-language support

## 📝 License

This project is private and proprietary.

## 🤝 Support

For questions or support, contact the development team.

---

**Built with care for artists who value thoughtful, calm digital experiences.**
