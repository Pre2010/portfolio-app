import React from 'react';
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
import {email} from '../../config';

const Contact = ({data}) => {
    const contactData = data[0].node;
    const {frontmatter} = contactData;

    return (
        <ContactContainer>
            <ContactTitleContainer>
                <ContactTitle>Contact Me</ContactTitle>
            </ContactTitleContainer>
            <ContactCtaAndImageContainer>
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
                <ContactImgContainer>
                    <ContactImg src={frontmatter.image.publicURL} alt='contact'/>
                </ContactImgContainer>
            </ContactCtaAndImageContainer>
            <ContactButtonContainer>
                <ContactButton href={`mailto:${email}`} target='_blank' rel='noreferrer noopener nofollow'>{frontmatter.button}</ContactButton>
            </ContactButtonContainer>
        </ContactContainer>
    )
};

export default Contact;