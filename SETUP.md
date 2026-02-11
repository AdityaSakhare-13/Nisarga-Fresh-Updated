# 🍊 FruitExport Pro - React.js Website

Welcome to your complete fruit import/export website!

## 🎯 What You Have

A fully functional, modern React.js website with:
- ✅ 5 Pages: Home, Products, Services, About, Contact
- ✅ 5 Premium Fruits: Orange, Banana, Kiwi, Strawberry, Apple
- ✅ Smooth animations with Framer Motion
- ✅ Responsive design with Tailwind CSS
- ✅ Reusable components (Navbar & Footer)
- ✅ Consistent professional theme

## 🚀 Quick Start (3 Simple Steps)

### Step 1: Install Node.js (if not already installed)
Download from: https://nodejs.org/ (v16 or higher)

### Step 2: Install Dependencies
Open terminal in this folder and run:
```bash
npm install
```
Wait 2-3 minutes for packages to download.

### Step 3: Start the Website
```bash
npm run dev
```

### Step 4: Open Browser
Go to: **http://localhost:3000**

🎉 **That's it!** Your website is now running!

## 📂 Project Structure (Already Organized!)

```
fruitexport-pro/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       ✅ Navigation bar
│   │   └── Footer.jsx       ✅ Footer section
│   ├── pages/
│   │   ├── Home.jsx         ✅ Home page
│   │   ├── Products.jsx     ✅ Products page (5 fruits)
│   │   ├── Services.jsx     ✅ Services page
│   │   ├── About.jsx        ✅ About Us page
│   │   └── Contact.jsx      ✅ Contact page
│   ├── App.jsx              ✅ Main app with routing
│   ├── main.jsx             ✅ Entry point
│   └── index.css            ✅ Global styles
├── public/                   ✅ Static assets folder
├── index.html               ✅ HTML template
├── package.json             ✅ Dependencies
├── tailwind.config.js       ✅ Tailwind config
├── vite.config.js           ✅ Vite config
├── postcss.config.js        ✅ PostCSS config
└── README.md                ✅ Full documentation
```

## 🎨 Features

### Pages Overview:
1. **Home** (`/`) - Hero section, company stats, featured fruits
2. **Products** (`/products`) - All 5 fruits with detailed cards
3. **Services** (`/services`) - Logistics, quality, market intelligence
4. **About** (`/about`) - Company story, values, global network
5. **Contact** (`/contact`) - Contact form and office locations

### Technology Stack:
- React.js 18
- React Router DOM (navigation)
- Tailwind CSS (styling)
- Framer Motion (animations)
- Lucide React (icons)
- Vite (build tool)

### Design Features:
- Smooth scroll animations
- Hover effects
- Mobile responsive
- Professional color scheme (Forest Green + Gold)
- Modern typography (Playfair Display + Inter)

## 🛠️ Available Commands

```bash
# Start development server (hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check for code issues
npm run lint
```

## 📝 Customization

### Change Colors:
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#1A4325',    // Deep Forest Green
  accent: '#C5A059',     // Muted Gold
  // Change these to your brand colors
}
```

### Change Content:
- Edit page files in `src/pages/`
- Each page has its content as JavaScript objects
- Easy to modify text, images, and data

### Add New Page:
1. Create new file in `src/pages/NewPage.jsx`
2. Add route in `src/App.jsx`
3. Add navigation link in `src/components/Navbar.jsx`

### Replace Images:
Current images are from Unsplash (free stock photos).
To use your own:
1. Add images to `public/` folder
2. Reference as `/your-image.jpg` in components

## 🚀 Deployment

### Build for Production:
```bash
npm run build
```
This creates an optimized `dist/` folder.

### Deploy to:
- **Vercel** (Recommended): Import from GitHub
- **Netlify**: Drag & drop the `dist/` folder
- **GitHub Pages**: Use gh-pages package
- **Any Static Host**: Upload `dist/` folder contents

## 🐛 Troubleshooting

### "npm: command not found"
→ Install Node.js from https://nodejs.org/

### "Cannot find module"
→ Run `npm install` again

### Port 3000 already in use
→ Edit `vite.config.js` and change port to 3001

### Styles not loading
→ Make sure you ran `npm install` successfully

## 📚 Documentation

- **README.md** - Comprehensive documentation
- **QUICK_START.md** - Quick reference guide
- **PROJECT_STRUCTURE.md** - File organization details

## 💡 Tips

1. **Live Reload**: Edit files and see changes instantly in browser
2. **Console**: Check browser console (F12) for errors
3. **Terminal**: Keep terminal open to see build messages
4. **Ctrl+C**: Press in terminal to stop the dev server

## 🎓 Learning Resources

- React: https://react.dev/learn
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/
- Vite: https://vitejs.dev/guide/

## 📞 Support

Check the documentation files for detailed help:
- Full docs: README.md
- Quick help: QUICK_START.md
- File structure: PROJECT_STRUCTURE.md

## ✨ What's Next?

1. ✅ Run `npm install`
2. ✅ Run `npm run dev`
3. 🎨 Customize content and colors
4. 📸 Add your own images
5. 🚀 Build and deploy!

---

**Built with:** React.js ⚛️ | Tailwind CSS 🎨 | Framer Motion 🎬

**Happy Coding! 🍊✨**

---

Need help? Open an issue or check the documentation files included in this project.
