# 🚀 Quick Start Guide

Get your FruitExport Pro website running in 5 minutes!

## Prerequisites
- Node.js installed (v16 or higher) - [Download here](https://nodejs.org/)
- A code editor (VS Code recommended)
- Terminal/Command Prompt

## 📥 Installation Steps

### 1. Organize Project Files

Follow the structure in `PROJECT_STRUCTURE.md` or use this command:

```bash
# Create folders
mkdir -p src/components src/pages public

# Move files (if they're in the root)
# On Linux/Mac:
mv Navbar.jsx Footer.jsx src/components/
mv Home.jsx Products.jsx Services.jsx About.jsx Contact.jsx src/pages/
mv App.jsx main.jsx index.css src/

# On Windows (PowerShell):
# Move-Item -Path Navbar.jsx,Footer.jsx -Destination src/components/
# Move-Item -Path Home.jsx,Products.jsx,Services.jsx,About.jsx,Contact.jsx -Destination src/pages/
# Move-Item -Path App.jsx,main.jsx,index.css -Destination src/
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages (~2-3 minutes).

### 3. Start Development Server

```bash
npm run dev
```

### 4. Open Browser

Navigate to: **http://localhost:3000**

## 🎨 Available Scripts

```bash
# Development server (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📱 Quick Test

After starting the dev server, you should see:

✅ Home page with hero section
✅ Navigation bar at the top
✅ Click navigation links to test routing
✅ Smooth animations on scroll
✅ Footer at the bottom

## 🔧 Troubleshooting

### "npm: command not found"
**Fix**: Install Node.js from https://nodejs.org/

### "Cannot find module 'X'"
**Fix**: Run `npm install` again

### Port 3000 already in use
**Fix**: Edit `vite.config.js` and change the port number

### Styles not loading
**Fix**: Make sure `index.css` is in `src/` folder

## 📖 Next Steps

1. **Customize Content**: Edit page components in `src/pages/`
2. **Change Colors**: Modify `tailwind.config.js`
3. **Add Images**: Place in `public/` folder
4. **Deploy**: Build with `npm run build` and deploy `dist/` folder

## 🌐 Deployment Options

- **Vercel**: `npm run build` → Deploy `dist/` folder
- **Netlify**: `npm run build` → Deploy `dist/` folder
- **GitHub Pages**: Use `vite-plugin-gh-pages`
- **Any Static Host**: Upload contents of `dist/` folder

## 💡 Tips

- Edit files in `src/` - Changes auto-reload in browser
- Use `Ctrl+C` to stop the dev server
- Check `README.md` for full documentation
- Images use Unsplash links - replace with your own

## 📞 Need Help?

- Check `README.md` for detailed documentation
- Check `PROJECT_STRUCTURE.md` for file organization
- Review error messages in the terminal

---

**Happy Coding! 🍊✨**
