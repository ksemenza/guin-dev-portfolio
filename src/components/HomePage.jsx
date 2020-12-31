import React from 'react'
import { Route } from 'react-router-dom'
import Header from './Header'
import '../assets/css/Homepage.css'
import ksPic from '../assets/img/ksemenza-pic.jpg'
import SocialLinks from './SocialLinks'
import Snow from 'react-snow-effect'
import SnowFall from 'react-snowfall'
import SnowStorm from 'react-snowstorm';

const HomePage = () => {

    
    return (
        // <div className='homepage-cta'>
        <div className='hero-img-cta'>
            <Header />
            <div className='name-title-cta'>
                <SnowFall />
                {/* <Snow/> */}

            <h1>Kim Semenza</h1>
            <h5> Software Engineer </h5>
            <h4> & </h4>
                <h5>Intellectual Innovator</h5>
            </div>
            
            <img className='ksPicImg' src={ksPic} alt='Kim Semenza Profile Picture' />
            <SocialLinks/>
                </div>


        // </div>
    )

}

export default HomePage