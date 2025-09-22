import React from 'react'
import './Project.css'
import Airnb from '../assets/airnb.webp'
import Zoom from '../assets/zoom2.png'
import Zerodha from '../assets/zerodha.png'
import Cafe from '../assets/cafe.webp'

function Project() {
  return (
    <section id="project">
        <h2 className='projectTitle'>My Projects</h2>
        <span className='projectDesc'> Here are my Projects</span>

        <div className='project-item'>
            <div className='item-details'>
                <p className='p1'>Airbnb App</p>
                <p className='p2'>TechStac:- MERN Technology, Google MAP APIs </p>
            </div>
            <a href='https://airnub-website.onrender.com'> <img src={Airnb} alt='Airnb App' className='projectImg'/> </a>
        </div>

        <div className='project-item'>
            <div className='item-details'>
                <p className='p1'>Zoom App</p>
                <p className='p2'>TechStac:-MERN Techmology and Socket.io</p>
            </div>
            <a href='https://zoomvideocallfrontend-jc9j.onrender.com'> <img src={Zoom} alt='Zoom App' className='projectImg'/> </a>
        </div>

        <div className='project-item'>
            <div className='item-details'>
                <p className='p1'>Zerodha App</p>
                <p className='p2'>TechStac:- MERN Technology</p>
            </div>
            <a href='https://zerodhafrontend-0qv9.onrender.com'> <img src={Zerodha} alt='Zerodha App' className='projectImg'/> </a>
        </div>

        <div className='project-item'>
            <div className='item-details'>
                <p className='p1'>Cafe Website </p>
                <p className='p2'>TechStac:- HTML, CSS and JavaScript</p>
            </div>
            <a href='https://coffeecorner-bdlr.onrender.com'> <img src={Cafe} alt='Cafe Website' className='projectImg'/> </a>
        </div>
    </section>
  )
}

export default Project
