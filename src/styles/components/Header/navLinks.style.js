import styled from 'styled-components';
import {AnchorLink} from 'gatsby-plugin-anchor-links';
import theme from '../../theme';
const {colors, gradients, sizes} = theme;

export const NavLinksContainer = styled.div`
    
`;

export const NavLinkList = styled.ol`
    display: none;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    margin-top: 3%;

    @media (min-width: ${sizes.tablet}) {
        display: flex;
    }
`;

export const NavLinkListItem = styled.li`
    padding: 0 15px;
`;

export const NavLink = styled(AnchorLink)`
    font-size: 20px;
    padding: 0 5px;
    position: relative;
    color: ${colors.textColor};
    text-decoration: none;
    transition: all 0.5s ease;
    z-index: 10;

    &:before {
        z-index: -1;
        content: '';
        position: absolute;
        height: 0%;
        width: 100%;
        bottom: -1px;
        left: 0;
        opacity: 1;
        transition: all 0.5s ease;
        background: ${gradients.greenToBlue};
    }

    &:hover {
        color: ${colors.borderColor};
        &::before {
            height: 100%;
            opacity: 1;
        }
    }
`;
