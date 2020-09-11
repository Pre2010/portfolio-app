import React from 'react';
import {
    ProjectsContainer,
    ProjectsTitle,
    ProjectsImageAndButtonsContainer,
    ProjectsImageContainer,
    ProjectsImage,
    ProjectsButtonsContainer,
    ProjectsButton,
    ProjectsDescriptionContainer,
    ProjectsDescription,
    ProjectsTechContainer,
    ProjectsTechList,
    ProjectsTechItem
}
from '../../styles/sections/projectsSection.style';

const Projects = ({data}) => {
    return (
        <>
            <ProjectsTitle>
                Projects
            </ProjectsTitle>
            {
                data.length > 0 ?
                    data.map((project, i) => (
                        <ProjectsContainer key={i}>
                            <ProjectsImageAndButtonsContainer>
                                <ProjectsImageContainer>
                                    <ProjectsImage src={project.node.frontmatter.imagePath.publicURL} />
                                </ProjectsImageContainer>
                                <ProjectsButtonsContainer>
                                    <ProjectsButton 
                                        href={project.node.frontmatter.github}
                                        target="_blank"
                                        rel="nofollow noopener noreferrer"
                                        >Repo</ProjectsButton>
                                    <ProjectsButton
                                        href={project.node.frontmatter.livePreviewUrl}
                                        target="_blank"
                                        rel="nofollow noopener noreferrer"
                                        >Live Preview</ProjectsButton>
                                </ProjectsButtonsContainer>
                            </ProjectsImageAndButtonsContainer>
                            <ProjectsDescriptionContainer>
                                <ProjectsDescription>
                                    {project.node.frontmatter.title}
                                </ProjectsDescription>
                                <ProjectsDescription>
                                    {project.node.frontmatter.description}
                                </ProjectsDescription>
                                <ProjectsTechContainer>
                                    <ProjectsTechList>
                                        {
                                            project.node.frontmatter.techs.map((tech,i) => (
                                                <ProjectsTechItem>
                                                    {tech}
                                                </ProjectsTechItem>
                                            ))
                                        }
                                    </ProjectsTechList>
                                </ProjectsTechContainer>
                            </ProjectsDescriptionContainer>
                        </ProjectsContainer>
                    ))
                : 
                <ProjectsContainer>
                    <ProjectsDescriptionContainer>
                        <ProjectsDescription>
                        There are currently no projects here. Please add some projects to the projects" folder in the "content" folder.
                        </ProjectsDescription>
                    </ProjectsDescriptionContainer>
                </ProjectsContainer>
            }
        </>
    )
};

export default Projects;