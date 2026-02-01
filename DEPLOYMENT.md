# Deployment Guide

## 📦 Deploying to GitHub Pages

1. **Enable GitHub Pages:**
   - Go to your repository Settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy when you push to main

2. **Your site will be available at:**
   ```
   https://kyberkritik.github.io/strudel-trance/
   ```

## 🌐 Other Deployment Options

### Netlify
1. Connect your GitHub repository to Netlify
2. No build command needed
3. Publish directory: `.` (root)
4. Deploy!

### Vercel
1. Import your GitHub repository
2. No build settings needed
3. Deploy!

### Cloudflare Pages
1. Connect your repository
2. No build command needed
3. Output directory: `/`
4. Deploy!

### Simple File Hosting
Just upload `index.html` to any web hosting service. It works as a standalone file with no dependencies!

## 🔧 Testing Locally

### Option 1: Python Server
```bash
python3 -m http.server 8080
# Open http://localhost:8080
```

### Option 2: Node.js Server
```bash
npm install
npm start
# Open http://localhost:3000
```

### Option 3: Direct File
Simply open `index.html` in your browser. It works without a server!

## ✅ What's Included

The webpage loads everything from CDN:
- Strudel REPL library (from unpkg.com)
- All audio synthesis capabilities
- No build step required
- No dependencies to install
- Works offline after first load (cached by browser)

## 🎵 Features

- ✅ Live code editor
- ✅ Real-time audio playback
- ✅ 6 example patterns
- ✅ Error messages
- ✅ Play/Stop controls
- ✅ Mobile responsive
- ✅ Works in all modern browsers
