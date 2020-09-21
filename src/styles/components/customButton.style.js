import styled from 'styled-components';
import theme from '../theme';
const {colors} = theme;

export const CustomButtonStyled = styled.a`
    padding: 5px 2px;
    margin: 5px 5px;
    text-align: center;
    text-decoration: none;
    color: ${colors.textColor};
    border: 2px solid ${colors.borderColor};
    border-radius: 10px;
    vertical-align: middle;
    transition: 0.5s ease;
    cursor: pointer;
    &:hover {
        background-color: ${colors.hoverColor};
        color: ${colors.borderColor};
    }
`;