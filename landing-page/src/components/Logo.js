import { Icon } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SemproLogo from '../assets/SEMPRO_AlternativeLogo_12-12-2022_SLS-04.png'


const LogoText = styled.h1`
font-family: 'Acumin Pro', sans-serif;
font-size: ${props => props.theme.fontxxxl};
color: ${props => props.theme.text};
transition: all 0.2s ease;

&:hover{
    transform: scale(1.1);
}

@media (max-width: 64em){
font-size: ${props => props.theme.fontxxl};

}
`

const Logo = () => {
  return (
    <LogoText>
        <Link to="/">
        LegitART <img src={SemproLogo} style={{width:"1.5em", height:"0.2em"}} alt="fireSpot"/>
        </Link>
    </LogoText>
    
  )
}

export default Logo