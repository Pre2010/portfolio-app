import React from 'react';
import {
    FooterContainer,
    FooterLogo,
    FooterInfoContainer,
    FooterInfo,
    FooterSocialMediaContainer
} from '../styles/components/footer.style';
import SocialMedia from './image_components/socialMedia';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLogo />
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