import styled from 'styled-components';
import LogoIcon from '../../images/logo';
import theme from '../theme';

const {colors, margin_left_right} = theme;

export const LogoContainer = styled.div`
    margin: 0 ${margin_left_right}px;
    svg {
        fill: none;
    }
    &:hover {
        /* TODO remove ellipse with svg after testing */
        ellipse {
            fill: ${colors.borderColor};
        }
    }
`;

export const LogoStyled = styled(LogoIcon)`
    width: 50px;
    height: 50px;

`;