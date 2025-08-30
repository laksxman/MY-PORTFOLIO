import React from 'react'
import './Intro.css'
import Hire from '../assets/hireme.png'
import reactLogo from '../assets/react.svg'
import { Link } from 'react-scroll'

function Intro() {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello" >Hello,</span>
            <span className="introText">
              I'm <span className="introName">Lakshman Kumar</span>
              <br/>
              Full Stack Web Developer
            </span>
            <p className="introPara" >
              I am a skilled full stack web developer with exprinence in creating visually 
              <br/>
               appealing and user friendly websites.
            </p>
            <Link to="contactPage">
            <button className='btn2'>
                <img src={Hire} alt='Img' className="btnImg2"  />
                Hire Me
            </button>
            </Link>
        </div>

        <img src={reactLogo} alt='React Logo' className="logo2" />

    </section>
  )
}

export default Intro
