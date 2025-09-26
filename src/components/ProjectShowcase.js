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
      image: "/images/projects/sajha-tracker-app.png",
      technologies: ["JavaScript", "OpenMap API", "HTML", "CSS"],
      liveUrl: "https://gaurav0xa1.github.io/sajha-concept/",
      githubUrl: "https://github.com/gaurav0xa1/sajha-concept",
      category: "web",
      featured: true
    },
    {
      id: 2,
      title: "Election Portal",
      description: "Mock digital election system with voter authentication and result visualization.",
      image: "/images/projects/election-portal.svg",
      technologies: ["React", "Node.js", "MongoDB", "JWT"],
      liveUrl: "https://anupbhattarai2.com.np/projects/project2.html",
      githubUrl: "#",
      category: "web"
    },
    {
      id: 3,
      title: "To Do List",
      description: "A minimalist to-do list with intuitive task management and local storage persistence.",
      image: "/images/projects/todo-app.png",
      technologies: ["JavaScript", "LocalStorage", "CSS3"],
      liveUrl: "https://gaurav0xa1.github.io/todoapp/",
      githubUrl: "https://github.com/gaurav0xa1/todoapp",
      category: "web"
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
      title: "Weather Dashboard",
      description: "Web app to check real-time weather, temperature, humidity, and conditions by city using OpenWeatherMap API.",
      image: "/images/projects/weather-app.svg",
      technologies: ["React", "API Integration", "CSS3"],
      liveUrl: "https://anupbhattarai2.com.np/projects/project2.html",
      githubUrl: "#",
      category: "web"
    },
    // UI/UX Design Projects

    
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
      id: 8,
      title: "Spotify Clone",
      description: "Modern dashboard design for data visualization with charts, metrics, and responsive layouts.",
      image: "/images/projects/spotify-clone.png",
      technologies: ["Figma", "Dashboard Design", "Prototyping", "Responsive"],
      projectType: "figma",
      figmaId: "spotify-clone",
      category: "design"
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