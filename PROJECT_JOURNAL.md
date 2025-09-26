# React Project Showcase Development Journal
**Date: September 23, 2025**  
**Project: Portfolio Project Showcase System**  
**Repository: [gaurav0xA1/project-showcase](https://github.com/gaurav0xA1/project-showcase)**  
**Live Site: [https://projects.anupbhattarai2.com.np/](https://projects.anupbhattarai2.com.np/)**

---

## 🎯 **Project Goals**
- Create a React-based project showcase system for portfolio integration
- Practice React development concepts
- Implement Figma design integration for UI/UX projects
- Deploy to GitHub Pages with custom domain

---

## 📅 **Development Timeline**

### **Phase 1: Project Setup & Analysis (Morning)**
- **Discovered existing React app** created via `npx create-react-app`
- **Analyzed portfolio website** at `anupbhattarai2.com.np`
- **Extracted design tokens** from the live site:
  - Colors: Dark theme (`#0a0a0a`, `#111111`, `#222222`, etc.)
  - Typography: `'Segoe UI', sans-serif`
  - Spacing: Consistent spacing scale
  - Animations: 0.3s transitions

### **Phase 2: Component Architecture (Mid-Morning)**
Created modular React component structure:
```
src/components/
├── ProjectShowcase.js      (Main container with search/filter)
├── ProjectCard.js          (Individual project display)
├── FigmaProjectDetail.js   (Figma viewer page)
└── *.css files            (Component styling)
```

### **Phase 3: Core Features Implementation**
#### **ProjectShowcase Component:**
- ✅ **Search functionality** - Filter by name, description, tech stack
- ✅ **Category filtering** - All, Web Apps, UI/UX, Mobile
- ✅ **Responsive grid layout** - Auto-fit, minimum 350px columns
- ✅ **Dark theme** matching portfolio aesthetic

#### **ProjectCard Component:**
- ✅ **Hover animations** - Transform and shadow effects
- ✅ **Image handling** - Error fallback to placeholder
- ✅ **Tech stack tags** - Visual technology indicators
- ✅ **Conditional buttons** - Different actions for web vs design projects

### **Phase 4: Figma Integration (Afternoon)**
#### **Requirements Analysis:**
- UI/UX projects need Figma embed instead of GitHub links
- Custom routing for dedicated project pages
- No GitHub buttons for design projects

#### **Implementation:**
- ✅ **React Router** installed and configured
- ✅ **FigmaProjectDetail** component with embedded iframe
- ✅ **Dynamic routing** `/figma/:projectId`
- ✅ **Navigation system** with back buttons
- ✅ **Project type differentiation** (web vs figma)

#### **Sample Projects Added:**
- **Web Projects:** Sajha Tracker, Election Portal, Todo App, Calculator, Weather Dashboard
- **Design Projects:** Portfolio Design System, Mobile App UI Kit, Analytics Dashboard, E-commerce Platform

### **Phase 5: Deployment & Domain Configuration**

#### **GitHub Pages Setup:**
```bash
npm install --save-dev gh-pages
```

#### **Package.json Configuration:**
- Added deployment scripts (`predeploy`, `deploy`)
- Configured homepage URL for GitHub Pages
- Used HashRouter for client-side routing compatibility

#### **Git Repository Management:**
```bash
git init
git add .
git commit -m "Initial commit: React project showcase with Figma integration"
git remote add origin https://github.com/gaurav0xA1/project-showcase.git
git push -u origin master
```

#### **Deployment Process:**
```bash
npm run deploy  # Builds and deploys to gh-pages branch
```

#### **Custom Domain Configuration:**
- **Issue:** White screen after custom domain setup
- **Root Cause:** Homepage path mismatch with custom domain
- **Solution:** Changed homepage from GitHub URL to relative path (`./`)
- **CNAME Configuration:** `projects.anupbhattarai2.com.np`

---

## 🛠️ **Technical Stack**

### **Frontend:**
- **React 19.1.1** - Component-based UI
- **React Router DOM 7.9.1** - Client-side routing
- **CSS3** - Custom styling with CSS variables
- **Responsive Design** - Mobile-first approach

### **Deployment:**
- **GitHub Pages** - Static site hosting
- **gh-pages** - Automated deployment
- **Custom Domain** - projects.anupbhattarai2.com.np
- **HTTPS** - Enforced through GitHub Pages

### **Development Tools:**
- **Create React App** - Build toolchain
- **Git** - Version control
- **NPM** - Package management

---

## 🎨 **Design System**

### **Color Palette:**
```css
--color-bg: #0a0a0a           /* Background */
--color-surface: #111111      /* Cards/containers */
--color-surface-hover: #222222 /* Hover states */
--color-border: #333333       /* Borders */
--color-text: #f4f4f4         /* Primary text */
--color-text-muted: #aaaaaa   /* Secondary text */
--color-link: #cccccc         /* Links */
--color-icon: #919494         /* Icons */
```

### **Typography:**
- **Primary Font:** 'Segoe UI', system-ui, sans-serif
- **Sizes:** Responsive scaling from 0.75rem to 3rem
- **Weight:** 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

### **Spacing Scale:**
- **4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 60px**

---

## 🚀 **Key Features Implemented**

### **Search & Filter System:**
- Real-time search across project titles, descriptions, and technologies
- Category-based filtering with visual active states
- Responsive filter tabs that wrap on mobile

### **Project Card System:**
- **Image Management:** Automatic fallback for missing images
- **Hover Effects:** Smooth transform and shadow animations
- **Technology Tags:** Visual representation of tech stack
- **Action Buttons:** Context-aware (Demo/GitHub vs View Design)

### **Figma Integration:**
- **Dedicated Pages:** Full-screen Figma embed experience
- **Navigation:** Seamless routing between showcase and detail views
- **Responsive Embeds:** Optimized for desktop and mobile viewing
- **External Links:** Direct access to Figma files

### **Responsive Design:**
- **Mobile-First:** Progressive enhancement for larger screens
- **Flexible Grid:** Auto-fit columns with minimum widths
- **Touch-Friendly:** Appropriate button sizes and spacing
- **Performance:** Optimized images and efficient CSS

---

## 🔧 **Problem-Solving Log**

### **Issue 1: Files Not Visible in VS Code**
- **Problem:** Only package.json showing in explorer
- **Solution:** Files were actually present, VS Code display issue

### **Issue 2: React Router on GitHub Pages**
- **Problem:** BrowserRouter not compatible with GitHub Pages
- **Solution:** Switched to HashRouter for client-side routing

### **Issue 3: Custom Domain White Screen**
- **Problem:** Site not loading after custom domain setup
- **Root Cause:** Homepage path pointing to GitHub subdirectory
- **Solution:** Changed homepage to relative paths (`./`)
- **Additional:** Added proper CNAME file configuration

### **Issue 4: Domain Name Confusion**
- **Problem:** Multiple domain variations during setup
- **Solution:** Confirmed actual domain: `projects.anupbhattarai2.com.np`

---

## 📁 **File Structure**

```
projects-showcase-ui/ux/
├── public/
│   ├── images/projects/        # Project screenshots
│   ├── CNAME                  # Custom domain configuration
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ProjectShowcase.js
│   │   ├── ProjectShowcase.css
│   │   ├── ProjectCard.js
│   │   ├── ProjectCard.css
│   │   ├── FigmaProjectDetail.js
│   │   └── FigmaProjectDetail.css
│   ├── App.js                 # Router configuration
│   ├── App.css
│   └── index.js
├── package.json               # Dependencies and scripts
└── README.md
```

---

## 🎯 **Learning Outcomes**

### **React Concepts Practiced:**
- **Component Composition** - Building reusable UI components
- **State Management** - useState for search and filter states
- **Event Handling** - User interactions and form inputs
- **Conditional Rendering** - Dynamic UI based on data
- **Props Drilling** - Data flow between components
- **React Router** - Single-page application navigation

### **Development Skills:**
- **Git Workflow** - Version control and repository management
- **Deployment Process** - GitHub Pages and custom domains
- **CSS Architecture** - Modular styling and responsive design
- **Problem Debugging** - Systematic issue resolution

### **Project Management:**
- **Requirements Analysis** - Understanding user needs
- **Feature Planning** - Breaking down complex functionality
- **Testing Process** - Validation across different scenarios

---

## 🚀 **Final Deployment**

### **Live URLs:**
- **Production Site:** https://projects.anupbhattarai2.com.np/
- **GitHub Repository:** https://github.com/gaurav0xA1/project-showcase
- **GitHub Pages (fallback):** https://gaurav0xa1.github.io/project-showcase

### **Deployment Commands:**
```bash
# Update and deploy
git add .
git commit -m "Description of changes"
git push origin master
npm run deploy
```

---

## 📈 **Future Enhancements**

### **Potential Features:**
- **Admin Panel** - Dynamic project management
- **Database Integration** - Backend API for project data
- **Advanced Filtering** - Date ranges, complexity levels
- **Animation Library** - Framer Motion for enhanced UX
- **Performance Optimization** - Image lazy loading, code splitting
- **SEO Enhancement** - Meta tags, Open Graph integration
- **Analytics Integration** - User behavior tracking

### **Technical Improvements:**
- **TypeScript Migration** - Type safety and better DX
- **Testing Suite** - Unit and integration tests
- **CI/CD Pipeline** - Automated testing and deployment
- **Performance Monitoring** - Core Web Vitals tracking

---

## 📝 **Project Statistics**

- **Total Development Time:** ~6 hours
- **Components Created:** 3 main components + CSS files
- **Technologies Used:** 5 primary technologies
- **Git Commits:** 6 commits
- **Deployment Attempts:** 4 (due to domain configuration)
- **Final Bundle Size:** ~75KB (gzipped)

---

## ✅ **Success Metrics**

- ✅ **Functional React Application** - Complete showcase system
- ✅ **Modern Design** - Matching portfolio aesthetic
- ✅ **Responsive Layout** - Mobile and desktop optimized
- ✅ **Live Deployment** - Successfully hosted with custom domain
- ✅ **Figma Integration** - Working embedded design viewer
- ✅ **Search & Filter** - Fully functional project discovery
- ✅ **Clean Code** - Modular, maintainable architecture

---

**Project Status: ✅ COMPLETED AND DEPLOYED**  
**Next Session Goal: Add real project images and refine content**