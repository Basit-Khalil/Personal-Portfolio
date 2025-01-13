import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";



function Page() {
  return (
    <div className='contactcontainer'>
    <div>
      <h1 className='contact'>Get In Touch</h1>
      <p className='work'>Let&apos;s Work Together</p>
      <div className='social'>
      <div className="mail">
        
        <a href="emailto:basitahmed04711@gmail.com">
          <MdOutlineEmail />
        </a>
      </div>
      <div className="mail">
        
        <a href="https://github.com/Basit-Khalil">
        <FaGithub />
        </a>
      </div>
      <div className="mail">
        
        <a href="https://www.linkedin.com/in/basit-khalil-261075214">
        <FaLinkedin />
        </a>
    </div>
      </div>
      <section id="contact">
        <form className="interactive-form">
        <h2>Contact Me</h2>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
      </div>
    </div>
  );
}

export default Page;
