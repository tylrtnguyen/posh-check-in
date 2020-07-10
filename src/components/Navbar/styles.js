import styled from 'styled-components';
import { theme, media } from '../styles';
const { fonts, navHeight, colors } = theme;

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 50px;
    width: 100%;
    height: ${navHeight};
    ${media.tablet`padding: 0 25px;`};
`;

export const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: ${fonts.Poppins};
`;

export const StyledLogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    a {
        display: block;
        color: ${colors.black};
        width: 42px;
        height: 42px;
    }
`;

export const StyledLogo = styled.img`
    width: 150px;
    height: 93px;
    cursor: pointer;
`