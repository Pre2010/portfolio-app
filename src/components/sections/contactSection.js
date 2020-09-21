import React, {useEffect, useRef} from 'react';
import {
    ContactContainer,
    ContactTitleContainer,
    ContactTitle,
    ContactCtaAndImageContainer,
    ContactCtaContainer,
    ContactCta,
    ContactImgContainer,
    ContactImg,
    ContactButtonContainer,
    ContactButton
}
from '../../styles/sections/contactSection.style';
import scrollReveal from '../../utils/globalScrollReveal';
import {email, scrollRevealConfig} from '../../config';

const Contact = ({data}) => {
    const contactData = data[0].node;
    const {frontmatter} = contactData;

    // scroll reveal animation
    const revealContainer = useRef(null);
    const revealCtaContainer = useRef(null);
    const revealImageContainer = useRef(null);

    useEffect(() => {
        scrollReveal.reveal(revealContainer.current, scrollRevealConfig('top'));
        scrollReveal.reveal(revealCtaContainer.current, scrollRevealConfig('left', 500));
        scrollReveal.reveal(revealImageContainer.current, scrollRevealConfig('right', 500));
    }, []);

    return (
        <ContactContainer id='contact' ref={revealContainer}>
            <ContactTitleContainer>
                <ContactTitle>Contact Me</ContactTitle>
            </ContactTitleContainer>
            <ContactCtaAndImageContainer ref={revealCtaContainer}>
                <ContactCtaContainer>
                    <ContactCta>
                        {frontmatter.firstParagraph}
                    </ContactCta>
                    {
                        frontmatter.secondParagraph ?
                        <ContactCta>
                        {frontmatter.secondParagraph}
                        </ContactCta>
                        : null
                    }
                    {
                        frontmatter.thirdParagraph ?
                        <ContactCta>
                            {frontmatter.thirdParagraph}
                        </ContactCta>
                        : null
                    }
                    
                </ContactCtaContainer>
                <ContactImgContainer ref={revealImageContainer}>
                    <ContactImg src={frontmatter.image.publicURL} alt='contact'/>
                </ContactImgContainer>
            </ContactCtaAndImageContainer>
            <ContactButtonContainer ref={revealContainer}>
                <ContactButton href={`mailto:${email}`} target='_blank' rel='noreferrer noopener nofollow'>{frontmatter.button}</ContactButton>
            </ContactButtonContainer>
        </ContactContainer>
    )
};

export default Contact;