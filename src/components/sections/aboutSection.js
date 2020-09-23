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
    const {
        title, 
        professionalImage, 
        professionalDescription, 
        personalImage, 
        personalDescription, 
        techDescription, 
        techs
    } = frontmatter;

    // scroll reveal animation
    const revealContainer = useRef(null);
    const revealProfessionalContainer = useRef(null);
    const revealPersonalContainer = useRef(null);
    const revealTechContainer = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
        scrollReveal.reveal(revealContainer.current, scrollRevealConfig('top'));
        scrollReveal.reveal(revealProfessionalContainer.current, scrollRevealConfig('right', 500));
        scrollReveal.reveal(revealPersonalContainer.current, scrollRevealConfig('left', 500));
        scrollReveal.reveal(revealTechContainer.current, scrollRevealConfig('bottom', 500));
        }
    }, []);

    return (
        <AboutContainer id='about' ref={revealContainer}>
            <AboutTitle>
                {title}
            </AboutTitle>
            <AboutImageAndDescriptionContainer ref={revealProfessionalContainer}>
                <AboutImageContainer>
                    <AboutImage fluid={professionalImage.childImageSharp.fluid} alt='professional image' />
                </AboutImageContainer>
                <AboutDescriptionContainer>
                    <AboutDescription>
                        {professionalDescription}
                    </AboutDescription>
                </AboutDescriptionContainer>
            </AboutImageAndDescriptionContainer>
            <AboutImageAndDescriptionContainer ref={revealPersonalContainer}>
                <AboutDescriptionContainer>
                    <AboutDescription>
                        {personalDescription}
                    </AboutDescription>
                </AboutDescriptionContainer>
                <AboutImageContainer>
                    <AboutImage fluid={personalImage.childImageSharp.fluid} alt='personal image' />
                </AboutImageContainer>
            </AboutImageAndDescriptionContainer>
            <AboutTechnologyContainer ref={revealTechContainer}>
                {
                    techs ? 
                    <AboutTechnologyDescription>
                        {techDescription}
                    </AboutTechnologyDescription>
                    : null
                }
                <AboutTechnologyList>
                    {
                        techs ?
                        techs.map((tech,i) => (
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