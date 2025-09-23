import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  technologies, 
  liveUrl, 
  githubUrl,
  projectType = 'web',
  figmaId,
  featured = false,
  navigate
}) => {
  
  const handleDemoClick = () => {
    if (projectType === 'figma' && figmaId) {
      navigate(`/figma/${figmaId}`);
    } else if (liveUrl) {
      window.open(liveUrl, '_blank');
    }
  };

  const handleGithubClick = () => {
    if (githubUrl && githubUrl !== '#') {
      window.open(githubUrl, '_blank');
    }
  };
  return (
    <div className={`project-card ${featured ? 'featured' : ''}`}>
      <div className="project-image">
        <img 
          src={image} 
          alt={title}
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/400x200?text=" + encodeURIComponent(title);
          }}
        />
        <div className="project-overlay">
          <div className="project-links">
            {(liveUrl || (projectType === 'figma' && figmaId)) && (
              <button onClick={handleDemoClick} className="btn-primary">
                {projectType === 'figma' ? 'View Design' : 'Live Demo'}
              </button>
            )}
            {projectType !== 'figma' && githubUrl && githubUrl !== '#' && (
              <button onClick={handleGithubClick} className="btn-secondary">
                GitHub
              </button>
            )}
          </div>
        </div>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        
        <div className="project-tech">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;