'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";  
import { IoClose } from "react-icons/io5";  
import "@fontsource/great-vibes"; 

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      {/* Hamburger Icon (only on small screens) */}
      <div className="hamburger-icon md:hidden flex items-center" onClick={toggleMenu}>
        {isMenuOpen ? (
          <IoClose />
        ) : (
          <HiMenu />
        )}
      </div>

      {/* Logo (should be next to hamburger on small screens, centered) */}
      <h1 className="logo">Basit Khalil</h1>

      {/* Navigation Links */}
      <nav className={`nav ${isMenuOpen ? 'open' : ''} md:flex`}>
        <Link href="/Home">Home</Link>
        <Link href="/About">About</Link>
        <Link href="/Projects">Projects</Link>
        <Link href="/Skills">Skills</Link>
        <Link href="/Contact">Contact</Link>
      </nav>

      {/* Social Media Icons */}
      <div className="socialmedia md:flex hidden">
        <Link href="/">
          <TiSocialFacebook />
        </Link>
        <Link href="/">
          <IoLogoInstagram />
        </Link>
        <Link href="https://www.linkedin.com/in/basit-khalil-261075214/">
          <IoLogoLinkedin />
        </Link>
      </div>
    </header>
  );
}

export default Header;
