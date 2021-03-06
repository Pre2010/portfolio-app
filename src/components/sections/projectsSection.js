import React, {useEffect, useRef} from 'react';
import {
    ProjectsContainer,
    ProjectContainer,
    ProjectTitle,
    ProjectImageAndButtonsContainer,
    ProjectImageContainer,
    ProjectImage,
    ProjectButtonsContainer,
    ProjectDescriptionContainer,
    ProjectTitleDescription,
    ProjectDescription,
    ProjectTechContainer,
    ProjectTechList,
    ProjectTechItem
}
from '../../styles/sections/projectsSection.style';
import scrollReveal from '../../utils/globalScrollReveal';
import {scrollRevealConfig} from '../../config';
import CustomButton from '../customButton';

const Projects = ({data}) => {
    // scroll reveal animation
    const revealContainer = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
        scrollReveal.reveal(revealContainer.current, scrollRevealConfig('top'));
        }
    }, []);

    return (
        <ProjectsContainer id='projects' ref={revealContainer}>
            <ProjectTitle>
                Projects
            </ProjectTitle>
            {
                data.length > 0 ?
                    data.map((project) => (
                        <ProjectContainer key={project.node.id} ref={scrollRevealConfig}>
                            <ProjectImageAndButtonsContainer>
                                <ProjectImageContainer>
                                    <ProjectImage fluid={project.node.frontmatter.image.childImageSharp.fluid} alt='project'/>
                                </ProjectImageContainer>
                                <ProjectButtonsContainer>
                                    <CustomButton
                                        href={project.node.frontmatter.github}
                                        target="_blank"
                                        rel="nofollow noopener noreferrer">
                                            Source Code
                                    </CustomButton>
                                        {
                                            project.node.frontmatter.livePreviewUrl ?
                                            <CustomButton
                                                href={project.node.frontmatter.livePreviewUrl}
                                                target="_blank"
                                                rel="nofollow noopener noreferrer">
                                                    Live Preview
                                            </CustomButton>
                                            : null                                            
                                        }
                                </ProjectButtonsContainer>
                            </ProjectImageAndButtonsContainer>
                            <ProjectDescriptionContainer>
                                <ProjectTitleDescription>
                                    {project.node.frontmatter.title}
                                </ProjectTitleDescription>
                                <ProjectDescription>
                                    {project.node.frontmatter.description}
                                </ProjectDescription>
                                <ProjectTechContainer>
                                    <ProjectTechList>
                                        {
                                            project.node.frontmatter.techs.map((tech,i) => (
                                                <ProjectTechItem key={i}>
                                                    {tech}
                                                </ProjectTechItem>
                                            ))
                                        }
                                    </ProjectTechList>
                                </ProjectTechContainer>
                            </ProjectDescriptionContainer>
                        </ProjectContainer>
                    ))
                : 
                <ProjectContainer ref={revealContainer}>
                    <ProjectDescriptionContainer>
                        <ProjectDescription>
                        There are currently no Project here. Please add some projects to the projects" folder in the "content" folder.
                        </ProjectDescription>
                    </ProjectDescriptionContainer>
                </ProjectContainer>
            }
        </ProjectsContainer>
    )
};

export default Projects;