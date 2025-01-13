'use client'; // Ensure this is at the top for client-side rendering

import React, { useState, useEffect } from 'react';

function Page() {
  const [textIndex, setTextIndex] = useState(0);
  const [lineWidth, setLineWidth] = useState(0);

  const textArray = [
    'Marketer',
    'Programmer',
    'Social Media Manager',
    'Freelancer',

  ];

  useEffect(() => {
    // Change text every 4 seconds and reset line width
    const textChangeInterval = setInterval(() => {
      setLineWidth(0); // Reset the line width when changing text
      setTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 4000); // Change text every 4 seconds

    return () => clearInterval(textChangeInterval);
  }, [textIndex]);

  useEffect(() => {
    // Line fill animation when the text changes
    const lineFillInterval = setInterval(() => {
      setLineWidth((prevWidth) => {
        if (prevWidth < 100) return prevWidth + 2; // Fill the line gradually
        clearInterval(lineFillInterval);
        return prevWidth;
      });
    }, 30); // Speed of line filling

    return () => clearInterval(lineFillInterval);
  }, [textIndex]); // Restart line fill when text changes

  return (
    <div>
      <div className="profile-container flex flex-col items-center">
        <img
          src="/profile.jpg"
          alt="Profile Picture"
          className="profile-picture"
        />
        
        <h2 className="hi">Hi</h2>
        <div className='name-container'>
        <h2 className="name">I am Basit Khalil</h2>
        <h2 className="name fade-in">
          I am {' '}
          <span className="highlighted-container">
            <span className="highlighted">{textArray[textIndex]}</span>
            {/* Line under the active word */}
            <div
              className="animated-line"
              style={{ width: `${lineWidth}%` }}
            >
            </div>
          </span>
        </h2>
      </div>
    </div>
    </div>
  );
}

export default Page;