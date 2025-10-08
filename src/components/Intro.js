import React from 'react'
import './Intro.css'
import Hire from '../assets/hireme.png'
import reactLogo from '../assets/photo2.png'
import Resume from '../assets/resumeIcon.png';
import { Link } from 'react-scroll'

function Intro() {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/Lakshman_Kumar_Resume.pdf"; // File should be in public folder
    link.download = "Lakshman_Kumar_Resume.pdf";
    link.click();
  };

  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Lakshman Kumar</span>
          <br />
          Full Stack Web Developer
        </span>
        <p className="introPara">
          I am a skilled full stack web developer with experience in creating visually 
          <br />
          appealing and user friendly websites.
        </p>
        <div className="resumeHire">
          <button className="btn2" onClick={handleResumeDownload}>
            <img src={Resume} alt="Img" className="btnImg2" />
            Resume
          </button>
          <Link to="contactPage" smooth={true} duration={500}>
            <button className="btn2">
              <img src={Hire} alt="Img" className="btnImg2" />
              Hire Me
            </button>
          </Link>
        </div>
      </div>

      <img src={reactLogo} alt="React Logo" className="logo2" />
    </section>
  )
}

export default Intro
