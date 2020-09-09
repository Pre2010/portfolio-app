import React from 'react';
import {
    FooterContainer,
    FooterLogoContainer,
    FooterLogo,
    FooterInfoContainer,
    FooterInfo,
    FooterLogoLink,
    FooterSocialMediaContainer
} from '../styles/components/footer.style';
import SocialMedia from './image_components/socialMedia';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLogoContainer>
                <FooterLogoLink to='/' >
                    <FooterLogo />
                </FooterLogoLink>
            </FooterLogoContainer>
            <FooterInfoContainer>
                <FooterInfo>
                    Designed and developed by Preyesh Patel
                </FooterInfo>
                <FooterInfo>
                    Developed with Gatsby.js
                </FooterInfo>
            </FooterInfoContainer>
            <FooterSocialMediaContainer>
                <SocialMedia />
            </FooterSocialMediaContainer>
        </FooterContainer>
    );
};

export default Footer;