import styled from 'styled-components';
import media from './media';

const Main = styled.main`
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
  
  &.fillHeight {
    padding-top: 0;
    padding-bottom: 0;
    ${media.desktop`
    padding-top: 0;
    padding-bottom: 0;
  `};
    ${media.tablet`
    padding-top: 0;
    padding-bottom: 0;
  `};
    ${media.phablet`
    padding-top: 0;
    padding-bottom: 0;
  `};
`

export default Main;