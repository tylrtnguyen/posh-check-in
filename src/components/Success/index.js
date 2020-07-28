import React from 'react';
import { ReactComponent as WelcomeIcon } from '../assets/images/welcome.svg';
import {
    StyledContainer,
    StyledGraphic,
    StyledMessage,
    StyledDiscount,
    StyledButton
} from './styles';

const Success = () => {
    return (
        <StyledContainer>
            <StyledGraphic>
                <WelcomeIcon />
            </StyledGraphic>
            <StyledMessage>
                Thanks for joining us!
            </StyledMessage>
            <StyledDiscount>
                Please pick your favorite colours and take a seat. Our technician will come and serve you shortly.
            </StyledDiscount>
            <StyledButton to="/checkin">Finish</StyledButton>
        </StyledContainer>
    )
}

export default Success;