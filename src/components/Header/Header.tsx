import * as React from 'react';
import {NavLink} from 'react-router-dom'

const Header = () => {
    return (
        <header>
          <h1>My madafakin blog</h1>
          <nav>
            <NavLink to='/'>Inicio</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
            <NavLink to='/about'>About</NavLink>  
          </nav>
        </header>
    )
}

export default Header