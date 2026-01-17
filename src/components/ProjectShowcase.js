import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import './ProjectShowcase.css';

const ProjectShowcase = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Sample project data - you can replace this with real data
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
      description: "WModern website for Chiya Sangam Cafe featuring menu, gallery, contact info, and an online reservation feature. Built for a seamless user experience and easy updates.",
      image: "/images/projects/chiya-sangam.png",
      technologies: ["React", "Reservation System", "CSS3"],
      liveUrl: "https://gaurav0xa1.github.io/chiya-sangam/",
      githubUrl: "#",
      category: "web"
    },
    // UI/UX Design Projects
    
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
      technologies: ["Figma", "E-commerce", "Prototyping", "Conversion","Responsive"],
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
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'design', label: 'UI/UX' },
    { id: 'mobile', label: 'Mobile' }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = filter === 'all' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="project-showcase">
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

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
            projectType={project.projectType}
            figmaId={project.figmaId}
            featured={project.featured}
            navigate={navigate}
          />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="no-results">
          <h3>No projects found</h3>
          <p>Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </div>
  );
};

export default ProjectShowcase;