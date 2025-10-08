# Funky Monkey - Adventure & Wellness Destination

A modern Next.js 15 website for Funky Monkey, a luxury adventure and wellness destination hotel.

## 🚀 Features

- **Next.js 15** with App Router
- **React 19** for the latest React features
- **Tailwind CSS** for styling
- **GSAP** for smooth animations
- **Static Export** ready for deployment
- **Responsive Design** for all devices
- **TypeScript Support** (optional)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.js            # Home page (/)
│   ├── location/          # Location page (/location)
│   ├── rooms/             # Rooms page (/rooms)
│   ├── hotel/             # Hotel page (/hotel)
│   ├── activities/        # Activities page (/activities)
│   ├── retreats/          # Retreats page (/retreats)
│   ├── offers/            # Offers page (/offers)
│   ├── faq/               # FAQ page (/faq)
│   ├── contact/           # Contact page (/contact)
│   ├── layout.js          # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Navbar.jsx         # Navigation component
│   ├── Footer.jsx         # Footer component
│   ├── Layout.jsx         # Page layout wrapper
│   ├── Button.jsx         # Button component
│   └── Card.jsx           # Card component
├── lib/                   # Utility functions
│   ├── utils.js           # General utilities
│   └── gsap.js            # GSAP animation utilities
├── assets/                # Static assets (images, icons, fonts)
└── styles/                # Additional styles if needed
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: JavaScript (JSX)
- **Styling**: Tailwind CSS
- **Animations**: GSAP
- **Icons**: Heroicons (via SVG)
- **Fonts**: Geist Sans & Geist Mono

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd funky-monkey
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Build and export static files

## 📄 Pages

- **Home** (`/`) - Landing page with overview
- **Location** (`/location`) - Hotel location and nearby attractions
- **Rooms** (`/rooms`) - Room types and pricing
- **Hotel** (`/hotel`) - Hotel amenities and services
- **Activities** (`/activities`) - Adventure activities and experiences
- **Retreats** (`/retreats`) - Wellness retreat programs
- **Offers** (`/offers`) - Special packages and deals
- **FAQ** (`/faq`) - Frequently asked questions
- **Contact** (`/contact`) - Contact information and form

## 🎨 Styling

The project uses Tailwind CSS for styling with custom configurations:

- Custom color variables for theming
- Responsive design utilities
- Custom scrollbar styling
- Smooth transitions and hover effects

## 🎬 Animations

GSAP is integrated for smooth animations:

- Scroll-triggered animations
- Hover effects
- Page transitions
- Parallax effects

## 📱 Responsive Design

The website is fully responsive and optimized for:

- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🚀 Deployment

The project is configured for static export and can be deployed to:

- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

To build for production:

```bash
npm run build
```

The static files will be generated in the `out` directory.

## 📝 Configuration

### Next.js Config

- `output: "export"` - Enables static export
- `images: { unoptimized: true }` - Disables image optimization for static export

### Tailwind Config

- Custom font families (Geist Sans & Mono)
- Custom color variables
- Responsive breakpoints

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support or questions, please contact:

- Email: info@funkymokey.com
- Phone: (123) 456-7890

---

Built with ❤️ using Next.js 15 and Tailwind CSS

# funky-monkey
