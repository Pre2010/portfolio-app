import React from 'react';
import {
    WorksContainer,
    WorksTitle,
    WorkJobsAccordionContainer,
    WorkJobsListCardContainer,
    WorkJobsListAccordionToggle,
    WorkDescriptionAccordionCollapse,
    WorkDescriptionCardBodyContainer,
    WorkDescriptionContainer,
    WorkCompanyName,
    WorkJobDate,
    WorkJobTitle,
    WorkJobTechDescription,
    WorkJobTechList,
    WorkJobTechItem,
    WorkJobDescriptionList,
    WorkJobDescriptionItem
}
from '../../styles/sections/workSection.style';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion'

const Work = ({data}) => {
    // sets the most recent job to be automatically opened in the Accordion
    console.log(data)
    const defaultWork = data[0].node.id;
    // const jobData = data[0].node.frontmatter;
    const jobTechDescription = "Technology Stack: ";
    return (
        <WorksContainer id='work'>
            <WorksTitle>Work Experience</WorksTitle>
            <WorkJobsAccordionContainer>
                    <Accordion defaultActiveKey={defaultWork}>
                    <WorkJobsListCardContainer>
                        {
                        data.length > 0 ?
                        data.map((job) => (
                            <Card key={job.node.id}>
                            <Accordion.Toggle as={Card.Header} eventKey={job.node.id}>
                                    <WorkCompanyName>
                                    {job.node.frontmatter.company}
                                </WorkCompanyName>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={job.node.id}>
                            <WorkDescriptionCardBodyContainer>
                                <Card.Body>
                                    <WorkDescriptionCardBodyContainer>
                                        <WorkJobTitle>
                                            {job.node.frontmatter.title}
                                        </WorkJobTitle>
                                        <WorkJobDate>
                                            {job.node.frontmatter.startDate} - {job.node.frontmatter.endDate}
                                        </WorkJobDate>
                                        <WorkJobTechDescription>
                                            {jobTechDescription}
                                        </WorkJobTechDescription>
                                        <WorkJobTechList>
                                            {
                                                job.node.frontmatter.technology.map((tech, i) => (
                                                    <WorkJobTechItem key={i}>
                                                        {tech}
                                                    </WorkJobTechItem>
                                                ))
                                            }
                                        </WorkJobTechList>
                                        <WorkJobDescriptionList>
                                            {
                                                job.node.frontmatter.jobDescription.map((desc, i) => (
                                                    <WorkJobDescriptionItem key={i}>
                                                        {desc}
                                                    </WorkJobDescriptionItem>
                                                ))
                                            }
                                        </WorkJobDescriptionList>
                                    </WorkDescriptionCardBodyContainer>
                                </Card.Body>
                            </WorkDescriptionCardBodyContainer>
                            </Accordion.Collapse>
                        </Card>
                        ))
                        
                        : null
                        }
                    </WorkJobsListCardContainer>
                </Accordion>
            </WorkJobsAccordionContainer>
        </WorksContainer>
    )
};

export default Work;