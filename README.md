# Elene Sturua — Chess-Themed Portfolio

A chess-themed interactive portfolio website built with Next.js 14, React, TypeScript, Tailwind CSS, and Framer Motion.

## 🎯 Features

- **Chess-based navigation**: Each portfolio section is represented by a chess piece
- **Interactive board**: Click on pieces to reveal content panels
- **Smooth animations**: Framer Motion-powered transitions and hover effects
- **Responsive design**: Adapts from desktop (4×2 grid) to mobile (2×4 grid)
- **Dark, luxe aesthetic**: Gold accents on dark background with film grain overlay

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles & CSS variables
├── components/
│   ├── Hero.tsx            # Hero section with floating pieces
│   ├── ChessBoard.tsx      # 4×2 navigation grid
│   ├── MoveHistory.tsx     # Chess notation display bar
│   ├── ContentPanel.tsx    # Animated content wrapper
│   ├── panels/             # Individual section panels
│   │   ├── ExperiencePanel.tsx
│   │   ├── ProjectsPanel.tsx
│   │   ├── SkillsPanel.tsx
│   │   ├── EducationPanel.tsx
│   │   ├── ResearchPanel.tsx
│   │   ├── HackathonsPanel.tsx
│   │   ├── AboutPanel.tsx
│   │   └── ContactPanel.tsx
│   ├── ui/                 # Reusable UI components
│   │   ├── ExperienceCard.tsx
│   │   ├── ProjectCard.tsx
│   │   └── SkillTile.tsx
│   └── data/
│       └── portfolio-data.ts  # All content data
```

## 🎨 Design System

### Colors

| Variable | Value | Usage |
|----------|-------|-------|
| `--bg-dark` | `#0a0a0a` | Main background |
| `--accent-gold` | `#d4a843` | Primary accent |
| `--accent-cream` | `#f5f0e1` | Primary text |
| `--text-muted` | `#9a8e7a` | Secondary text |

### Typography

- **Playfair Display**: Headings (serif)
- **Space Mono**: Labels, notation (monospace)
- **DM Sans**: Body text (sans-serif)

## 🚀 Deployment

The site is optimized for Vercel deployment:

```bash
# Deploy to Vercel
vercel
```

## 📝 Updating Content

All portfolio content is centralized in `src/components/data/portfolio-data.ts`. Update this file to modify:

- Experience entries
- Projects
- Skills
- Education
- Research
- Hackathons
- About section
- Contact information

## ♟️ Chess Piece Mappings

| Piece | Section |
|-------|---------|
| ♜ Rook | Experience |
| ♞ Knight | Projects |
| ♝ Bishop | Skills |
| ♛ Queen | Education |
| ♟ Pawn | Research |
| ♚ King | Hackathons |
| ♝ Bishop | About Me |
| ♜ Rook | Contact |

## 📄 License

MIT © Elene Sturua
