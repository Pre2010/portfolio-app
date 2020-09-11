import React from 'react';
import {
    HeroContainer,
    HeroDescriptionContainer,
    HeroDescription,
    HeroDescriptionName,
    HeroImageContainer,
    HeroImage
} from '../../styles/sections/heroSection.style';

const Hero = ({data}) => {
    const heroData = data[0].node;
    const {frontmatter} = heroData;
    return (
        <HeroContainer>
            <HeroImageContainer>
                <HeroImage src={frontmatter.image.publicURL} alt='hero' />
            </HeroImageContainer>
            
            <HeroDescriptionContainer>
                <HeroDescription>
                    {frontmatter.heroIntroduction} 
                    <HeroDescriptionName>{frontmatter.heroName}</HeroDescriptionName>
                </HeroDescription>
                <HeroDescription>
                    {frontmatter.heroSubtitle}
                </HeroDescription>
                <HeroDescription>
                    {frontmatter.heroDescription}
                </HeroDescription>
            </HeroDescriptionContainer>
        </HeroContainer>
    )
};

export default Hero;
