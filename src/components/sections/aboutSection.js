import React from 'react';
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

const About = ({data}) => {
    const aboutData = data[0].node;
    const {frontmatter} = aboutData;
    return (
        <AboutContainer id='about'>
            <AboutTitle>
                {frontmatter.title}
            </AboutTitle>
            <AboutImageAndDescriptionContainer>
                <AboutImageContainer>
                    <AboutImage src={frontmatter.professionalImage.publicURL} alt='professional image' />
                </AboutImageContainer>
                <AboutDescriptionContainer>
                    <AboutDescription>
                        {frontmatter.professionalDescription}
                    </AboutDescription>
                </AboutDescriptionContainer>
            </AboutImageAndDescriptionContainer>
            <AboutImageAndDescriptionContainer>
                <AboutDescriptionContainer>
                    <AboutDescription>
                        {frontmatter.personalDescription}
                    </AboutDescription>
                </AboutDescriptionContainer>
                <AboutImageContainer>
                    <AboutImage src={frontmatter.personalImage.publicURL} alt='personal image' />
                </AboutImageContainer>
            </AboutImageAndDescriptionContainer>
            <AboutTechnologyContainer>
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