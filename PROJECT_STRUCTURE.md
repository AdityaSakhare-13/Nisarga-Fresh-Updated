# Project File Organization Guide

## 📂 How to Organize Your Files

After extracting/downloading all the files, organize them in the following structure:

```
fruitexport-pro/
│
├── public/                          # Create this folder for static assets
│   └── vite.svg                     # Default Vite logo (will be created)
│
├── src/                             # Create this folder and move these files here
│   ├── components/
│   │   ├── Navbar.jsx              ← Move here
│   │   └── Footer.jsx              ← Move here
│   │
│   ├── pages/
│   │   ├── Home.jsx                ← Move here
│   │   ├── Products.jsx            ← Move here
│   │   ├── Services.jsx            ← Move here
│   │   ├── About.jsx               ← Move here
│   │   └── Contact.jsx             ← Move here
│   │
│   ├── App.jsx                     ← Move here
│   ├── main.jsx                    ← Move here
│   └── index.css                   ← Move here
│
├── index.html                      ← Keep in root
├── package.json                    ← Keep in root
├── vite.config.js                  ← Keep in root
├── tailwind.config.js              ← Keep in root
├── postcss.config.js               ← Keep in root
├── .gitignore                      ← Keep in root
├── README.md                       ← Keep in root
└── PROJECT_STRUCTURE.md            ← This file (keep in root)
```

## 🔧 Step-by-Step Setup

### 1. Create the directory structure:

```bash
# In your project root directory, create these folders:
mkdir src
mkdir src/components
mkdir src/pages
mkdir public
```

### 2. Move files to their correct locations:

**Move to `src/` folder:**
- App.jsx
- main.jsx
- index.css

**Move to `src/components/` folder:**
- Navbar.jsx
- Footer.jsx

**Move to `src/pages/` folder:**
- Home.jsx
- Products.jsx
- Services.jsx
- About.jsx
- Contact.jsx

**Keep in root directory:**
- index.html
- package.json
- vite.config.js
- tailwind.config.js
- postcss.config.js
- .gitignore
- README.md

### 3. Install dependencies:

```bash
npm install
```

### 4. Start the development server:

```bash
npm run dev
```

## ✅ Verification Checklist

After organizing, verify your structure:

- [ ] `src/` folder exists
- [ ] `src/components/` contains Navbar.jsx and Footer.jsx
- [ ] `src/pages/` contains all 5 page files
- [ ] `src/` contains App.jsx, main.jsx, and index.css
- [ ] Root contains all config files
- [ ] `public/` folder exists (even if empty initially)

## 🚨 Common Issues

### Issue: "Cannot find module"
**Solution**: Make sure all files are in the correct directories as shown above.

### Issue: Tailwind styles not working
**Solution**: Ensure `tailwind.config.js` and `postcss.config.js` are in the root directory.

### Issue: Import errors
**Solution**: Check that the file paths in imports match the actual file locations.

## 📝 Notes

- The `node_modules/` folder will be created automatically when you run `npm install`
- The `dist/` folder will be created when you run `npm run build`
- Don't edit files in `node_modules/` or `dist/`

## 🎉 You're All Set!

Once files are organized and dependencies installed, your project is ready to run!

```bash
npm run dev
```

Visit http://localhost:3000 to see your website in action! 🚀
