import React from 'react'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <header>
            <Link className='link' to={'/'}>
                {
                    <img className='logo' src="../public/chef-svgrepo-com.svg" alt="logo" />
                }
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link className='navLink' to={'/'}>INICIO</Link>
                    </li>
                    <li>
                        <NavLink className='navLink' to={`/categoria/Carne`}>carne</NavLink>
                    </li>
                    <li>
                        <NavLink className='navLink' to={`/categoria/Pollo`}>pollo</NavLink>
                    </li>
                    <li>
                        <NavLink className='navLink' to={`/categoria/Pescado`}>pescado</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar