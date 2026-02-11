# Nisarga Fresh - Premium Fruit Import/Export Website

A modern, responsive website for a premium fruit import/export business built with React.js, Tailwind CSS, and Framer Motion.

## 🍊 Features

- **5 Main Pages**: Home, Products, Services, About Us, Contact
- **5 Premium Fruits**: Valencia Orange, Gold Cavendish Banana, Heritage Kiwi, Ruby Strawberry, Crisp Fuji Apple
- **Smooth Animations**: Powered by Framer Motion
- **Fully Responsive**: Mobile-first design approach
- **Modular Architecture**: Reusable components for easy maintenance
- **Consistent Branding**: Unified color scheme and design across all pages

## 🎨 Color Theme

- **Primary**: #1A4325 (Deep Forest Green)
- **Secondary**: #0D1A10 (Darker Forest Green)
- **Accent**: #C5A059 (Muted Gold)
- **Gold Light**: #E5C185 (Light Gold)
- **Background**: #FDFCF8 (Off-white/Cream)

## 🛠️ Technologies Used

- **React.js 18** - Frontend framework
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Vite** - Build tool and dev server

## 📁 Project Structure

```
nisarga-fresh/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Reusable navigation component
│   │   └── Footer.jsx          # Reusable footer component
│   ├── pages/
│   │   ├── Home.jsx            # Home page
│   │   ├── Products.jsx        # Products listing page
│   │   ├── Services.jsx        # Services page
│   │   ├── About.jsx           # About Us page
│   │   └── Contact.jsx         # Contact page
│   ├── App.jsx                 # Main app component with routing
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── public/                     # Static assets
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── tailwind.config.js          # Tailwind configuration
├── vite.config.js              # Vite configuration
├── postcss.config.js           # PostCSS configuration
└── README.md                   # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or extract the project files**

2. **Navigate to the project directory**
   ```bash
   cd nisarga-fresh
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📄 Pages Overview

### 1. Home Page (`/`)
- Hero section with call-to-action
- Company statistics
- Featured fruits showcase
- Services preview
- Smooth scroll animations

### 2. Products Page (`/products`)
- 5 premium fruit products:
  - Valencia Orange
  - Gold Cavendish Banana
  - Heritage Kiwi
  - Ruby Strawberry
  - Crisp Fuji Apple
- Detailed product cards with hover effects
- Custom sourcing inquiry section
- Certifications display

### 3. Services Page (`/services`)
- Advanced Logistics
- Quality Assurance
- Market Intelligence
- Additional service features
- CTA section for partnership

### 4. About Us Page (`/about`)
- Company history and mission
- Core values
- Global network showcase
- Client portal access

### 5. Contact Page (`/contact`)
- Partnership inquiry form
- Office locations
- Contact information
- Private consultation booking

## 🧩 Reusable Components

### Navbar Component
- Sticky navigation
- Active link highlighting
- Responsive mobile menu
- Consistent across all pages

### Footer Component
- Brand information
- Quick links
- Newsletter subscription
- Social media links
- Consistent across all pages

## 🎭 Animations

All pages feature smooth entrance animations using Framer Motion:
- Fade in effects
- Slide transitions
- Hover interactions
- Scroll-triggered animations

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎨 Customization

### Changing Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#1A4325',
  accent: '#C5A059',
  // Add your custom colors
}
```

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add route in `App.jsx`
3. Add navigation link in `Navbar.jsx`

### Modifying Content

Each page component contains its content as JavaScript objects, making it easy to modify text, images, and data.

## 📦 Dependencies

### Production Dependencies
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `react-router-dom`: ^6.20.0
- `framer-motion`: ^10.16.16
- `lucide-react`: ^0.294.0

### Development Dependencies
- `vite`: ^5.0.8
- `tailwindcss`: ^3.3.6
- `autoprefixer`: ^10.4.16
- `postcss`: ^8.4.32

## 🌟 Features Highlights

- ✅ Modern and clean design
- ✅ Smooth animations and transitions
- ✅ SEO-friendly structure
- ✅ Fast loading times with Vite
- ✅ Accessible components
- ✅ Easy to maintain and extend
- ✅ Production-ready code

## 📝 Code Quality

- Component-based architecture
- Clean and readable code
- Consistent naming conventions
- Modular and reusable components
- Well-structured file organization

## 🔄 Future Enhancements

Potential additions:
- Shopping cart functionality
- User authentication
- Blog section
- Multi-language support
- Dark mode toggle
- Advanced search and filters
- Integration with backend API

## 📞 Support

For questions or issues, please contact:
- Email: trade@nisargafresh.com
- Website: Contact form on `/contact` page

## 📄 License

This project is created for Nisarga Fresh.

## 🙏 Acknowledgments

- Design inspiration from premium export/import websites
- Icons by Lucide React
- Fonts by Google Fonts (Playfair Display & Inter)
- Images from Unsplash

---

**Built with ❤️ using React.js, Tailwind CSS, and Framer Motion**
