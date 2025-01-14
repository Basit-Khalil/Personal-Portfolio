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
    setIsMenuOpen(prevState => !prevState); // Toggle state between true and false
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      {/* Hamburger Icon (only on small screens) */}
      <div className="hamburger-icon md:hidden flex items-center" onClick={toggleMenu}>
        {isMenuOpen ? <IoClose /> : <HiMenu />}
      </div>

      {/* Logo */}
      <h1 className="logo text-center md:text-left">Basit Khalil</h1>

      {/* Navigation Links */}
      <nav className={`nav ${isMenuOpen ? 'open' : ''} md:flex md:space-x-6`}>
        <Link href="/Home" onClick={closeMenu}>Home</Link>
        <Link href="/About" onClick={closeMenu}>About</Link>
        <Link href="/Projects" onClick={closeMenu}>Projects</Link>
        <Link href="/Skills" onClick={closeMenu}>Skills</Link>
        <Link href="/Contact" onClick={closeMenu}>Contact</Link>
      </nav>

      {/* Social Media Icons */}
      <div className="socialmedia md:flex hidden space-x-4">
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

