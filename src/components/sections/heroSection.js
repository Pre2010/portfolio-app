import React from 'react';
import {
    HeroContainer,
    HeroDescriptionContainer,
    HeroDescription,
    HeroImageContainer,
    HeroImage
} from '../../styles/sections/heroSection.style';

const Hero = () => {
    return (
        <HeroContainer>
            <HeroImageContainer>
                <HeroImage />
            </HeroImageContainer>
            <HeroDescriptionContainer>
                <HeroDescription>
                    Hi! I’m NAME, a JOB_TITLE.
                </HeroDescription>
                <HeroDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </HeroDescription>
            </HeroDescriptionContainer>
        </HeroContainer>
    )
};

export default Hero;