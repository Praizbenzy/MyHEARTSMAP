import React, {useState} from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <nav className="navBar">
                <div className="navbar-container">
                    <Link to='/' className='nav-links'>Home</Link>
                    <Link to='/why' className='nav-links'>Why</Link>
                    <Link to='/what' className='nav-links'>What</Link>
                    <Link to='/whocan' className='nav-links'>Who can fill this out</Link>
                    <Link to='/usingtool' className='nav-links'>Using this tool</Link>
                    <Link to='/results' className='nav-links'>Results</Link>
                    <Link to='/credits' className='nav-links'>Credits</Link>
                </div>
            </nav>
        </>
    )
}

export default NavBar
