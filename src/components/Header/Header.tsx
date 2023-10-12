import * as React from 'react';
import {NavLink} from 'react-router-dom'
import styled from 'styled-components';

const Header = () => {
    return (
        <ContenedorHeader>
          <Titulo>My madafakin blog</Titulo>
          <nav>
            <NavLink to='/'>Inicio</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
            <NavLink to='/about'>About</NavLink>  
          </nav>
        </ContenedorHeader>
    )
};

const ContenedorHeader = styled.header`
  text-align: center;
  margin-bottom: 40px;

`;

const Titulo = styled.h1`
  margin-bottom: 10px;
  font-size: 26px;
  text-transform: uppercase;
`

export default Header