import React from 'react';
import {
    StyledContainer,
    StyledGraphic,
    StyledGreeting,
    StyledButton
} from './styles';
import IntroGraphic from '../assets/images/intro-graphic.png';

const Landing = () => (
    <StyledContainer>
        <StyledGraphic src={IntroGraphic} alt="Intro graphic"/>
        <StyledGreeting>Posh Nail Spa Creating Beauty</StyledGreeting>
        <StyledButton to="/checkin">Start checking in</StyledButton>
    </StyledContainer>
)

export default Landing;