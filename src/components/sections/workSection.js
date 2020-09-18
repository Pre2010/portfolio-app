import React, {useEffect, useRef} from 'react';
import {
    WorksContainer,
    WorksTitle,
    WorkJobsAccordionContainer,
    WorkJobsListCardContainer,
    WorkDescriptionCardBodyContainer,
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
import Accordion from 'react-bootstrap/Accordion';
import scrollReveal from '../../utils/globalScrollReveal';
import {scrollRevealConfig} from '../../config';

const Work = ({data}) => {
    // sets the most recent job to be automatically opened in the Accordion
    const defaultWork = data[0].node.id;
    const jobTechDescription = "Technology Stack: ";

    // scroll reveal animation
    const revealContainer = useRef(null);
    useEffect(() => {
        scrollReveal.reveal(revealContainer.current, scrollRevealConfig('top'));
    }, []);

    return (
        <WorksContainer id='work' ref={revealContainer}>
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