import React from 'react'
import './about.css'
import Html from '../assets/HTML5_Badge.svg'
import Css from '../assets/css-3.svg'
import JavaScript from '../assets/javascript.svg'
import Bootstrap from '../assets/bootstrap.png'
import Java from '../assets/java-4-logo-svgrepo-com.svg'
import C from '../assets/c-1.svg'
import Cplusplus from '../assets/c++.svg'
import Reactlogo from '../assets/react-2.svg'
import Nodelogo from '../assets/nodelogo.svg'
import Pythonlogo from '../assets/python-5.svg'
import NextJs from "../assets/nextjs-icon.svg"

function about() {
  return (
    <section id="about">
        <span className="aboutTitle">What I Know</span>
        <span className="aboutDesc">I am a skilled and passionate designer with exprinence in creating visually appaling and
          <br/>
          user-friendly website. I have a strong  command on Data Structure Algorithm (DSA). I am
          <br/>
          proficient in HTML, CSS, Javascript, Java, C, C++, Python
          <br/>
          and also 
          <br/>
         Bootstrap, React js, Node js and other programming Language.
        </span>

        <div className='aboutBars'>
            <div className='aboutBar'>
                <img src={Html} alt='' className='aboutBarImg' />
                <div className='aboutBarText'>
                    <h2>HTML</h2>
                    <p>HyperText Markup Language is used to structure the content of web pages.</p>
                </div>
            </div>
        </div>


        <div className='aboutBars'>
            <div className='aboutBar'>
                <img src={Css} alt='' className='aboutBarImg' />
                <div className='aboutBarText'>
                    <h2>CSS</h2>
                    <p>Cascading Style Sheets is used to style and design web pages. </p>
                </div>
            </div>
        </div>



        <div className='aboutBars'>
            <div className='aboutBar'>
                <img src={JavaScript} alt='' className='aboutBarImg' />
                <div className='aboutBarText'>
                    <h2>JAVASCRIPT</h2>
                    <p>JavaScript is a scripting or programming language that allows you to implement complex features on web pages</p>
                </div>
            </div>
        </div>



        <div className='aboutBars'>
            <div className='aboutBar'>
                <img src={Bootstrap} alt='' className='aboutBarImg' />
                <div className='aboutBarText'>
                    <h2>BOOTSTRAP</h2>
                    <p>Bootstrap is a free, open source front-end development framework for the creation of websites and web apps. </p>
                </div>
            </div>
        </div>


        <div className='aboutBars'>
            <div className='aboutBar'>
                <img src={Java} alt='' className='aboutBarImg' />
                <div className='aboutBarText'>
                    <h2>JAVA</h2>
                    <p>Java is a widely-used programming language for coding web applications.</p>
                </div>
            </div>
        </div>


        <div className='aboutBars'>
            <div className='aboutBar'>
                <img src={Pythonlogo} alt='' className='aboutBarImg' />
                <div className='aboutBarText'>
                    <h2>PYTHON</h2>
                    <p>Python is a computer programming language often used to build websites and software, automate tasks, and analyze data.</p>
                </div>
            </div>
        </div>
        


        <div className='aboutBars'>
            <div className='aboutBar'>
                <img src={C} alt='' className='aboutBarImg' />
                <div className='aboutBarText'>
                    <h2>C Language</h2>
                    <p>The C language is a high-level, general-purpose programming language.</p>
                </div>
            </div>
        </div>



        <div className='aboutBars'>
            <div className='aboutBar'>
                <img src={Cplusplus} alt='' className='aboutBarImg' />
                <div className='aboutBarText'>
                    <h2>C++</h2>
                    <p>C++ is a generic programming language for building software. It's an object-oriented language. </p>
                </div>
            </div>
        </div>



        <div className='aboutBars'>
            <div className='aboutBar'>
                <img src={Reactlogo} alt='' className='aboutBarImg' />
                <div className='aboutBarText'>
                    <h2>React JS</h2>
                    <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. </p>
                </div>
            </div>
        </div>

        <div className='aboutBars'>
            <div className='aboutBar'>
                <img src={NextJs} alt='' className='aboutBarImg' />
                <div className='aboutBarText'>
                    <h2>Next JS</h2>
                    <p>Next.js is a powerful React framework enabling server-side rendering, static site generation, API routes, and optimized performance for modern web applications.</p>
                </div>
            </div>
        </div>


        <div className='aboutBars'>
            <div className='aboutBar'>
                <img src={Nodelogo} alt='' className='aboutBarImg' />
                <div className='aboutBarText'>
                    <h2>Node JS</h2>
                    <p>Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. </p>
                </div>
            </div>
        </div>


        


    </section>

  )
}

export default about
