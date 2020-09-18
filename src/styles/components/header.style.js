import styled from 'styled-components';
import {AnchorLink} from 'gatsby-plugin-anchor-links';
import theme from '../theme';
import Logo from '../../components/image_components/logoComponent';
const {colors, margin_left_right, gradients} = theme;

export const HeaderContainer = styled.header``;

export const HeaderNavContainer = styled.nav`
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100;
`;

export const HeaderLogo = styled(Logo)`
    display: flex;
    align-content: flex-start;
    width: 50px;
    height: 50px;

`;

export const HeaderScrollMask = styled.div`
    width: ${props => props.scrollActive ? '100%' : '0'};
    height: 100%;
    top: 0;
    right: 0;
    background: ${colors.primaryColor};
    position: absolute;
    transition: width 0.5s ease;
    z-index: -1;
    box-shadow: 5px 2px ${colors.hoverColor};
`;

export const HeaderNavLinksContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 65px;
    margin-top: 1%;
`;

export const HeaderNavLinkList = styled.ol`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
`;

export const HeaderNavLinkListItem = styled.li`
    padding: 0 15px;
`;

export const HeaderNavLink = styled(AnchorLink)`
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
            width: 100%;
            opacity: 1;
        }
    }
`;

export const HeaderSocialMediaAndResumeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: ${margin_left_right}px;
    
`;

export const HeaderResumeButton = styled.a`
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

