import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './FigmaProjectDetail.css';

const FigmaProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  // Sample Figma projects data
  const figmaProjects = {
    'modern-todo-app': {
      title: "Modern Todo App",
      description: "Complete design system for personal portfolio with modern UI components, color schemes, and typography guidelines.",
      figmaUrl: "https://embed.figma.com/design/RwcSpDIk9blkHvAwOT6j2u/Untitled?node-id=0-1&embed-host=share",
      technologies: ["Figma", "Design Systems", "UI/UX", "Typography"],
      category: "design"
    },
    'futsal-app-concept': {
      title: "Futsal App Concept",
      description: "Comprehensive mobile application interface design with screens for onboarding, dashboard, and user profiles.",
      figmaUrl: "https://embed.figma.com/design/hOXxSBRK7MIItBNwlDaufY/Untitled?embed-host=share" ,
      technologies: ["Figma", "Mobile Design", "Prototyping", "User Flow"],
      category: "design"
    },
    'spotify-clone': {
      title: "Spotify Clone",
      description: "Modern dashboard design for data visualization with charts, metrics, and responsive layouts.",
      figmaUrl: "https://embed.figma.com/design/WimN2RTBdQZWeLc1RCUsN0/Untitled?embed-host=share",
      technologies: ["Figma", "Dashboard Design", "Data Visualization", "Responsive"],
      category: "design"
    },
    'e-commerce-ui': {
      title: "E-commerce Platform",
      description: "Complete e-commerce website design with product pages, checkout flow, and user account management.",
      figmaUrl: "https://embed.figma.com/design/Epyh9MhvMjzlEqYzUaTZqj/Untitled?embed-host=share",
      technologies: ["Figma", "E-commerce", "User Experience", "Conversion"],
      category: "design"
    }
  };

  const project = figmaProjects[projectId];

  if (!project) {
    return (
      <div className="figma-detail-container">
        <div className="error-message">
          <h2>Project not found</h2>
          <button onClick={() => navigate('/')} className="back-button">
            ← Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="figma-detail-container">
      <div className="figma-header">
        <button onClick={() => navigate('/')} className="back-button">
          ← Back to Projects
        </button>
        
        <div className="project-info">
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          
          <div className="project-tech">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="figma-embed-container">
        <iframe
          style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
          width="100%"
          height="600"
          src={project.figmaUrl}
          allowFullScreen
          title={project.title}
        ></iframe>
      </div>

      <div className="project-actions">
        <a 
          href={project.figmaUrl.replace('embed.figma.com/design', 'figma.com/file')} 
          target="_blank" 
          rel="noopener noreferrer"
          className="figma-link"
        >
          Open in Figma →
        </a>
      </div>
    </div>
  );
};

export default FigmaProjectDetail;