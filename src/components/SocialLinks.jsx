import React from 'react'
import { NavLink } from 'react-router-dom'
import LinkedInLogo from '../assets/img/linkedin.png'
import GithubLogo from '../assets/img/github.png'
import EmailLogo from '../assets/img/send-email.png'
import KsLogo from '../assets/img/ksLogo.png'
import '../assets/css/SocialLinks.css'


const SocialLinks = () => {

    
    return (
        <div className='social-link-cta'>
        
        <div className='social-links-wrap'>
        <a href='https://www.linkedin.com/in/kim-semenza-2b4961199/' target='blank'> 
            <img className='nav-icon linkedin' src={LinkedInLogo} alt='LinkedIn Icon'/></a>
        <a href='https://github.com/ksemenza?tab=repositories' target='blank'>
            <img className='nav-icon github' src={GithubLogo} alt='Github Icon'/></a>
            <a href='mailto:ksemenza.247@gmail.com'> 
            <img className='nav-icon email' src={EmailLogo} alt='Email Icon'/></a>
            </div>
            </div>
    )

}

export default SocialLinks