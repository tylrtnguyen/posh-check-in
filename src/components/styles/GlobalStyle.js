import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import FontFaces from './fonts';
const { colors, typeScale } = theme;

const GlobalStyle = createGlobalStyle`
    ${FontFaces};

    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    html {
        height: 100%;
        font-family: Poppins-Regular, sans-serif;
    }
    

    a {
        font-family: Poppins-Regular;
        font-size: ${typeScale.p};
        line-height: 1.7;
        color: ${colors.grey};
        margin: 0px;
        transition: all 0.4s;
        -webkit-transition: all 0.4s;
        -o-transition: all 0.4s;
        -moz-transition: all 0.4s;
    }

    a:focus {
        outline: none !important;
    }

    a:hover {
        text-decoration: none;
    }

    h1,h2,h3,h4,h5,h6 {
        margin: 0px;
    }

    p {
        font-family: Poppins-Regular;
        font-size: ${typeScale.p};
        line-height: 1.7;
        color: ${colors.grey};
        margin: 0px;
    }

    ul, li {
	    margin: 0px;
	    list-style-type: none;
    }

    input {
	    outline: none;
	    border: none;
    }

    textarea {
        outline: none;
        border: none;
    }

    textarea:focus, input:focus {
        border-color: transparent !important;
    }
    input:focus::-webkit-input-placeholder { color:transparent; }
    input:focus:-moz-placeholder { color:transparent; }
    input:focus::-moz-placeholder { color:transparent; }
    input:focus:-ms-input-placeholder { color:transparent; }

    textarea:focus::-webkit-input-placeholder { color:transparent; }
    textarea:focus:-moz-placeholder { color:transparent; }
    textarea:focus::-moz-placeholder { color:transparent; }
    textarea:focus:-ms-input-placeholder { color:transparent; }

    input::-webkit-input-placeholder { color: ${colors.placeholder};}
    input:-moz-placeholder { color: ${colors.placeholder};}
    input::-moz-placeholder { color: ${colors.placeholder};}
    input:-ms-input-placeholder { color: ${colors.placeholder};}

    textarea::-webkit-input-placeholder { color: ${colors.placeholder};}
    textarea:-moz-placeholder { color: ${colors.placeholder};}
    textarea::-moz-placeholder { color: ${colors.placeholder};}
    textarea:-ms-input-placeholder { color: ${colors.placeholder};}
`;

export default GlobalStyle;