// components/Projects.tsx
import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    name: 'Resume Builder',
    description: 'A web app built with Html,CSS & TypeScript.',
    imageUrl: 'resume.jpg', // Replace with your actual image URLs
    demoUrl: 'https://resume-builder-pied-rho.vercel.app',
    techStack: ['html.svg','css.svg', 'typescript.svg'],
  },
  {
    name: 'Design Pop',
    description: 'A Multipage Website Using Nextjs & React',
    imageUrl: '/Screenshot 2025-01-07 014239.jpg',
    demoUrl: 'https://multipagewebsite-one.vercel.app',
    techStack: ['nextjs.svg','react.svg','css.svg' ,'typescript.svg', 'tailwindcss.svg'],
  },
  {
    name: 'Blog by Basit',
    description: 'A Multipage Website Using Nextjs & React',
    imageUrl: 'blog.jpg',
    demoUrl: 'https://multipagewebsite-one.vercel.app',
    techStack: ['nextjs.svg','typescript.svg','react.svg' ,'tailwindcss.svg','css.svg'],
  },

  
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
