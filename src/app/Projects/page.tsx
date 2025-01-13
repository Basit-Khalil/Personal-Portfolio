// pages/index.tsx
import React from 'react';
import Projects from '../components/Projects';

const Home: React.FC = () => {
  return (
    <div>
        <h1 className='my-projects'>My Projects</h1>
      <main>
        <Projects />
      </main>
    </div>
  );
};

export default Home;

