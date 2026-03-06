import React from 'react'
import './Project.css'
import Airnb from '../assets/airnb.webp'
import Zoom from '../assets/zoom2.png'
import Zerodha from '../assets/zerodha.png'
import Cafe from '../assets/cafe.webp'
import Task from '../assets/task.jpg'
import IELTS from '../assets/IELTS.jpg'
import Bus from '../assets/Bus.png'

function Project() {
  return (
    <section id="project">
        <div className="project-header">
            <h2 className="projectTitle">My Projects</h2>
            <span className="projectDesc">Here are my Projects</span>
        </div>

        <div className='project-item'>
            <div className='item-details'>
                <p className='p1'>SmartStay Website</p>
                <p className='p2'>TechStac:- MERN Technology, Google MAP APIs </p>
            </div>
            <a href='https://airnub-website.onrender.com'> <img src={Airnb} alt='Airnb App' className='projectImg'/> </a>
        </div>

        <div className='project-item'>
            <div className='item-details'>
                <p className='p1'>LiveMeet Website</p>
                <p className='p2'>TechStac:-MERN Techmology and Socket.io</p>
            </div>
            <a href='https://zoomvideocallfrontend-jc9j.onrender.com'> <img src={Zoom} alt='Zoom App' className='projectImg'/> </a>
        </div>

        <div className='project-item'>
            <div className='item-details'>
                <p className='p1'>Stock Exchange Website</p>
                <p className='p2'>TechStac:- MERN Technology</p>
            </div>
            <a href='https://zerodhafrontend-0qv9.onrender.com'> <img src={Zerodha} alt='Zerodha App' className='projectImg'/> </a>
        </div>

        <div className='project-item'>
            <div className='item-details'>
                <p className='p1'>IELTS Institution</p>
                <p className='p2'>TechStac:- MERN Technology</p>
            </div>
            <a href='https://ielts-frontend1.onrender.com/'> <img src={IELTS} alt='IELTS Homepage' className='projectImg'/> </a>
        </div>

        <div className='project-item'>
            <div className='item-details'>
                <p className='p1'>Cafe Website </p>
                <p className='p2'>TechStac:- HTML, CSS and JavaScript</p>
            </div>
            <a href='https://coffeecorner-bdlr.onrender.com'> <img src={Cafe} alt='Cafe Website' className='projectImg'/> </a>
        </div>

        <div className='project-item'>
            <div className='item-details'>
                <p className='p1'>Task Manager</p>
                <p className='p2'>TechStac:- Next.js</p>
            </div>
            <a href='https://task-manager-go4i.onrender.com/'> <img src={Task} alt='Task Manager' className='projectImg'/> </a>
        </div>

        <div className='project-item bus'>
            <div className='item-details'>
                <p className='p1'>E-Bus Management System</p>
                <p className='p2'>TechStac:- ReactJS, NodeJS, ExpressJS</p>
            </div>
            <a href='https://github.com/laksxman/E-Bus-Management-System'> <img src={Bus} alt='E-Bus Management System' className='projectImg'/> </a>
        </div>
    </section>
  )
}

export default Project
