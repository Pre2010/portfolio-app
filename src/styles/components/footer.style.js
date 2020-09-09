import styled from 'styled-components';
import { Link } from 'gatsby';
import LogoIcon from '../../images/Ellipse 1';

export const FooterContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const FooterLogoContainer = styled.div`
    display: block;
`;

export const FooterLogoLink = styled(Link)`

`;

export const FooterLogo = styled(LogoIcon)`
    width: 50px;
    height: 50px;
`;

export const FooterInfoContainer = styled.div`

`;

export const FooterInfo = styled.p`
    
`;

export const FooterSocialMediaContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;