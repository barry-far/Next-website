# Barry Fardar Portfolio Website 🚀

This repository contains the open source version of my interactive portfolio website, built to showcase creative development and design skills using modern web technologies.

## Features ✨
- **3D Interactive Character**: Real-time rendered character using Three.js, with encrypted model loading and GSAP-driven animations.
- **Tech Stack Visualization**: Animated, physics-based tech stack display using React Three Fiber and Rapier physics.
- **Sections**: About, What I Do, Career, Work, Contact, and more, all with smooth transitions and creative UI.
- **Responsive Design**: Optimized for both desktop and mobile experiences.

## Tech Stack 🛠️
- **Frontend**: React, TypeScript, Vite
- **3D & Animation**: Three.js, @react-three/fiber, GSAP, WebGL
- **Physics**: @react-three/rapier
- **UI/UX**: CSS, custom animations, React Icons

## Getting Started 🚦

### Prerequisites
- Node.js (v18+ recommended)
- npm (v9+ recommended)

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production
```bash
npm run build
```

### Linting
```bash
npm run lint
```

## 3D Model & Decryption 🔒
- The main character model is stored as an **encrypted file** (`public/models/character.enc`).
- Decryption is handled at runtime in the browser using a password (`Character3D#@`).
- The model is loaded and animated with Three.js and GSAP.
- **Draco compression** is used; ensure the Draco decoder files are present in `public/draco/`.

## GSAP Club Plugins ⚠️
This project uses GSAP trial plugins for animation. **You cannot host the site with trial plugins.**
- For production/hosting, obtain Club GSAP plugins: [GSAP Club Plugins](https://gsap.com/docs/v3/Installation/)

## Project Structure
- `src/` — Main source code (components, context, assets)
- `public/models/` — 3D model files (encrypted)
- `public/draco/` — Draco decoder files for 3D decompression
- `public/images/` — Images and tech stack icons

## Preview
![Portfolio Preview](https://github.com/user-attachments/assets/3c4557e7-6392-4928-b8a9-7b2476ef4edd)

## License
This project is open source and available under the [MIT License](LICENSE).
