# Khaoula Ghimouze — Portfolio

A beautiful, soft, and professional portfolio website built with **Vite + React + TypeScript + Tailwind CSS**.

## ✨ Features

- **Soft & Girly Design** — Blush, mauve, and cream color palette with elegant typography
- **Smooth Animations** — Framer Motion scroll-triggered animations and floating background shapes
- **Fully Responsive** — Looks great on mobile, tablet, and desktop
- **TypeScript** — Fully typed for reliability and developer experience
- **All Projects** — Showcases all 8 GitHub repositories with details
- **Contact Form** — Ready for Formspree integration
- **SEO Ready** — Proper meta tags and semantic HTML

## 🚀 Tech Stack

| Technology | Purpose |
|------------|---------|
| Vite | Build tool & dev server |
| React 18 | UI library |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations |
| Lucide React | Icons |

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/khaoula-ghz/khaoula-portfolio.git
cd khaoula-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🌐 Deployment on Vercel

### Option 1: Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### Option 2: GitHub Integration (Auto-deploy)

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"Add New Project"**
4. Import your GitHub repository
5. Vercel will auto-detect Vite — just click **Deploy**
6. Every push to `main` will auto-deploy!

### Option 3: Manual Upload

1. Build the project:
   ```bash
   npm run build
   ```
2. Go to [vercel.com](https://vercel.com)
3. Drag and drop the `dist/` folder

## 📝 Customization

### Update Contact Form
Replace `YOUR_FORM_ID` in `src/sections/Contact.tsx` with your Formspree form ID:
```tsx
action="https://formspree.io/f/YOUR_FORM_ID"
```
Get one free at [formspree.io](https://formspree.io)

### Update GitHub Stats
The project cards show star/fork counts. To make them dynamic, you could integrate the GitHub API.

### Update Colors
All colors are defined in `tailwind.config.js` under the custom color palette:
- `blush` — Pink tones
- `mauve` — Soft purple tones
- `cream` — Warm beige tones
- `sage` — Soft green tones

## 📁 Project Structure

```
khaoula-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── FloatingShapes.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   └── Contact.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Design System

### Colors
- **Primary**: Blush pink (`#e0527a`)
- **Secondary**: Mauve (`#a87e8e`)
- **Accent**: Cream (`#eec79a`)
- **Background**: Cream-50 (`#fefdfb`)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

## 📄 License

MIT License — feel free to use this as a template for your own portfolio!

---

Made with 💗 by Khaoula Ghimouze
