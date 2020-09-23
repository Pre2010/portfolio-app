import React, {useEffect, useRef} from 'react';
import {
    HeroContainer,
    HeroDescriptionContainer,
    HeroDescription,
    HeroDescriptionName,
    HeroImageContainer,
    HeroImage
} from '../../styles/sections/heroSection.style';

import scrollReveal from '../../utils/globalScrollReveal';
import {scrollRevealConfig} from '../../config';

const Hero = ({data}) => {
    const heroData = data[0].node;
    const {frontmatter} = heroData;
    const {image, heroIntroduction, heroDescription, heroName, heroSubtitle} = frontmatter;

    // scroll reveal animation
    const revealContainer = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {  
            scrollReveal.reveal(revealContainer.current, scrollRevealConfig('top'));
        }
    }, []);

    return (
        <HeroContainer ref={revealContainer}>
            <HeroImageContainer>
                <HeroImage fluid={image.childImageSharp.fluid} alt='Hero' />
            </HeroImageContainer>
            <HeroDescriptionContainer>
                <HeroDescription>
                    {heroIntroduction} 
                </HeroDescription>
                <HeroDescription>
                    <HeroDescriptionName>{heroName}</HeroDescriptionName>
                </HeroDescription>
                <HeroDescription>
                    {heroSubtitle}
                </HeroDescription>
                <HeroDescription>
                    {heroDescription}
                </HeroDescription>
            </HeroDescriptionContainer>
        </HeroContainer>
    )
};

export default Hero;
