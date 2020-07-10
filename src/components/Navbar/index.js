import React from 'react';
import { Link } from 'react-router-dom';
import {
    StyledHeader,
    StyledNav,
    StyledLogoContainer,
    StyledLogo
} from './styles';
import LogoSrc from '../assets/images/main-logo.png'

const Navbar = () => (
    <StyledHeader>
        <StyledNav>
            <StyledLogoContainer>
                <Link to="/">
                    <StyledLogo src={LogoSrc} alt="Main logo" />
                </Link>
            </StyledLogoContainer>
        </StyledNav>
    </StyledHeader>
)

export default Navbar;