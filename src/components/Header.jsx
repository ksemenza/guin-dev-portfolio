import React from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/css/Header.css'


const HomePage = () => {

    
    return (
        <div className='header-cta'>

            <header>
                <nav className='nav-link-wrap'>
                    <NavLink className='nav-link' exact to='/'>Home</NavLink>
                    <NavLink className='nav-link' exact to='/projects'>Projects</NavLink>
                    <NavLink className='nav-link' exact to='/skills'>Skills</NavLink>
                    <NavLink className='nav-link' exact to='/contact'>Contact</NavLink>
                </nav>
            </header>
        </div>
    )

}

export default HomePage