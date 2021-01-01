import React from 'react'
import { Route } from 'react-router-dom'
import Header from './Header'
import '../assets/css/Homepage.css'
import ksPic from '../assets/img/ksemenza-pic.jpg'
import SocialLinks from './SocialLinks'
import SnowFall from 'react-snowfall'
import Projects from './Projects'
import Skills from './Skills'

const HomePage = () => {

    
    return (
        // <div className='homepage-cta'>
        <div className='hero-img-cta'>
            {/* <Header /> */}
            <div className='name-title-cta'>
                <SnowFall />


                <h1>Kim Semenza</h1>
                <h3>Full Stack Web Developer</h3>
                      
                <img className='ksPicImg' src={ksPic} alt='Kim Semenza Profile Picture' />
                <h5> Software Engineer & Intellectual Innovator </h5>


            </div>
            
                <div className='side-menu-wrap'>

                <div className='project-tag'><Projects /></div>
                <div className='skill-tag'><Skills/></div>
            </div>
            
        
            {/* <SocialLinks/> */}
                </div>


        // </div>
    )

}

export default HomePage