import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import './ProjectShowcase.css';

const ProjectShowcase = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeMedia, setActiveMedia] = useState(null);
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "Sajha Yatayat Tracker",
      description: "Web app to track Sajha buses in real-time using open map APIs. Features live location tracking and route optimization.",
      image: "/images/projects/sajha-tracker.png",
      technologies: ["JavaScript", "OpenMap API", "HTML", "CSS"],
      liveUrl: "https://sajha-app-concept.netlify.app/",
      githubUrl: "https://github.com/gaurav0xa1/sajha-concept",
      category: "web",
      featured: true
    },
    {
      id: 2,
      title: "DAG Builder",
      description: "Visual pipeline builder for real-time DAG management.",
      image: "/images/projects/dag-builder.png",
      technologies: ["React", "Node.js", "React Flow"],
      liveUrl: "https://pipeline-dagbuilder.vercel.app/",
      githubUrl: "https://github.com/gaurav0xA1/pipeline-dagbuilder?tab=readme-ov-file",
      category: "web"
    },
    {
      id: 3,
      title: "To Do List",
      description: "A minimalist to-do list with intuitive task management and local storage persistence.",
      image: "/images/projects/todo-app.png",
      technologies: ["JavaScript", "LocalStorage", "CSS3"],
      liveUrl: "https://fullstack-todo-kl83.vercel.app/",
      githubUrl: "https://github.com/gaurav0xA1/fullstack-todo",
      category: "web"
    },
    {
      id: 11,
      title: "Ruju Website",
      description: "Nepal’s premier AI-powered fact-checking platform using real-time data verification.",
      image: "/images/projects/ruju-fact.png",
      technologies: ["HTML", "CSS3", "JavaScript", "Glassmorphism"],
      liveUrl: "https://ruju-test.vercel.app/",
      githubUrl: "https://github.com/gaurav0xa1/glassmorphic-calculator",
      category: "web",
      featured: true
    },
    {
      id: 4,
      title: "Glassmorphic Calculator",
      description: "A sleek, modern calculator with Apple-inspired frosted glass UI effects.",
      image: "/images/projects/calculator.png",
      technologies: ["HTML", "CSS3", "JavaScript", "Glassmorphism"],
      liveUrl: "https://gaurav0xa1.github.io/glassmorphic-calculator/",
      githubUrl: "https://github.com/gaurav0xa1/glassmorphic-calculator",
      category: "web"
    },
    {
      id: 5,
      title: "Cafe Website",
      description: "Modern website for Chiya Sangam Cafe featuring menu, gallery, contact info, and an online reservation feature. Built for a seamless user experience and easy updates.",
      image: "/images/projects/chiya-sangam.png",
      technologies: ["React", "Reservation System", "CSS3"],
      liveUrl: "https://gaurav0xa1.github.io/chiya-sangam/",
      githubUrl: "#",
      category: "web"
    },
    {
      id: 8,
      title: "Spotify Clone",
      description: "Modern dashboard design for data visualization with charts, metrics, and responsive layouts.",
      image: "/images/projects/spotify-clone.png",
      technologies: ["Figma", "Dashboard Design", "Prototyping", "Responsive"],
      projectType: "figma",
      figmaId: "spotify-clone",
      category: "design"
    },
    {
      id: 9,
      title: "E-commerce Platform",
      description: "Complete e-commerce website design with product pages, checkout flow, and user account management.",
      image: "/images/projects/e-commerce-ui.png",
      technologies: ["Figma", "E-commerce", "Prototyping", "Conversion", "Responsive"],
      projectType: "figma",
      figmaId: "e-commerce-ui",
      category: "design",
      featured: true
    },
    {
      id: 6,
      title: "Modern Todo App",
      description: "Complete design system for personal portfolio with modern UI components, color schemes, and typography guidelines.",
      image: "/images/projects/modern-todo.png",
      technologies: ["Figma", "Dark Theme", "UI/UX"],
      projectType: "figma",
      figmaId: "modern-todo-app",
      category: "design"
    },
    {
      id: 7,
      title: "Futsal App Concept",
      description: "Comprehensive mobile application interface design with screens for onboarding, dashboard, and user profiles.",
      image: "/images/projects/mobile-futsal-app-ui.png",
      technologies: ["Figma", "Mobile Design", "User Flow"],
      projectType: "figma",
      figmaId: "futsal-app-concept",
      category: "design"
    },
    {
      id: 10,
      title: "Sajha UI",
      description: "Modern UI design system for Sajha application with comprehensive component library and design patterns.",
      image: "/images/projects/sajha-ui.png",
      technologies: ["Figma", "UI Design", "Design System", "Components"],
      projectType: "figma",
      figmaId: "sajha-ui",
      category: "design",
      featured: true
    },
    {
      id: 12,
      title: "Easy Ride",
      description: "Short-form promo video concept for a transportation brand with motion-driven storytelling.",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://res.cloudinary.com/yklvte2k/image/upload/v1786802946/Screenshot_2026-08-15_195238_1.png",
      video: "https://res.cloudinary.com/yklvte2k/video/upload/v1786799983/easyride.mp4",
      technologies: ["Video Editing", "Motion Graphics", "Brand Story"],
      projectType: "video",
      category: "video"
    },
    {
      id: 16,
      title: "Campaign Reel",
      description: "A product-style motion video with energetic transitions and strong visual rhythm.",
      image: "https://res.cloudinary.com/yklvte2k/image/upload/v1786803075/Screenshot_2026-08-15_195554.png0",
      thumbnail: "https://res.cloudinary.com/yklvte2k/image/upload/v1786803383/Screenshot_2026-08-15_195554_1.png",
      video: "https://res.cloudinary.com/yklvte2k/video/upload/v1786799952/0729.mp4",
      technologies: ["Editing", "Motion", "Storyboarding"],
      projectType: "video",
      category: "video"
    },
    {
      id: 14,
      title: "Campaign Reel",
      description: "A cinematic commercial-style video with clean transitions and marketing-focused pacing.",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://res.cloudinary.com/yklvte2k/image/upload/v1786803166/Screenshot_2026-08-15_195722.png",
      video: "https://res.cloudinary.com/yklvte2k/video/upload/v1786799903/AQO7fXio3Wc7ciirMjMrx3CUJ28dor46fGsmZrZwrqUm8TcGSreUElmPWAZdeZIC-iCPDewPZllTKM0_nsGwei39u7Uu6e9YKJL9_alBeZBIjg.mp4",
      technologies: ["After Effects", "Motion Design", "Video Editing"],
      projectType: "video",
      category: "video",
    },
    {
      id: 17,
      title: "Easy Ride 2",
      description: "A mobile-first social video with dynamic framing and polished pacing.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://res.cloudinary.com/yklvte2k/image/upload/v1786802756/Screenshot_2026-08-15_195022.png",
      video: "https://res.cloudinary.com/yklvte2k/video/upload/v1786799892/SnapSave_App_2316401662177261_1080p.mp4",
      technologies: ["Video Editing", "Social Content", "Mobile Reel"],
      projectType: "video",
      category: "video"
    },
    {
      id: 13,
      title: "Campaign Graphics",
      description: "Poster-style design assets and social media visuals built for digital branding work.",
      image: "https://res.cloudinary.com/yklvte2k/image/upload/v1786803834/Screenshot_2026-08-15_200817.png",
      thumbnail: "https://res.cloudinary.com/yklvte2k/image/upload/v1786803834/Screenshot_2026-08-15_200817.png",
      technologies: ["Illustrator", "Graphic Design", "Social Media", "Branding"],
      projectType: "graphics",
      category: "graphics"
    },
    {
      id: 18,
      title: "Campaign Graphic 201",
      description: "Additional campaign graphic asset.",
      image: "https://res.cloudinary.com/yklvte2k/image/upload/v1786804210/Screenshot_2026-08-15_201426.png",
      thumbnail: "https://res.cloudinary.com/yklvte2k/image/upload/v1786804210/Screenshot_2026-08-15_201426.png",
      technologies: ["Graphic Design", "Poster"],
      projectType: "graphics",
      category: "graphics"
    },
    {
      id: 19,
      title: "Campaign Graphic 202",
      description: "Additional campaign graphic asset.",
      image: "https://res.cloudinary.com/yklvte2k/image/upload/v1786804213/Screenshot_2026-08-15_201400.png",
      thumbnail: "https://res.cloudinary.com/yklvte2k/image/upload/v1786804213/Screenshot_2026-08-15_201400.png",
      technologies: ["Graphic Design", "Social Media"],
      projectType: "graphics",
      category: "graphics"
    },
    {
      id: 15,
      title: "Poster Set",
      description: "Sample design compositions for social posts and marketing collateral pieces.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://res.cloudinary.com/yklvte2k/image/upload/v1786803976/Screenshot_2026-08-15_201031.png",
      technologies: ["Poster Design", "Branding", "Social Media"],
      projectType: "graphics",
      category: "graphics"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'design', label: 'UI/UX' },
    { id: 'video', label: 'Video Work' },
    { id: 'graphics', label: 'Graphic Design' }
  ];

  const matchesSearch = (project) => {
    const text = [
      project.title,
      project.description,
      ...(project.technologies || [])
    ].join(' ').toLowerCase();

    return text.includes(searchTerm.toLowerCase());
  };

  const sectionConfig = [
    { id: 'web', label: 'Web Apps' },
    { id: 'design', label: 'UI/UX' },
    { id: 'video', label: 'Video Work' },
    { id: 'graphics', label: 'Graphic Design' }
  ];

  const filteredSections = sectionConfig
    .map(section => ({
      ...section,
      items: projects.filter(project => {
        const matchesCategory = filter === 'all' || project.category === filter;
        return project.category === section.id && matchesCategory && matchesSearch(project);
      })
    }))
    .filter(section => section.items.length > 0);

  const openMedia = (project) => setActiveMedia(project);
  const closeMedia = () => setActiveMedia(null);

  return (
    <div className={`project-showcase ${activeMedia ? 'media-open' : ''}`}>
      <div className="showcase-header">
        <div className="header-content">
          <h1>Project Showcase</h1>
          <p>Explore my latest projects and experiments in web development, design, and technology.</p>
        </div>
        
        <div className="showcase-controls">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="filter-tabs">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-tab ${filter === category.id ? 'active' : ''}`}
                onClick={() => setFilter(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="content-sections">
        {filteredSections.length > 0 ? (
          filteredSections.map(section => (
            <div key={section.id} className="media-section">
              <h2 className="section-title">{section.label}</h2>
              <div className="projects-grid">
                {section.items.map(project => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    thumbnail={project.thumbnail}
                    video={project.video}
                    technologies={project.technologies}
                    liveUrl={project.liveUrl}
                    githubUrl={project.githubUrl}
                    projectType={project.projectType}
                    figmaId={project.figmaId}
                    featured={project.featured}
                    navigate={navigate}
                    onMediaOpen={openMedia}
                  />
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <h3>No projects found</h3>
            <p>Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>

      {activeMedia && (
        <div className="media-modal-backdrop" onClick={closeMedia}>
          <div className="media-modal" onClick={(e) => e.stopPropagation()}>
            <button className="media-modal-close" onClick={closeMedia} aria-label="Close media preview">×</button>

            {activeMedia.video ? (
              <video
                className="media-modal-media"
                src={activeMedia.video}
                controls
                autoPlay
                playsInline
              />
            ) : (
              <img
                className="media-modal-media"
                src={activeMedia.thumbnail || activeMedia.image}
                alt={activeMedia.title}
              />
            )}

            <div className="media-modal-content">
              <h3 className="media-modal-title">{activeMedia.title}</h3>
              <p className="media-modal-description">{activeMedia.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectShowcase;