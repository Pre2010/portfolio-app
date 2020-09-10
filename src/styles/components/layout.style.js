import {createGlobalStyle} from 'styled-components';
import theme from '../theme';
const {colors} = theme;


export const GlobalStyle = createGlobalStyle`
    body {
        background-image: '../../images/background.svg';
        width: 100%;
        min-height: 100%;
        margin: 0;
        background-color: ${colors.primaryColor};
        font-family: Lustria, Arial, Helvetica, sans-serif;
    }

    h1 {
        color: ${colors.titleColor};
        text-decoration: underline;
    }

    p {
        color: ${colors.textColor};
        font-size: 17px;
    }

    svg {
        width: 100%;
        height: 100%;
        fill: '#F29F12';
        vertical-align: middle;
    }
`;
