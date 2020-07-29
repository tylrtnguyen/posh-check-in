import styled from 'styled-components';
import { theme, media } from '../styles';
const { colors, fonts, typeScale, fontWeight, borderRadius, flexCenter } = theme;

export const StyledContainer = styled.div`
    width: 100%;  
    ${flexCenter};
    flex-wrap: wrap;
    ${media.tablet`padding: 50px 0 50px 0;`};
    ${media.thone`padding: 0`};

`

export const StyledWrapper = styled.div`
    width: 700px;
    background: ${colors.white};
    border-radius: ${borderRadius};
    position: relative;
    overflow: hidden;
    padding: 40px 55px 45px 55px;
    box-shadow:  20px 20px 60px #a7afb3, 
             -20px -20px 60px #e3edf3;
    ${media.phablet`width: 400px;`};
`


export const StyledIntro = styled.span`
    display: block;
    font-family: Poppins-SemiBold;
    font-size: ${typeScale.h3};
    line-height: 1.2;
    color: ${colors.black};
    text-align: left;
`;

export const StyledPrivacy = styled.p`
    font-family: ${fonts.Poppins};
    font-size: ${typeScale.p};
    font-weight: ${fontWeight.normal};
    color: ${colors.grey};
    text-align: left;
    padding-bottom: 2.8rem;
`;

export const StyledFormGroup = styled.div`
    width: 100%;
    position: relative;
    margin-bottom: 1.8rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid ${colors.borderBottom};
    ${media.thone`margin-bottom: 1rem;`};
`;

export const StyledLabel = styled.span`
    font-family: Poppins-Regular;
    font-size: ${typeScale.helper};
    color: ${colors.grey};
    line-height: 1.5;
    padding-left: 5px;
`

export const StyledInput = styled.input`
    display: block;
    width: 100%;
    height: 30px;
    background: transparent;
    font-family: Poppins-Medium;
    font-size: ${typeScale.p};
    color: ${colors.darkGrey};
    line-height: 1.2;
    padding: 0 5px;
    ${media.thone`margin-bottom: 0;`};
`;

export const StyledSelect = styled.select`
    display: block;
    font-size: ${typeScale.p};
    font-family: Poppins-Regular;
    color: ${colors.darkGrey};
    line-height: 1.3;
    padding: .6em 1.4em .5em .8em;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: ${colors.white}
`

export const StyledFocusInput = styled.span`
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    &:before {
        content: "";
        display: block;
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 2px;

        -webkit-transition: all 0.4s;
        -o-transition: all 0.4s;
        -moz-transition: all 0.4s;
        transition: all 0.4s;

        background: ${colors.grey};
    }
    &:focus {
        width: 100%;
    }
`

export const StyledButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 1rem;
`

export const StyledButtonWrapper = styled.div`
    width: 100%;
    display: block;
    position: relative;
    z-index: 1;
    border-radius: 25px;
    overflow: hidden;
    margin: 0 auto;
`

export const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    cursor: pointer;
    width: 100%;
    margin: 0;
    text-decoration: none;
    height: 50px;
    border: none;
    font-family: Poppins-Medium;
    font-size: ${typeScale.p};
    color: ${colors.white};
    background: ${colors.poshBlue};
    line-height: 1.2;

    &:hover {
        left: 0;
        background: ${colors.hover};
        svg {
            transform: translateX(10px);
        }
    }

    svg {
        padding: 0 0 0 10px;
        width: 30px;
        height: 30px;
        transition: all 0.4s;
    }
`


export const StyledError = styled.div`
    font-size: ${typeScale.helper};
    color: ${colors.error};
`;


