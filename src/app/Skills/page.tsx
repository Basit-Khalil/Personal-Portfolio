import React from 'react';
import Skills from '../components/Skills';
import SkillCard from '../components/SkillCard';

function Home() {
  const skills = [
    {
      logo: '/shopify.png',
      name: 'Shopify',
      description: 'Markup language for creating web pages.',
    },
    {
      logo: '/digtal marketing.png',
      name: 'Digital Marketing',
      description: 'Programming language for the web.',
    },
    {
      logo: '/html (2).png',
      name: 'HTML',
      description: 'Markup language for creating web pages.',
    },
    {
      logo: '/CSS-Logo-2011-removebg-preview.png',
      name: 'CSS',
      description: 'Programming language for the web.',
    },
    {
      logo: '/tailwind.png',
      name: 'Tailwind',
      description: 'Programming language for the web.',
    },
    {
      logo: '/nextjs.png',
      name: 'Next.js',
      description: 'Programming language for the web.',
    },
  ];

  return (
<div>
      <div className="skills">
        <Skills />
      </div>

      <div className="grid-container">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            logo={skill.logo}
            name={skill.name}
            description={skill.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
