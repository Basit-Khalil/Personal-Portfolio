import React from 'react';

function Page() {
  return (
    <div className="aboutcontainer">
      <div className="about-wrapper">
        <div className="image-container">
          <img src="/profile.jpg" alt="Basit Khalil" className="profile-img" />
        </div>
        <div className="text-container">
          <h1 className="aboutme">About Me</h1>
          <p className="intro">
            <p>I'm BASIT KHALIL, a passionate and ambitious student currently pursuing a Bachelor of Business Administration 
              (BBA), with a focus on combining technology, business, and entrepreneurship. As a dedicated learner, 
              I am actively expanding my skills through various exciting courses and real-world projects.</p>
            <p>I am currently enrolled in the Governor Initiative Course, where I’m delving deep into the fascinating worlds of
              Artificial Intelligence, Web 3.0, and the Metaverse. These cutting-edge fields are shaping the future, and 
              I’m committed to mastering them to stay ahead in the rapidly evolving tech landscape.</p>
            <p>I’m also a certified Shopify Expert, running multiple successful e-commerce stores. I specialize in building and 
              optimizing online stores, creating seamless shopping experiences, and driving business growth through technology.</p>
            <p>With a keen interest in both the tech and business worlds, I’m constantly looking for innovative ways to 
              integrate AI and Web 3.0 technologies into e-commerce to create more personalized and immersive customer 
              experiences. Whether it’s building the next wave of decentralized applications or managing a fully automated 
              e-commerce platform, I’m always up for the challenge.</p>
            <p>What excites me? The intersection of business, technology, and creativity. I’m here to create, innovate, and 
              learn every single day.</p>
          </p>


      {/* Download Resume Button */}
      <div className="download-btn-container">
        <a 
          href="/" 
          download="Basit_Khalil_Resume.pdf"
          className="download-btn"
        >
          Download Resume
        </a>
      </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

