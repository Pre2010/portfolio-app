import React from 'react';
import {
    FooterContainer,
    FooterInfoContainer,
    FooterInfo,
} from '../styles/components/footer.style';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterInfoContainer>
                <FooterInfo>
                    Designed and developed by Preyesh Patel
                </FooterInfo>
            </FooterInfoContainer>
        </FooterContainer>
    );
};

export default Footer;