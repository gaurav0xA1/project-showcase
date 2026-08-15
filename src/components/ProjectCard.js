import React, { useState } from 'react';
import './ProjectCard.css';

const ProjectCard = ({ 
  title, 
  description, 
  image,
  thumbnail,
  video,
  technologies, 
  liveUrl, 
  githubUrl,
  projectType = 'web',
  figmaId,
  featured = false,
  navigate,
  onMediaOpen
}) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const displayImage = thumbnail || image;
  
  const handleDemoClick = () => {
    if (projectType === 'figma' && figmaId) {
      navigate(`/figma/${figmaId}`);
      return;
    }

    if ((projectType === 'video' || projectType === 'graphics' || video) && onMediaOpen) {
      onMediaOpen({ title, description, image, thumbnail, video, projectType });
      return;
    }

    if (liveUrl) {
      window.open(liveUrl, '_blank');
    }
  };

  const handleGithubClick = (e) => {
    e.stopPropagation();
    if (window.innerWidth <= 768 && !showOverlay) {
      setShowOverlay(true);
      return;
    }
    if (githubUrl && githubUrl !== '#') {
      window.open(githubUrl, '_blank');
    }
  };
  
  const handleDemoClickWrapper = (e) => {
    e.stopPropagation();
    if (window.innerWidth <= 768 && !showOverlay) {
      setShowOverlay(true);
      return;
    }
    handleDemoClick();
  };
  
  const handleCardClick = () => {
    if ((projectType === 'video' || projectType === 'graphics' || video) && onMediaOpen) {
      onMediaOpen({ title, description, image, thumbnail, video, projectType });
      return;
    }

    if (window.innerWidth <= 768) {
      setShowOverlay(!showOverlay);
    }
  };
  
  return (
    <div className={`project-card ${featured ? 'featured' : ''}`}>
      <div className="project-image" onClick={handleCardClick}>
        {video ? (
          <video
            className="project-video"
            src={video}
            poster={displayImage}
            playsInline
            preload="metadata"
            muted
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        ) : (
          <img 
            src={displayImage} 
            alt={title}
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/400x200?text=" + encodeURIComponent(title);
            }}
          />
        )}
        <div className={`project-overlay ${showOverlay ? 'show-overlay' : ''}`}>
          <div className="project-links">
            {(liveUrl || video || (projectType === 'figma' && figmaId) || projectType === 'video' || projectType === 'graphics') && (
              <button onClick={handleDemoClickWrapper} className="btn-primary">
                {projectType === 'figma' ? 'View Design' : projectType === 'video' ? 'Play Video' : projectType === 'graphics' ? 'View Graphic' : video ? 'Play Video' : 'Live Demo'}
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