import styled from 'styled-components';
import { Link } from "gatsby"
import theme from '../theme';
import Logo from '../../components/image_components/logoComponent';
const {colors, margin_left_right} = theme;

export const HeaderNavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 65px;
`;

export const HeaderLogo = styled(Logo)`
    display: flex;
    align-content: flex-start;
    width: 50px;
    height: 50px;

`;

export const HeaderNavLinksContainer = styled.div`

`;

export const HeaderNavLinkList = styled.ol`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
`;

export const HeaderNavLinkListItem = styled.li`
    padding: 0 15px;
    color: ${colors.textColor};
`;

export const HeaderNavLink = styled(Link)`
    font-size: 20px;
    padding: 0 5px;
    color: ${colors.textColor};
    text-decoration: none;
    transition: color 0.5s ease;

    &:hover {
        color: ${colors.borderColor};
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

    &:hover {
        background-color: ${colors.hoverColor};
        color: ${colors.borderColor};
    }
`;

