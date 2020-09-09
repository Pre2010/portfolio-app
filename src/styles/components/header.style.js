import styled from 'styled-components';
import { Link } from "gatsby"
import theme from '../theme';
import LogoIcon from '../../images/Ellipse 1';
const {colors} = theme;

export const HeaderNavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 65px;
`;

export const HeaderLogoContainer = styled.div`
    display: block;
`;

export const HeaderLogo = styled(LogoIcon)`
    width: 50px;
    height: 50px;
`;

export const HeaderNavLinksContainer = styled.div`
    
`;

export const HeaderNavLinkList = styled.ol`
    display: flex;
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
`;

export const HeaderSocialMediaAndResumeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`;

export const HeaderResumeButton = styled.a`
    padding: 5px 2px;
    margin: 5px 5px;
    text-decoration: none;
    /* align-self: center; */
    color: ${colors.textColor};
    border: 2px solid ${colors.borderColor};
    /* margin-left:14px; */
`;

