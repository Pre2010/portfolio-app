import React, {useEffect, useRef} from 'react';
import {
    AboutContainer,
    AboutTitle,
    AboutImageAndDescriptionContainer,
    AboutImageContainer,
    AboutImage,
    AboutDescriptionContainer,
    AboutDescription,
    AboutTechnologyContainer,
    AboutTechnologyDescription,
    AboutTechnologyList,
    AboutTechnologyItem
}
from '../../styles/sections/aboutSection.style';
import scrollReveal from '../../utils/globalScrollReveal';
import {scrollRevealConfig} from '../../config';

const About = ({data}) => {
    const aboutData = data[0].node;
    const {frontmatter} = aboutData;

    // scroll reveal animation
    const revealContainer = useRef(null);
    const revealProfessionalContainer = useRef(null);
    const revealPersonalContainer = useRef(null);
    useEffect(() => {
        scrollReveal.reveal(revealContainer.current, scrollRevealConfig('top'));
        scrollReveal.reveal(revealProfessionalContainer.current, scrollRevealConfig('right', 500));
        scrollReveal.reveal(revealPersonalContainer.current, scrollRevealConfig('left', 500));
    }, []);

    return (
        <AboutContainer id='about' ref={revealContainer}>
            <AboutTitle>
                {frontmatter.title}
            </AboutTitle>
            <AboutImageAndDescriptionContainer ref={revealProfessionalContainer}>
                <AboutImageContainer>
                    <AboutImage src={frontmatter.professionalImage.publicURL} alt='professional image' />
                </AboutImageContainer>
                <AboutDescriptionContainer>
                    <AboutDescription>
                        {frontmatter.professionalDescription}
                    </AboutDescription>
                </AboutDescriptionContainer>
            </AboutImageAndDescriptionContainer>
            <AboutImageAndDescriptionContainer ref={revealPersonalContainer}>
                <AboutDescriptionContainer>
                    <AboutDescription>
                        {frontmatter.personalDescription}
                    </AboutDescription>
                </AboutDescriptionContainer>
                <AboutImageContainer>
                    <AboutImage src={frontmatter.personalImage.publicURL} alt='personal image' />
                </AboutImageContainer>
            </AboutImageAndDescriptionContainer>
            <AboutTechnologyContainer ref={revealContainer}>
                {
                    frontmatter.techs ? 
                    <AboutTechnologyDescription>
                        {frontmatter.techDescription}
                    </AboutTechnologyDescription>
                    : null
                }
                <AboutTechnologyList>
                    {
                        frontmatter.techs ?
                        frontmatter.techs.map((tech,i) => (
                            <AboutTechnologyItem key={i}>{tech}</AboutTechnologyItem>
                        ))
                        : null
                    }
                </AboutTechnologyList>
            </AboutTechnologyContainer>
        </AboutContainer>
    )
};

export default About;