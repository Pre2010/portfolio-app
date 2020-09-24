import React from 'react';
import {
    FooterContainer,
    FooterInfoContainer,
    FooterInfo,
    FooterGitHubLink
} from '../styles/components/footer.style';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterInfoContainer>
                <FooterInfo>
                    Designed and developed by 
                    <FooterGitHubLink 
                    href='https://github.com/Pre2010' 
                    target='_blank'
                    rel='nofollow noopener noreferrer'>
                    Preyesh Patel </FooterGitHubLink>
                </FooterInfo>
            </FooterInfoContainer>
        </FooterContainer>
    );
};

export default Footer;