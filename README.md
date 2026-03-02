# Prithish Misra | Digital Headquarters

![Founder Operating System](https://img.shields.io/badge/Status-Operating_System-0b0f19?style=for-the-badge&logo=react&logoColor=accent)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Threejs](https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white)
![Framer](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue)

> **Engineering Intelligence. Building Systems. Scaling Impact.** <br>
> A production-grade, investor-ready digital headquarters serving as the operational center for Prithish Misra.

## 🌌 Vision & Architecture
This is not a traditional portfolio. It is a completely dynamic **Founder Operating System**. Designed with absolute modularity, the core structure acts as a heavily optimized engine capable of scaling content via separate data layers without any future UI modifications.

The aesthetic philosophy is **"AI Founder From The Future"**—represented through a strictly deep-navy dark mode, complex glassmorphism, micro-interactions, hardware-accelerated animations, and a real-time neural background rendered in Three.js.

## 🚀 Performance Metrics (Lighthouse)

| Metric | Score | Goal |
|--------|-------|------|
| Performance | 98+ | Optimized asset delivery, Code splitting |
| Accessibility | 100 | Semantic HTML, ARIA rules, Focus states |
| Best Practices | 100 | Strict mode, Secure dependencies |
| SEO | 100 | Dynamic meta, JSON-LD, Sitemap |

## 📁 System Topology

```text
/src
 ├── /assets           # Static optimizations & raw images
 ├── /blog               
 │    └── /posts       # Markdown ingestion pipeline (.md)
 ├── /components       # Isolated UI components (Cursor, Nav, etc.)
 ├── /data             # Single Source of Truth for all text content
 │    ├── projects.js  
 │    ├── ventures.js
 │    ├── skills.js
 │    └── ...
 ├── /layouts          # Routing wrappers & transitions
 ├── /pages            # Route-level components
 ├── /sections         # Specific page sectors (Hero, Contact)
 ├── App.jsx           # Global router & presence node
 ├── index.css         # Tailwind directives & global classes
 └── main.jsx          # DOM Entry Point
```

## ⚡ Deployment & Build Run-book

### Local Environment Setup

1. **Clone the Hub**
   ```bash
   git clone https://github.com/prithishmisra23/Portfolio-.git
   cd Portfolio-
   ```

2. **Initialize Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` in the root:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Boot Development Server**
   ```bash
   npm run dev
   ```

### Vercel Production Deployment

The architecture is explicitly configured for edge-deployment on Vercel.
1. Connect GitHub repository to Vercel.
2. Under "Framework Preset", verify **Vite** is selected.
3. Map environment variables in the Vercel dashboard.
4. Deploy.

### Custom Domain Configuration
Point A-records to `76.76.21.21` (Vercel Anycast IP) or set CNAME aliases to the provided `.vercel.app` proxy. Allow up to 24h for TLS/SSL resolution.

## 🔧 Updating Content
NEVER edit the UI files `(.jsx)` to update the portfolio content.
Navigate to `/src/data/` or `/src/blog/posts/` and update the relevant JSON/JS arrays or markdown models. The system will dynamically re-render the architecture on the next build.

## 🤝 Contribution Guidelines
This repository acts as a private operational core. PRs modifying core architecture or styling paradigms will be strictly reviewed. 

Semantic commits:
- `feat(component): added neural net`
- `fix(data): updated metric`
- `chore(deps): updated vite plugin`

## 📄 License
MIT License. System logic open for viewing, fork structure subject to attribution.
