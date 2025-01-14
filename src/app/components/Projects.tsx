
import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    name: 'Resume Builder',
    description: 'A user-friendly resume builder web app that helps you create professional resumes quickly and easily.',
    imageUrl: '/resume.jpg', 
    demoUrl: 'https://resume-builder-pied-rho.vercel.app',
    techStack: ['html.svg','css.svg', 'typescript.svg'],
  },
  {
    name: 'Personal Portfolio',
    description: 'A sleek and responsive personal portfolio built with HTML, CSS,TypeScript and Next.js to showcase projects and skills.',
    imageUrl: '/portfolio.jpg', 
    demoUrl: 'https://personal-portfolio-alpha-smoky.vercel.app/',
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
    description: 'A dynamic blog website that allows users to read, and Comments interact with posts in an engaging and user-friendly interface.',
    imageUrl: '/blog.jpg',
    demoUrl: 'https://blog-website-milestone-3-41ah.vercel.app/',
    techStack: ['nextjs.svg','typescript.svg','react.svg' ,'tailwindcss.svg','css.svg'],
  },
  {
    name: 'UI/UX HACKATHONE',
    description: 'A Ui/Ux hackathone using figma design.',
    imageUrl: '/uiux hackathone.jpg',
    demoUrl: 'https://ui-ux-hackathone-delta.vercel.app/',
    techStack: ['nextjs.svg','tailwindcss.svg','typescript.svg','react.svg','css.svg'],
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
