import styled from 'styled-components';
import { theme, media } from '../styles';
import { Link } from 'react-router-dom';
const { fonts, colors, typeScale, fontWeight } = theme;

export const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    padding: 50px 0 50px 0;
    ${media.tablet`padding: 80px;`}
`

export const StyledGraphic = styled.img`
    ${media.thone`width: 80%`}
`

export const StyledGreeting = styled.span`
    font-family: ${fonts.Poppins};
    font-weight: ${fontWeight.header};
    margin-bottom: 30px;
    font-size: ${typeScale.h2};
    text-align: center;
    background: linear-gradient(to right, ${colors.blue}, ${colors.purple});
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    ${media.thone`font-size: ${typeScale.h4};`}
`

export const StyledButton = styled(Link)`
    background-color: ${colors.poshBlue};
    color: ${colors.white};
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;
    text-align: center;
    padding-top: 7px;
    font-family: ${fonts.Poppins};
    font-size: ${typeScale.h5};
    border-radius: 50px;
    box-shadow: 0 4px 0px -4px #6a93ff;
    width: 200px;
    height: 50px;
    &:hover,
    &:focus {
        background-color: ${colors.hover};
        transform: scale(1.03);
    }
`