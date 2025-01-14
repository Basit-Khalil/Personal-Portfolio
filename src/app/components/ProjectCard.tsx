import React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  name: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
  techStack: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, imageUrl, demoUrl, techStack }) => {
  return (
    <div className="project-card">
      
      <Image
        src={imageUrl}
        alt={name}
        className="project-image"
        width={300} 
        height={200} 
      />
      
      <div className="project-content">
        <h3>{name}</h3>
        <p>{description}</p>
        <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="demo-link">
          Live Demo
        </a>
        <div className="tech-stack">
          {techStack.map((tech, index) => {
            // Create a dynamic image source path based on tech name
            const techIconSrc = `/icons/${tech.toLowerCase()}.svg`;

            return (
              <Image
                key={index}
                src={techIconSrc}
                alt={tech}
                width={30}   
                height={30}  
                className="tech-icon"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
