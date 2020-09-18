import React from 'react';
import {
    ProjectsContainer,
    ProjectContainer,
    ProjectTitle,
    ProjectImageAndButtonsContainer,
    ProjectImageContainer,
    ProjectImage,
    ProjectButtonsContainer,
    ProjectButton,
    ProjectDescriptionContainer,
    ProjectTitleDescription,
    ProjectDescription,
    ProjectTechContainer,
    ProjectTechList,
    ProjectTechItem
}
from '../../styles/sections/projectsSection.style';

const Projects = ({data}) => {
    return (
        <ProjectsContainer id='projects'>
            <ProjectTitle>
                Projects
            </ProjectTitle>
            {
                data.length > 0 ?
                    data.map((project) => (
                        <ProjectContainer key={project.node.id}>
                            <ProjectImageAndButtonsContainer>
                                <ProjectImageContainer>
                                    <ProjectImage src={project.node.frontmatter.imagePath.publicURL} />
                                </ProjectImageContainer>
                                <ProjectButtonsContainer>
                                    <ProjectButton 
                                        href={project.node.frontmatter.github}
                                        target="_blank"
                                        rel="nofollow noopener noreferrer"
                                        >Repo</ProjectButton>
                                    <ProjectButton
                                        href={project.node.frontmatter.livePreviewUrl}
                                        target="_blank"
                                        rel="nofollow noopener noreferrer"
                                        >Live Preview</ProjectButton>
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
                <ProjectContainer>
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