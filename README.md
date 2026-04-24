# Modern Professional Portfolio Website

A stunning, fully-responsive portfolio website built for a Fullstack Web Developer with smooth animations, interactive components, and a modern dark theme design.

## 🌟 Features

### Design
- **Dark Theme** with cyan and pink accent colors (#00d4ff and #ff006e)
- **Fully Responsive** - Desktop, tablet, and mobile optimized
- **Smooth Animations** - Scroll-reveal effects, hover animations, and transitions
- **Modern Typography** - Clear visual hierarchy and professional appearance

### Sections

1. **Hero/Home Section**
   - Large professional avatar with glow effect
   - Animated introduction text with gradient styling
   - Call-to-action buttons: "Hire Me" and "My Works"
   - Particle effect background animation
   - Animated scroll indicator

2. **About Me**
   - Personal details display (Name, DOB, Address, Email, Phone)
   - Animated counters (Projects, Clients, Experience, Technologies)
   - Download CV button
   - Interactive information cards with hover effects

3. **Experience/Education**
   - Timeline layout with alternating left-right animations
   - Experience and education entries
   - Animated timeline indicators
   - Fade-in animations on scroll

4. **Services**
   - Grid of 4 service cards (Web Development, Cloud, Testing, Big Data)
   - Hover animations with glowing borders
   - Icon animations and gradient overlays
   - Smooth scale and shadow transitions

5. **Skills**
   - Categorized skills (Frontend, Backend, Tools)
   - Animated progress bars filling on scroll
   - Percentage display with smooth transitions
   - Multiple skill categories with different highlight colors

6. **Projects**
   - Filterable portfolio gallery
   - Categories: Web Apps, Cloud, Big Data, Testing
   - Hover zoom-in effects
   - Modal popup with project details
   - External links and GitHub repository links

7. **Blog**
   - Card-based layout for blog posts
   - Category badges and metadata
   - Hover effects and smooth transitions
   - "Read More" links with animations

8. **Contact**
   - Animated contact form with input focus effects
   - Contact information display
   - Social media icons with hover glow
   - Map placeholder
   - Form validation and smooth transitions

9. **Navbar**
   - Sticky navigation with scroll effect
   - Active section indicator
   - Mobile-responsive hamburger menu
   - Logo and CTA button

10. **Footer**
    - Organized footer links
    - Social media connections
    - Back-to-top button with smooth scroll
    - Copyright information

## 🛠️ Tech Stack

- **Frontend**: React 19+ with TypeScript
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Build Tool**: Vite 8
- **Icons**: React Icons
- **Additional Libraries**: AOS (Animate On Scroll)

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚀 Getting Started

1. The development server runs on `http://localhost:5173/`
2. Edit components in `src/components/` directory
3. Update personal information in individual component files
4. Customize colors in `tailwind.config.js`
5. Modify animations in component `motion` props

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero/Home section
│   ├── About.tsx           # About me section
│   ├── experience.tsx     # Experience timeline
│   ├── Services.tsx        # Services offered
│   ├── Skills.tsx          # Skills section
│   ├── Projects.tsx        # Portfolio gallery
│   ├── Blog.tsx            # Blog posts
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer
├── App.tsx                 # Main app component
├── index.css               # Global styles & animations
└── main.tsx                # Entry point
```

## 🎨 Customization

### Change Colors
Edit `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      dark: "#0a0a0a",      // Main background
      darker: "#050505",    // Secondary background
      accent: "#00d4ff",    // Primary accent (cyan)
      accentSecond: "#ff006e", // Secondary accent (pink)
    },
  },
},
```

### Modify Content
- **Personal Info**: Update component states and text
- **Projects**: Add/remove projects in component arrays
- **Skills**: Update skill names and percentages
- **Blog**: Add new blog post entries

### Animation Speed
Adjust Framer Motion `transition` values in components (duration in seconds)

## 📱 Responsive Design

- Mobile-first approach
- Tailwind CSS breakpoints
- Mobile menu toggle
- Optimized for all screen sizes

## ✨ Animations Included

- Fade-in/fade-out transitions
- Slide animations (left, right, up)
- Scale and hover effects
- Staggered animations for lists
- Scroll-reveal animations
- Particle effects
- Animated progress bars
- Glowing borders and shadows

## 🔧 Build Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview built site
npm run preview

# Type checking
npm run lint
```

## 📄 License

This project is free to use and modify for personal or commercial purposes.

## 🤝 Support

For customization or modifications, feel free to edit the component files directly. Each component is well-commented and follows React best practices.

---

Built with ❤️ using React, Vite, and Framer Motion
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
