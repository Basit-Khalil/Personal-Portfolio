import React from 'react'
import Link from 'next/link';
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";

function Name() {
  return (
    <div>
      <section>
      <h1 className="secname">Basit Khalil</h1>
      <div className="secsocial md:flex hidden">
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
      </section>
    </div>
    
  )
}

export default Name
