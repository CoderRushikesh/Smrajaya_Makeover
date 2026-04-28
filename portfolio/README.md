# Rushikesh Kamble — Portfolio

Personal portfolio website built with React.js.

## 🚀 Live
[myselfrushi.netlify.app](https://myselfrushi.netlify.app)

## 🛠 Tech Stack
- React.js 18
- CSS3 (custom animations, CSS variables)
- Google Fonts (Syne + DM Sans)

## 📦 Setup

```bash
# Install dependencies
npm install

# Start dev server
npm start

# Build for production
npm run build
```

## 🌐 Deploy on Netlify

1. Push this folder to GitHub
2. Go to [netlify.com](https://netlify.com) → New site from Git
3. Build command: `npm run build`
4. Publish directory: `build`
5. Done!

## ✏️ Customization

- **Your photo**: Replace GitHub avatar URL in `App.js` → search for `CoderRushikesh` and replace with your image URL or import a local image
- **Resume link**: In `AboutSection`, replace the `href` on the "Download Resume" button with your actual Google Drive/Dropbox link
- **Projects**: Edit the `PROJECTS` array at the top of `App.js`
- **Skills**: Edit the `SKILLS` object in `App.js`
- **Colors**: Edit CSS variables in `src/index.css`

## 📁 Structure

```
src/
  App.js       ← All components + data
  App.css      ← All styles + animations
  index.js     ← Entry point
  index.css    ← Global styles + CSS variables
public/
  index.html   ← HTML template
  _redirects   ← Netlify SPA routing
```
