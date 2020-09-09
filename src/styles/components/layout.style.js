import {createGlobalStyle} from 'styled-components';
import theme from '../theme';
const {colors} = theme;


export const GlobalStyle = createGlobalStyle`
    body {
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
`;
