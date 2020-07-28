import styled from 'styled-components';
import { theme, media } from '../styles';
import { Link } from 'react-router-dom';
const { colors, typeScale, flexCenter, fontWeight } = theme;

export const StyledContainer = styled.div`
    ${flexCenter};
    width: 100%;
    flex-direction: column;
    position: relative;
    padding: 50px 0 50px 0;
    ${media.tablet`padding: 80px;`};
`

export const StyledGraphic = styled.div`
    ${flexCenter};
    width: 100%;
    margin-bottom: 30px;
    ${media.thone`width: 80%`};
`

export const StyledMessage = styled.h2`
    font-family: Poppins-SemiBold;
    font-weight: ${fontWeight.header};
    font-size: ${typeScale.h2};
    color: ${colors.black};
`

export const StyledDiscount = styled.p`
    font-family: Poppins-Regular;
    font-weight: ${fontWeight.normal};
    text-align: center;
    color: ${colors.grey};
    margin-bottom: 20px;
`

export const StyledButton = styled(Link)`
    background-color: ${colors.success};
    color: ${colors.white};
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;
    text-align: center;
    padding-top: 7px;
    font-family: Poppins-Regular;
    font-size: ${typeScale.h5};
    border-radius: 50px;
    box-shadow: 0 4px 0px -4px #6a93ff;
    width: 200px;
    height: 50px;
    &:hover,
    &:focus {
        background-color: ${colors.poshBlue};
        transform: scale(1.03);
    }
`