import { css } from 'styled-components';

import PoppinsRegular from '../assets/fonts/Poppins-Regular.ttf';
import PoppinsMedium from '../assets/fonts/Poppins-Medium.ttf';
import PoppinsBold from '../assets/fonts/Poppins-Bold.ttf';
import PoppinsSemiBold from '../assets/fonts/Poppins-SemiBold.ttf';

const FontFaces = css `
    @font-face {
        font-family: Poppins-Regular;
        src: url(${PoppinsRegular});
    }
    @font-face {
        font-family: Poppins-Medium;
        src: url(${PoppinsMedium});
    }
    @font-face {
        font-family: Poppins-Bold;
        src: url(${PoppinsBold});
    }
    @font-face {
        font-family: Poppins-SemiBold;
        src: url(${PoppinsSemiBold});
    }
`

export default FontFaces;